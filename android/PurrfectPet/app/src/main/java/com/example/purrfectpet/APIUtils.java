package com.example.purrfectpet;

import android.os.AsyncTask;
import android.util.Log;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class APIUtils {

    public static void putWithAsyncTask(JSONObject jsonObject, String url, AsyncResponse resultCallback) {
        PutTask putTask = new PutTask(jsonObject, url, resultCallback);
        putTask.execute();
    }

    private static class PutTask extends AsyncTask<Void, Void, String> {

        private final JSONObject jsonObject;
        private final String url;
        private final AsyncResponse resultCallback;

        public PutTask(JSONObject jsonObject, String url, AsyncResponse resultCallback) {
            this.jsonObject = jsonObject;
            this.url = url;
            this.resultCallback = resultCallback;
        }

        @Override
        protected String doInBackground(Void... voids) {
            StringBuilder response = new StringBuilder();
            HttpURLConnection connection = null;

            try {
                URL urlObj = new URL(url);
                connection = (HttpURLConnection) urlObj.openConnection();
                connection.setRequestMethod("PUT");
                connection.setRequestProperty("Content-Type", "application/json");
                connection.setDoOutput(true);

                OutputStream os = connection.getOutputStream();
                os.write(jsonObject.toString().getBytes());
                os.flush();

                int responseCode = connection.getResponseCode();
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    InputStream inputStream = connection.getInputStream();
                    response = readResponse(inputStream);
                } else {
                    Log.e("APIUtils", "PUT request failed with response code: " + responseCode);
                }
            } catch (IOException e) {
                Log.e("APIUtils", "PUT request failed: " + e.getMessage());
            } finally {
                if (connection != null) {
                    connection.disconnect();
                }
            }

            return response.toString();
        }

        @Override
        protected void onPostExecute(String result) {
            resultCallback.onResult(result);
        }

        private static StringBuilder readResponse(InputStream inputStream) throws IOException {
            StringBuilder response = new StringBuilder();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line).append("\n");
            }
            return response;
        }
    }

    public interface AsyncResponse {
        void onResult(String result);
    }
}

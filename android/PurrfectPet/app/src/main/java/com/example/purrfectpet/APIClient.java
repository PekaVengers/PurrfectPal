package com.example.purrfectpet;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class APIClient {

    public static void main(String[] args) {
        try {
            // API endpoint URL
            URL url = new URL("https://3509-14-194-211-58.ngrok-free.app/auth/token/");

            // Create HttpURLConnection object
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set request method
            connection.setRequestMethod("POST");

            // Set request headers
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setRequestProperty("Accept", "application/json");

            // Enable input/output
            connection.setDoInput(true);
            connection.setDoOutput(true);

            JSONObject requestBody = new JSONObject();
            requestBody.put("username", "ray@gmail.com");
            requestBody.put("password", "ray");
            requestBody.put("client_id", "FuAVD0yMIwn6quI4pfOncjY88EacyNgciVAoSVLe");
            requestBody.put("client_secret", "yU4NSVYwcXDfoLEyCgcchYRr52WX5GBKSc8E7kCzdXRqo5Ddjcw7owPzMjbBqdzu4nXFFuUp0HVZDSlvk53ifdsu7rQeQps04qLIBSwgUBwYeh0UjF4hqnK5iYEKoAlp");
            requestBody.put("grant_type", "password");

            // Write request body to the connection output stream
            OutputStream outputStream = connection.getOutputStream();
            outputStream.write(requestBody.toString().getBytes());
            outputStream.flush();
            outputStream.close();

            // Get response code
            int responseCode = connection.getResponseCode();

            // Read response body
            BufferedReader reader;
            if (responseCode == HttpURLConnection.HTTP_OK) {
                reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            } else {
                reader = new BufferedReader(new InputStreamReader(connection.getErrorStream()));
            }

            StringBuilder response = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                response.append(line);
            }
            reader.close();

            // Print response
            System.out.println("Response Code: " + responseCode);
            System.out.println("Response Body: " + response.toString());

            // Close connection
            connection.disconnect();

        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }
}

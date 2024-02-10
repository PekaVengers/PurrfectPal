package com.example.purrfectpet;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import android.os.AsyncTask;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import pub.devrel.easypermissions.EasyPermissions;

public class Login_Activity extends AppCompatActivity {
    private static final String API_URL = "https://cute-apes-push.loca.lt/auth/token/";

    private EditText editTextUsername, editTextPassword;
    private Button buttonLogin;
    private TextView textViewRegister;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        editTextUsername = findViewById(R.id.editTextUsername);
        editTextPassword = findViewById(R.id.editTextPassword);
        buttonLogin = findViewById(R.id.buttonLogin);
        textViewRegister = findViewById(R.id.textViewRegister);

        buttonLogin.setOnClickListener(v -> login());

        textViewRegister.setOnClickListener(v -> {
            Intent intent = new Intent(Login_Activity.this, Register_Activity.class);
            startActivity(intent);
        });
    }

    private void login() {
        String username = editTextUsername.getText().toString().trim();
        String password = editTextPassword.getText().toString().trim();

        // Validate the input fields
        if (username.isEmpty() || password.isEmpty()) {
            Toast.makeText(this, "Please enter username and password", Toast.LENGTH_SHORT).show();
            return;
        }

        // Perform login through API
        new LoginTask().execute(username, password);
    }

    private class LoginTask extends AsyncTask<String, Void, String> {

        @Override
        protected String doInBackground(String... params) {
            String username = params[0];
            String password = params[1];

            try {
                // Create JSON object with login credentials
                JSONObject postData = new JSONObject();
                postData.put("username", username);
                postData.put("password", password);
                postData.put("client_id", "FuAVD0yMIwn6quI4pfOncjY88EacyNgciVAoSVLe");
                postData.put("client_secret", "yU4NSVYwcXDfoLEyCgcchYRr52WX5GBKSc8E7kCzdXRqo5Ddjcw7owPzMjbBqdzu4nXFFuUp0HVZDSlvk53ifdsu7rQeQps04qLIBSwgUBwYeh0UjF4hqnK5iYEKoAlp");
                postData.put("grant_type", "password");

                // Establish connection
                URL url = new URL(API_URL);
                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
                urlConnection.setRequestMethod("POST");
                urlConnection.setRequestProperty("Content-Type", "application/json");
                urlConnection.setDoOutput(true);

                // Write JSON data to output stream
                OutputStream outputStream = urlConnection.getOutputStream();
                outputStream.write(postData.toString().getBytes());
                outputStream.flush();
                outputStream.close();

                // Read response from input stream
                InputStream inputStream = urlConnection.getInputStream();
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
                StringBuilder stringBuilder = new StringBuilder();
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    stringBuilder.append(line);
                }
                inputStream.close();

                return stringBuilder.toString();
            } catch (IOException | JSONException e) {
                e.printStackTrace();
            }

            return null;
        }

        @Override
        protected void onPostExecute(String response) {
            super.onPostExecute(response);

            if (response != null) {
                try {
                    // Parse JSON response
                    JSONObject jsonResponse = new JSONObject(response);

                    // Check if login was successful
                    if (jsonResponse.has("access_token")) {
                        // Login successful, navigate to home activity
                        Toast.makeText(Login_Activity.this, "Login successful", Toast.LENGTH_SHORT).show();
                        Intent intent = new Intent(Login_Activity.this, HomeActivity.class);
                        startActivity(intent);
                    } else {
                        // Login failed, display error message
                        Toast.makeText(Login_Activity.this, "Login failed. Please check your credentials", Toast.LENGTH_SHORT).show();
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                    Toast.makeText(Login_Activity.this, "Error parsing response", Toast.LENGTH_SHORT).show();
                }
            } else {
                Toast.makeText(Login_Activity.this, "Error connecting to server", Toast.LENGTH_SHORT).show();
                Intent intent = new Intent(Login_Activity.this, Addhar_Verification_Activity.class);
                startActivity(intent);
            }
        }
    }
}
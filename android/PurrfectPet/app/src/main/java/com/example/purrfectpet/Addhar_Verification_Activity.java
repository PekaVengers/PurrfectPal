package com.example.purrfectpet;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class Addhar_Verification_Activity extends AppCompatActivity {

    private EditText aadhaarNumberEditText;
    private Button verifyButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_addhar_verification);

        // Initialize views
        aadhaarNumberEditText = findViewById(R.id.aadhaarNumberEditText);
        verifyButton = findViewById(R.id.verifyButton);

        // Set click listener for the verify button
        verifyButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                verifyAadhaar();
            }
        });
    }

    private void verifyAadhaar() {
        // Get Aadhaar number entered by the user
        String aadhaarNumber = aadhaarNumberEditText.getText().toString().trim();

        // Validate Aadhaar number (You may want to add more validations)
        if (aadhaarNumber.length() != 12) {
            Toast.makeText(this, "Invalid Aadhaar number. Please enter a 12-digit Aadhaar number.", Toast.LENGTH_SHORT).show();
            return;
        }

        // Perform verification process (You can implement this based on your requirements)

        // For now, let's just display a toast message indicating successful verification
        Toast.makeText(this, "Aadhaar number verified successfully!", Toast.LENGTH_SHORT).show();

        // You can also navigate to the next screen after successful verification
         Intent intent = new Intent(Addhar_Verification_Activity.this, PsycQuestionActivity.class);
         startActivity(intent);

    }
}
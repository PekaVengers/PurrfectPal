package com.example.purrfectpet;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class AboutUs extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_about_us);

        // Initialize views
        ImageView imageViewLogo = findViewById(R.id.imageViewLogo);
        TextView textViewAppName = findViewById(R.id.textViewAppName);
        TextView textViewNote = findViewById(R.id.textViewNote);

        // Set app logo
        imageViewLogo.setImageResource(R.drawable.logo);

        // Set app name
        textViewAppName.setText(getString(R.string.app_name));

        // Set short note
        textViewNote.setText(R.string.note_about_us);
    }
}
package com.example.purrfectpet;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class Pet_profile extends AppCompatActivity {
    private ImageView imageViewPet;
    private TextView textViewName, textViewType, textViewBreed, textViewAge,
            textViewOtherInfo, textViewOwnersInfo;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pet_profile);

        // Retrieve the Pet object from intent extras
        Intent intent = getIntent();
        Pet selectedPet = (Pet) intent.getSerializableExtra("selected_pet");

        // Initialize views
        imageViewPet = findViewById(R.id.imageViewPet);
        textViewName = findViewById(R.id.textViewName);
        textViewType = findViewById(R.id.textViewType);
        textViewBreed = findViewById(R.id.textViewBreed);
        textViewAge = findViewById(R.id.textViewAge);
        textViewOtherInfo = findViewById(R.id.textViewOtherInfo);
        textViewOwnersInfo = findViewById(R.id.textViewOwnersInfo);

        // Set pet profile data
        setPetProfileData(selectedPet);
    }
    private void setPetProfileData(Pet pet) {
        // Simulated pet profile data
        String name = pet.getName();
        String type = pet.getType();
        String breed = pet.getBreed();
        String age = "2 years";
        String otherInfo = "Fluffy loves long walks in the park and playing fetch.";
        String ownersInfo = "Owner: John Doe\nContact: john.doe@example.com";

        // Set pet profile data to views
        textViewName.setText(name);
        textViewType.setText(String.format("Type: %s", type));
        textViewBreed.setText(String.format("Breed: %s", breed));
        textViewAge.setText(String.format("Age: %s", age));
        textViewOtherInfo.setText(otherInfo);
        textViewOwnersInfo.setText(ownersInfo);

        // Set pet profile image (replace with actual image loading logic)
        imageViewPet.setImageResource(R.drawable.splash);
    }

}
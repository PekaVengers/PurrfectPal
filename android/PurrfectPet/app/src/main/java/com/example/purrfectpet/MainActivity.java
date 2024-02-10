package com.example.purrfectpet;

import android.content.Intent;
import android.os.Bundle;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    LinearLayout linearLayout_request;
    LinearLayout linearLayout_add_pet;

    LinearLayout linearLayout_my_pets;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        linearLayout_request = findViewById(R.id.request_pet);
        linearLayout_add_pet = findViewById(R.id.add_pet);
        linearLayout_my_pets = findViewById(R.id.your_pets);

        linearLayout_request.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, HomeActivity.class);
            startActivity(intent);
        });

        linearLayout_add_pet.setOnClickListener(v ->{
            Intent intent = new Intent(MainActivity.this , AddPetActivity.class);
            startActivity(intent);
        });

        linearLayout_my_pets.setOnClickListener(v ->{
            Intent intent = new Intent(MainActivity.this , MyPets.class);
            startActivity(intent);
        });


    }
}
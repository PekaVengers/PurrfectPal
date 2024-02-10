package com.example.purrfectpet;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MyPets extends AppCompatActivity implements PetAdapter.OnItemClickListener {

    private RecyclerView recyclerView;
    private PetAdapter petAdapter;
    private List<Pet> petList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_pets);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        petList = new ArrayList<>();

        // Sample pet details
        petList.add(new Pet("Fluffy", "Dog", "Golden Retriever", "https://example.com/fluffy.jpg"));


        // Populate petList with data fetched from JSON API

        petAdapter = new PetAdapter(petList, this);
        recyclerView.setAdapter(petAdapter);
    }

    @Override
    public void onItemClick(Pet pet) {
        // Handle item click here, for example, show a toast with the pet's name
        Toast.makeText(this, "Clicked on " + pet.getName(), Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(MyPets.this, Pet_profile.class);
        intent.putExtra("selected_pet", pet);
        startActivity(intent);
    }
}
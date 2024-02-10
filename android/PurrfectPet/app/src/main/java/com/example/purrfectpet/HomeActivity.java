package com.example.purrfectpet;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class HomeActivity extends AppCompatActivity implements PetAdapter.OnItemClickListener {

    private RecyclerView recyclerView;
    private PetAdapter petAdapter;
    private List<Pet> petList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        recyclerView = findViewById(R.id.recyclerView);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));

        petList = new ArrayList<>();

        // Sample pet details
        petList.add(new Pet("Fluffy", "Dog", "Golden Retriever", "https://example.com/fluffy.jpg"));
        petList.add(new Pet("Whiskers", "Cat", "Siamese", "https://example.com/whiskers.jpg"));
        petList.add(new Pet("Max", "Dog", "Labrador Retriever", "https://example.com/max.jpg"));

        // Populate petList with data fetched from JSON API

        petAdapter = new PetAdapter(petList , this);
        recyclerView.setAdapter(petAdapter);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle item selection
        int id = item.getItemId();
        if (id == R.id.action_profile) {
                openProfile();
                return true;
        } else if (id == R.id.action_about) {
            openAboutUs();
            return true;
        } else if (id == R.id.action_logout) {
            logout();
            return true;
        }

        return false;
    }

    @Override
    public void onItemClick(Pet pet) {
        // Handle item click here, for example, show a toast with the pet's name
        Toast.makeText(this, "Clicked on " + pet.getName(), Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(HomeActivity.this, Pet_profile.class);
        intent.putExtra("selected_pet", pet);
        startActivity(intent);
    }

    private void openProfile() {
        Intent intent = new Intent(HomeActivity.this, MainActivity.class);
        startActivity(intent);
    }

    private void openAboutUs(){
        Intent intent = new Intent(HomeActivity.this, AboutUs.class);
        startActivity(intent);
    }

    private void logout(){
        Toast.makeText(this, "Logout", Toast.LENGTH_SHORT).show();
    }
}
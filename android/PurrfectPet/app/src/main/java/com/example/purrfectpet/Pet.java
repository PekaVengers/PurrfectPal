package com.example.purrfectpet;
import java.io.Serializable;

public class Pet implements Serializable {
    private String name;
    private String type;
    private String breed;
    private String imageUrl;

    // Constructor, getters, and setters

    // Example of constructor and getters/setters
    public Pet(String name, String type, String breed, String imageUrl) {
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.imageUrl = imageUrl;
    }

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}

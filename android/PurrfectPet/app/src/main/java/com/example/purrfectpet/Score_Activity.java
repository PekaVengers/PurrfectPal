package com.example.purrfectpet;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

public class Score_Activity extends AppCompatActivity {
    private TextView scoreTextView;

    private Button nextButton;
    private int score;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_score);

        // Initialize views
        scoreTextView = findViewById(R.id.scoreTextView);
        nextButton = findViewById(R.id.Next);

        // Get the score from intent
        score = getIntent().getIntExtra("score", 0);

        // Display the score
        updateScore(score);

        nextButton.setOnClickListener(v -> {
             Intent intent = new Intent(Score_Activity.this, HomeActivity.class);
             startActivity(intent);
        });
    }

    private void updateScore(int score) {
        scoreTextView.setText("Your Score: " + score);
    }
}
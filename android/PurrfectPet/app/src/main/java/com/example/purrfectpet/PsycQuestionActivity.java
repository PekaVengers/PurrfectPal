package com.example.purrfectpet;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.concurrent.atomic.AtomicInteger;

public class PsycQuestionActivity extends AppCompatActivity {

    EditText answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10;
    TextView question1, question2, question3, question4, question5, question6, question7, question8, question9, question10;

    Button evaluate;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_psyc_question);

        answer1 = findViewById(R.id.answer1);
        answer2 = findViewById(R.id.answer2);
        answer3 = findViewById(R.id.answer3);
        answer4 = findViewById(R.id.answer4);
        answer5 = findViewById(R.id.answer5);
        answer6 = findViewById(R.id.answer6);
        answer7 = findViewById(R.id.answer7);
        answer8 = findViewById(R.id.answer8);
        answer9 = findViewById(R.id.answer9);
        answer10 = findViewById(R.id.answer10);

        question1 = findViewById(R.id.question1);
        question2 = findViewById(R.id.question2);
        question3 = findViewById(R.id.question3);
        question4 = findViewById(R.id.question4);
        question5 = findViewById(R.id.question5);
        question6 = findViewById(R.id.question6);
        question7 = findViewById(R.id.question7);
        question8 = findViewById(R.id.question8);
        question9 = findViewById(R.id.question9);
        question10 = findViewById(R.id.question10);

        evaluate = findViewById(R.id.evaluate);

        question1.setText(R.string.question_1);
        question2.setText(R.string.question_2);
        question3.setText(R.string.question_3);
        question4.setText(R.string.question_4);
        question5.setText(R.string.question_5);
        question6.setText(R.string.question_6);
        question7.setText(R.string.question_7);
        question8.setText(R.string.question_8);
        question9.setText(R.string.question_9);
        question10.setText(R.string.question_10);

        evaluate.setOnClickListener(v -> {
            evaluate_score();
        });
    }

    // Function to evaluate the score , if any filed is empty then put a toast to fill all entry
    private void evaluate_score() {
        if (answer1.getText().toString().isEmpty() || answer2.getText().toString().isEmpty() || answer3.getText().toString().isEmpty() || answer4.getText().toString().isEmpty() || answer5.getText().toString().isEmpty() || answer6.getText().toString().isEmpty() || answer7.getText().toString().isEmpty() || answer8.getText().toString().isEmpty() || answer9.getText().toString().isEmpty() || answer10.getText().toString().isEmpty()) {
            Toast.makeText(this, "Please fill all the entries", Toast.LENGTH_SHORT).show();
        } else {
            String[] answers = {answer1.getText().toString(), answer2.getText().toString(), answer3.getText().toString(), answer4.getText().toString(), answer5.getText().toString(), answer6.getText().toString(), answer7.getText().toString(), answer8.getText().toString(), answer9.getText().toString(), answer10.getText().toString()};
            int totalScore = 0;

            for (String answer : answers) {
                int sentiment = getSentimentScore(answer);

                if (sentiment > 0) {
                    totalScore += 1;
                } else if (sentiment < 0) {
                    totalScore -= 1;
                }
            }

            // Display the result in Toast
            if (totalScore > 0) {
                Toast.makeText(this, "You are doing great, keep it up!", Toast.LENGTH_SHORT).show();
            } else if (totalScore < 0) {
                Toast.makeText(this, "You should take care of yourself, you are not doing well!", Toast.LENGTH_SHORT).show();
            } else {
                Toast.makeText(this, "You are doing good, but you can do better!", Toast.LENGTH_SHORT).show();
            }

            // Open the score activity and pass the score
             Intent intent = new Intent(PsycQuestionActivity.this, Score_Activity.class);
             intent.putExtra("score", totalScore);
             startActivity(intent);

        }
    }

    private int getSentimentScore(String text) {
        AtomicInteger score = new AtomicInteger();

        if (text != null && !text.isEmpty()) {
            JSONObject requestData = new JSONObject();
            try {
                requestData.put("sentence", text);
            } catch (JSONException e) {
                e.printStackTrace();
            }



            // URL of the endpoint
            String url = "https://c87b-2401-4900-78e6-7ffa-bd56-133-d7b4-7ba8.ngrok-free.app/sentiment";

            // Make a POST request to the endpoint with the sentence data
            APIUtils.putWithAsyncTask(requestData, url, result -> {
                // get score from the result json
                try {
                    JSONObject resultJson = new JSONObject(result);
                    score.set(resultJson.getInt("score"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                Toast.makeText(PsycQuestionActivity.this, score.toString(), Toast.LENGTH_LONG).show();
            });


        }


        return score.get();
    }
}
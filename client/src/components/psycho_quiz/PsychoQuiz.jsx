import { useState } from "react";
import { Quiz } from "./Quiz";
import { Form } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/BASE_URL";
import Cursor from "../Cursor";

const PsychoQuiz = () => {
  const { questions } = Quiz;
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [answered, setAnswered] = useState(Array(questions.length).fill(false));

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);

    const newAnswered = [...answered];
    newAnswered[index] = event.target.value.trim() !== ""; // Check if answer is not empty
    setAnswered(newAnswered);
  };

  const handleSubmit = () => {
    const bodyData = {
      sentences: answers,
    };
    axios
      .post(`${BASE_URL}/analyse`, bodyData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("POST request successful:", response.data);
      })
      .catch((error) => {
        console.error("Error during POST request:", error.message);
      });
  };

  return (
    <>
      <Cursor />
      <div className="w-full bg-[#919177] font-primary font-semibold">
        <Form
          method="POST"
          className="max-w-[98%] mt-[5rem] gsm:mt-[8rem] px-[1rem] py-[0.5rem] flex flex-col justify-center items-center"
        >
          <h1 className="text-[2.5rem] vsm:text-[4.5rem] md:text-[6rem] font-primary uppercase font-bold my-[1rem]">
            Quiz
          </h1>
          <div className="questions md:w-[80%] lg:w-[75%] xl:w-[70%]">
            {questions.map((ques, index) => {
              return (
                <div key={index} className="flex flex-col my-[0.8rem]">
                  <h3 className="md:text-[1.5rem]">
                    {index + 1}. {ques.question}
                  </h3>
                  <textarea
                    required
                    className="pl-2 rounded-[0.8rem] border-2 border-black"
                    type="text"
                    value={answers[index]}
                    onChange={(event) => handleAnswerChange(index, event)}
                  />
                  {answered[index] ? (
                    <p style={{ color: "#004225" }}>Answered</p>
                  ) : (
                    <p style={{ color: "red" }}>Not Answered</p>
                  )}
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="bg-[#BBDDF9] font-bold cursor-pointer uppercase mt-[1rem] mb-[2rem] px-[1rem] py-[0.3rem] gsm:px-[2rem] gsm:py-[0.5rem] gsm:text-[1.5rem] rounded-[0.5rem] hover:bg-[#D9D9D9]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Form>
      </div>
    </>
  );
};

export default PsychoQuiz;

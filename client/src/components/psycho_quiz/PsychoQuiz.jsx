import {useState} from 'react'
import { Quiz } from './Quiz';
const PsychoQuiz = () => {
    const {questions} = Quiz;
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [answered, setAnswered] = useState(Array(questions.length).fill(false));

    const handleAnswerChange = (index, event) => {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value;
        setAnswers(newAnswers);

        const newAnswered = [...answered];
        newAnswered[index] = event.target.value.trim() !== ''; // Check if answer is not empty
        setAnswered(newAnswered);
    };

  return (
    <div className='bg-[#919177]'>
        <div>
            <h1>Quiz</h1>
            {
                questions.map((ques, index)=>{
                    return (
                        <div key={index} className='flex flex-col'>
                            {index+1}. <h3>{ques.question}</h3>
                            <textarea required className='border-2 border-black' type="text" value={answers[index]} onChange={(event) => handleAnswerChange(index, event)}/>
                            {answered[index] ? (
                                <p style={{ color: 'green' }}>Answered</p>
                            ) : (
                                <p style={{ color: 'red' }}>Not Answered</p>
                            )}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PsychoQuiz

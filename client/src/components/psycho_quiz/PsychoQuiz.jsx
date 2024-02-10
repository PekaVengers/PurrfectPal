import {useState} from 'react'
import { Quiz } from './Quiz';
const PsychoQuiz = () => {
    const {questions} = Quiz;
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answered,setAnswered] = useState(false);
  return (
    <div className='bg-[#919177]'>
        <div>
            <h1>Quiz</h1>
            {
                questions.map((ques, index)=>{
                    return (
                        <div key={index} className='flex flex-col'>
                            {index+1}. <h3>{ques.question}</h3>
                            <textarea required className='border-2 border-black' type="text" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PsychoQuiz

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { questions } from "../utils/data";
import { Link } from "react-router-dom";
import PaymentPage from "./PaymentPage";

const Samplequestion = (props) => {
  const handleOptionClick = (selectedOption) => {
    let isCorrect = selectedOption === props.ques.correct ? true : false;
    props.selectedAnswer(isCorrect);
  };
  return (
    <div key={props.ques.id} className="box-border h-auto w-auto p-4 border-4 bg-orange-200">
          <p className="text-headingColor font-semibold text-xl">{props.ques.question}</p>
          <div className="mt-2">
            <ul className="">
              <div className="flex flex-col justify-start gap-2">
                {
                  props.ques.option.map((x , i) => {
                    return (
                    <li onClick={() => handleOptionClick(i)}>
                  <input type="radio" value={x} name={props.ques.id} />{" "}
                  <span className="text-md text-textColor ">{x}</span>
                </li>

                   ) })
                }

              </div>
            </ul>
          </div>
          {/* if(option === n.correct ? setScore(score +1) : setScore(score))
          console.log(score); */}
        </div>
  )
}
const QuizContainer = () => {
  const [score, setScore] = useState(0);
  const [option, setOption] = useState("");
  const [discount , SetDiscount] = useState(0);
  console.log(questions);

  const [answer , selectedAnswer] =  useState(() => Array(questions.length).fill(false));
  
  const handleSubmit = () => {
    // if (option === questions[0].correct) {
    //   setScore(score + 1);
    //   console.log(score);
    // }
    console.log(answer);
    // Add similar checks for other questions
    let score = 0;
    answer.map((x) =>{
      if(x === true ) score = score + 1;
    })
    console.log(score);

    let discount1 = 0;
    if(score > 8) discount1 = (50);
    else if(score > 5) discount1 = (25);
    else if(score > 3) discount1 = (10);
    
    SetDiscount(discount1);

    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("discount", JSON.stringify(discount1));
  };

  

  return (
    <div className="mt-2 flex flex-col justify-items-start gap-2">
      {questions && questions.map((n , i) => (
        <Samplequestion ques={n} selectedAnswer = {(isCorrect) => {
          selectedAnswer((prv) =>{
            console.log(isCorrect)
            let prv1 = prv.map((y , j) => {
              if(j == i) {
                return isCorrect
              }
              return y;
            }) 
            return prv1;
          })
        }} questionNo = {i}/>
      ))}
      <div className="flex justify-center items-center">
        <Link to =
         {{pathname : "/Payment_gateway"}}>
        <motion.button
          whileTap={{ scale: 0.8 }}
          type="button"
          className="w-[240px] p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg "
          onClick={handleSubmit}
        >
          Submit
        </motion.button>

        </Link>
      </div>
    </div>
  );
};



export default QuizContainer;

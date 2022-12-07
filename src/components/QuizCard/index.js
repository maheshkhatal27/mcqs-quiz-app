import React, {useState,useEffect} from "react"
import "./index.css"

const QuizCard=()=>{
    const[showFinalResults,setFinalResults]=useState(false)
    const[score,setScore]=useState(0)
    const[currentQuestion,setCurrentQuestion]=useState(0)
    const[seconds,setSeconds]=useState(0)
    const[minutes,setMinutes]=useState(0)
    const [startTimer,setTimer]=useState(true)
   

var timer;
useEffect(()=>{
    timer=setInterval(()=>{
        if(startTimer){
            setSeconds(seconds=>seconds+1);
        }
        console.log(minutes)
        
        if(seconds===59){
            setMinutes(minutes+1)
            setSeconds(0);
            setTimer(true)
        }
        if(minutes===2){
            setFinalResults(true)
            setSeconds(0)
            setMinutes(0)
            setTimer(false)
        }
    },1000)
    return()=>clearInterval(timer)
});



    const questions = [
        {
          text: "What is the capital of India?",
          options: [
            { id: 0, text: "Mumbai", isCorrect: false },
            { id: 1, text: "New Delhi", isCorrect: true },
            { id: 2, text: "Bangalore", isCorrect: false },
            { id: 3, text: "Chennai", isCorrect: false },
          ],
        },
        {
          text: "Which city is called Pink City?",
          options: [
            { id: 0, text: "Jaipur", isCorrect: true },
            { id: 1, text: "Mandi", isCorrect: false },
            { id: 2, text: "Amritsar", isCorrect: false },
            { id: 3, text: "Bangalore", isCorrect: false },
          ],
        },
        {
          text: "Which city is called Silicon Valley of India?",
          options: [
            { id: 0, text: "Mumbai", isCorrect: false },
            { id: 1, text: "Pune", isCorrect: false },
            { id: 2, text: "Bangalore", isCorrect: true },
            { id: 3, text: "New Delhi", isCorrect: false },
          ],
        },
        {
          text: "Which state is called Land of Gods?",
          options: [
            { id: 0, text: "Tamilnadu", isCorrect: false },
            { id: 1, text: "Uttarakhand", isCorrect: true },
            { id: 2, text: "Kerala", isCorrect: false },
            { id: 3, text: "Rajasthan", isCorrect: false },
          ],
        },
        {
          text: "Which state Agra is located in?",
          options: [
            { id: 0, text: "New Delhi", isCorrect: false },
            { id: 1, text: "UttarPradesh", isCorrect: true },
            { id: 2, text: "Punjab", isCorrect: false },
            { id: 3, text: "Bihar", isCorrect: false },
          ],
        },
        {
            text: "What is the capital of Gujarat?",
            options: [
              { id: 0, text: "Surat", isCorrect: false },
              { id: 1, text: "Ahmedabad", isCorrect: false },
              { id: 2, text: "Gandhinagar", isCorrect: true },
              { id: 3, text: "Kutch", isCorrect: false },
            ],
          },
          {
            text: "Howra bridge is located in which State?",
            options: [
              { id: 0, text: "West Bengal", isCorrect: true },
              { id: 1, text: "UttarPradesh", isCorrect: false },
              { id: 2, text: "Punjab", isCorrect: false },
              { id: 3, text: "Bihar", isCorrect: false },
            ],
          },
          {
            text: "Kaziranga National park is located in which state?",
            options: [
              { id: 0, text: "Uttarpradesh", isCorrect: false },
              { id: 1, text: "Assam", isCorrect: true },
              { id: 2, text: "Punjab", isCorrect: false },
              { id: 3, text: "Bihar", isCorrect: false },
            ],
          },
          {
            text: "Warli triabl painting art is from which state?",
            options: [
              { id: 0, text: "New Delhi", isCorrect: false },
              { id: 1, text: "UttarPradesh", isCorrect: false },
              { id: 2, text: "Punjab", isCorrect: false },
              { id: 3, text: "Maharashtra", isCorrect: true },
            ],
          },
          {
            text: "Which state is biggest in India in terms of land area?",
            options: [
              { id: 0, text: "Maharashtra", isCorrect: false },
              { id: 1, text: "UttarPradesh", isCorrect: false },
              { id: 2, text: "Rajasthan", isCorrect: true },
              { id: 3, text: "Bihar", isCorrect: false },
            ],
          },
          {
            text: "Which state is also known as the Fruit Bowl of India?",
            options: [
              { id: 0, text: "Maharashtra", isCorrect: false },
              { id: 1, text: "Himachal Pradesh", isCorrect: true },
              { id: 2, text: "Jammu & Kashmir", isCorrect: false },
              { id: 3, text: "Bihar", isCorrect: false },
            ],
 },
 
 {
            text: "Which place in India is also known as the Land of Rising Sun?",
            options: [
              { id: 0, text: "Sikkim", isCorrect: false },
              { id: 1, text: "Arunachal Pradesh", isCorrect: true },
              { id: 2, text: "Assam", isCorrect: false },
              { id: 3, text: "Bihar", isCorrect: false },
            ],
 },
 
 {
            text: "Which state has the largest population?",
            options: [
              { id: 0, text: "Maharashtra", isCorrect: false },
              { id: 1, text: "Rajasthan", isCorrect: false },
              { id: 2, text: "UttarPradesh", isCorrect: true },
              { id: 3, text: "Bihar", isCorrect: false },
            ],
 },

{
            text: "In what state is Elephant Falls located?",
            options: [
              { id: 0, text: "Mizoram", isCorrect: false },
              { id: 1, text: "Rajasthan", isCorrect: false },
              { id: 2, text: "Meghalaya", isCorrect: true },
              { id: 3, text: "Karnatak", isCorrect: false },
            ],
 }, 
 
{
            text: "Which Capital city is known as the City of Joy?",
            options: [
              { id: 0, text: "Chennai", isCorrect: false },
              { id: 1, text: "Imphal", isCorrect: false },
              { id: 2, text: "Bangalore", isCorrect: false },
              { id: 3, text: "Kolkata", isCorrect: true },
            ],
 }, 
 {
            text: "Which of the following river is known as Dakshina Ganga?",
            options: [
              { id: 0, text: "Cauvery", isCorrect: false },
              { id: 1, text: "Narmada", isCorrect: false },
              { id: 2, text: "Godavari", isCorrect: true },
              { id: 3, text: "Son", isCorrect: false },
            ],
 }, 
  {
            text: "What is the capital of AndhraPradesh?",
            options: [
              { id: 0, text: "Hyderabad", isCorrect: false },
              { id: 1, text: "Chennai", isCorrect: false },
              { id: 2, text: "Bangalaore", isCorrect: false },
              { id: 3, text: "Amaravati", isCorrect: true },
            ],
 }, 
 
 {
            text: "The great Chola temple are located in which State?",
            options: [
              { id: 0, text: "Tamilnadu", isCorrect: true },
              { id: 1, text: "Karnatak", isCorrect: false },
              { id: 2, text: "Kerala", isCorrect: false },
              { id: 3, text: "AndhraPradesh", isCorrect: false },
            ],
 }, 
 
 {
            text: "Which place in India is called as Venice of India?",
            options: [
              { id: 0, text: "Hyderabad", isCorrect: false },
              { id: 1, text: "Chennai", isCorrect: false },
              { id: 2, text: "Bangalaore", isCorrect: false },
              { id: 3, text: "Alleppey", isCorrect: true },
            ],
 }, 
 {
            text: "Which city is called financial capital of India?",
            options: [
              { id: 0, text: "Hyderabad", isCorrect: false },
              { id: 1, text: "Chennai", isCorrect: false },
              { id: 2, text: "Bangalaore", isCorrect: false },
              { id: 3, text: "Mumbai", isCorrect: true },
            ],
 }, 
 
      ];

      const optionClicked=(isCorrect)=>{
            if(isCorrect){
                    setScore(score + 1)
            }

            if(currentQuestion +1 < questions.length){
                setCurrentQuestion(currentQuestion + 1)
            }else{
                setFinalResults(true)
                setTimer(false)
                setSeconds(0)
            }
            
      }

    const  restartQuiz=()=>{
        setScore(0)
        setCurrentQuestion(0)
        setFinalResults(false)
        setTimer(true)
    }

    const onSubmitClose=()=>{

        setFinalResults(true)
        setTimer(false)
        setSeconds(0)
        setMinutes(0)
    }


    return(
        <div className="quiz-card-container">
            <h1 className="time-heading">Time: {minutes < 10 ? "0"+minutes : minutes} : {seconds  < 10 ? "0"+seconds : seconds} </h1>
            <h1 className="current-score">Current Score: {score}</h1>
            {showFinalResults ?   (
            <div className="final-scorecard">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - ({(score/questions.length)*100}%) 
          </h2>
          <button className="button-restart" onClick={()=>restartQuiz()}>Restart Quiz</button>
        </div>) : ( <div className="question-container">
                <h2>Question {currentQuestion+1} out of {questions.length}</h2>
                <h3 className="question">{questions[currentQuestion].text}</h3>
                <ul className="options-container">
                    {questions[currentQuestion].options.map(option=>{
                        return(
                            <li className="options" key={option.id} onClick={()=>optionClicked(option.isCorrect)}>{option.text}</li>
                        )
                    })}
                </ul>
            </div>)}

            {showFinalResults ? " " :(<button type="button" className="submit-btn" onClick={onSubmitClose}>Submit</button>) }
        </div>
    )
}

export default QuizCard
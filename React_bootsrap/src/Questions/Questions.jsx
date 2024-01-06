import React, { useState } from "react";
import * as Components from "../components/Components";
import "./../styling/App.css";
import { RxTriangleDown  } from "react-icons/rx";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { RiRadioButtonFill } from "react-icons/ri";
import {Quizs} from '../Data/QuizData'

const Questions = () => {
    const [ check , setcheck] = useState(1);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);

    const changeQuestion_tonext = () => {
        setScore(score + check*0.25);
        if (currentQuestion + 1 < Quizs.length ) {
        setCurrentQuestion(currentQuestion+1);
        }else{
          setShowResult(true);
        }
    }
    
    const changeQuestion_toprev = () => {
        setScore(score - check*0.25);
        if (currentQuestion > 0 ) {
        setCurrentQuestion(currentQuestion - 1);
        }else{

        }
    }

    const tryAgain = () => {
        setcheck(0);
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    }
  
  return (
    <div>
      <Components.Body className="back-wave">
        <Components.Container className="cont_quest" style={{background : '#DAFFFB'}}>
            <Components.Row>
            <img src="./img/logo1.png" alt=""  width={30}/>
            <div>Hello Mensour <RxTriangleDown /></div> 
            </Components.Row>
             {
              showResult ? 
              <div className="resulta">
                <h1>the analysis' results</h1>
                <p>{score}</p>
                <div className="btn-next">
                    <span>Send</span>
                </div>
                <div className="btn-prev" onClick={tryAgain}>
                    <span>Try Again</span>
                </div>
              </div> : 
              <div className="info">
                <div className="Conteur" > {currentQuestion + 1} Of {Quizs.length} </div>
                <div className="category" > Category : {Quizs[currentQuestion].Category} </div>
                <div className="Qest" > 
                    {Quizs[currentQuestion].Question}
                </div>
                <div className="reponse">
                    <ul>
                        {Quizs[currentQuestion].Option.map((e,i)=>{
                            return(
                                <li onClick={()=>setcheck(i + 1)}> { check == i + 1?<RiRadioButtonFill className="radio-ntn"/> : <MdRadioButtonUnchecked className="radio-ntn"/>} {e} </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="btn-next" onClick={changeQuestion_tonext}>
                    <span>Next</span>
                </div>
                <div className="btn-prev" onClick={changeQuestion_toprev}>
                    <span>Prev</span>
                </div>
             </div>
             }
             <img className="wave" src="./img/wave.svg"  alt="" />
        </Components.Container>
      </Components.Body>
    </div>
  );
};

export default Questions;

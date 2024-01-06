import React , {useState} from "react";
import { Quizs, groupedByCategory } from "../../Data/QuizData";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaUserPlus } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import QuizForm from "../Quiz/Form_quiz";
import TopBar from "../TopBar";
const Quiz = () => {
  const [showQuizForm, setShowQuizForm] = useState(false);
const [selectedQuiz, setSelectedQuiz] = useState('');

const handleShowQuizForm = (quiz) => {
  setSelectedQuiz(quiz);
  setShowQuizForm(true);
};

const handleHideQuizForm = () => {
  setShowQuizForm(false);
  setSelectedQuiz(null);
};

const handleSaveQuiz = (quizData) => {
  // Handle saving quiz data
  handleHideQuizForm();
};

  return (
    <div>
      <TopBar/>
       <Form className="d-flex mb-4 justify-content-center align-items-center">
          <InputGroup className="my-3 " style={{ width: "400px" }}>
            {/* onChange for search */}
            <Form.Control
              className="p-3 "
              onChange={(e) => {}}
              placeholder="Search contacts"
            />
          </InputGroup>
          <Button className="d-flex align-items-center new_doctors p-3 rounded-2 ms-2" onClick={()=>handleShowQuizForm(null)}>
            <MdAddToPhotos className="fs-4" />
          </Button>
        </Form>
      <div className="">
      {groupedByCategory.map((arr, i) => {
        return (
          <div className="my-3">
            <h1 className="mb-5">
              {i + 1} - {arr[0].Category}
            </h1>
            <div className="row  align-items-center gap-4 d-flex justify-content-center">
              {arr.map((e , i) => {
                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mb-4 card pb-2 ps-2  "
                    style={{ minWidth: "350px", height: "fit-content" }}
                  >
                    <div className="card-body" style={{ width: "100%" }}>
                      <h5 className="card-title"> {i+1} - {e.Question} </h5>
                      <ul className="text-start">
                        {e.Option.map((e) => {
                          return <li>{e}</li>;
                        })}
                      </ul>
                      <div
                        className="btnss d-flex d-flex justify-content-around "
                        style={{ width: "100%" }}
                      >
                        <span className="btn-delete " onClick={() => {}}>
                          Delete
                        </span>
                        <span className="btn-info " onClick={() => handleShowQuizForm(e)}>
                          info
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      </div>
      <QuizForm 
        show={showQuizForm}
        handleClose={handleHideQuizForm}
        onSave={handleSaveQuiz}
        quiz={selectedQuiz}
      />
    </div>
  );
};

export default Quiz;

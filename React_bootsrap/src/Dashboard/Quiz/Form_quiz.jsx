// UserForm.js
import React, { useState ,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../User/patients.css';

const QuizForm = (props) => {
    console.log(props.quiz);
   
    const [formData, setFormData] = useState({
        index: "",
        category: "",
        question: "",
        options: [],
      });
    
      useEffect(() => {
        if (props.quiz) {
            setFormData({
              index: props.quiz.index || "",
              category: props.quiz.Category || "",
              question: props.quiz.Question || "",
              options: props.quiz.Option || [],
            });
          }
      }, [props.quiz]);
  console.log(formData);
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name.toLowerCase()]: value }));
  };

  const handleOptionsChange = (e, index) => {
    const newOptions = [...formData.options];
    newOptions[index] = e.target.value;
    setFormData((prevData) => ({ ...prevData, options: newOptions }));
  };

  const handleSave = () => {
    props.onSave(formData);
    props.handleClose();
  };

  const handleAddOption = () => {
    const newOptions = [...formData.options, ""];
    setFormData((prevData) => ({ ...prevData, options: newOptions }));
  };

  return (
    <Modal show={props.show} onHide={props.handleClose} className="px-5">
      <Modal.Header closeButton>
        <Modal.Title>
          {props.quiz ? `Edit Quiz '${formData.question}'` : "Create New Quiz"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column">
          
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formQuestion">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter question"
              name="question"
              value={formData.question}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formOptions">
            <Form.Label>Options</Form.Label>
            {formData.options.map((option, index) => (
              <Form.Control
                key={index}
                type="text"
                placeholder={`Enter option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionsChange(e, index)}
                className="mb-2"
              />
            ))}
            <div className="btns">
            <Button variant="primary" onClick={handleAddOption} className="mt-2 btn-del">
              Add Option
            </Button>
            </div>
          </Form.Group>

          <div className="btns d-flex justify-content-end">
            <Button variant="primary" onClick={handleSave} className="text-center btn-del">
              Save
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default QuizForm;

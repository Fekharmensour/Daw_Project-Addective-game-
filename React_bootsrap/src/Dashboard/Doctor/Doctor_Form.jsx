// UserForm.js
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import '../User/patients.css';


const Doctor_Form = (props) => {
  console.log(props.user);
  let data = {
    username: props.user ? props.user.username : "",
    email: props.user ? props.user.email : "",
    rating: props.user ? props.user.rating : "",
  };
  const [formData, setFormData] = useState({
    username: props.user ? props.user.username : "",
    email: props.user ? props.user.email : "",
    is_active: props.user ? props.user.is_active : "",
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    props.onSave(formData);
    props.handleClose();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose} className="px-5">
      <Modal.Header closeButton>
        <Modal.Title>
          {props.user ? `Edit User ${data.username}`: "Create New Doctor"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className=" d-flex flex-column ">
          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control type="file" required name="photo" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Sexe</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Birth Day</Form.Label>
            <Form.Control
              type="date"
              placeholder="DD/MM/YYYY"
              name="email"
            />
          </Form.Group>
          
          {/* Add other form fields as needed */}

          <div className="btns d-flex justify-content-end">
          <Button variant="primary" onClick={handleSave}  className="text-center btn-del ">
            Save
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Doctor_Form;
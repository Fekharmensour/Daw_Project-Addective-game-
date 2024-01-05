import React, { useContext, useState } from "react";
import * as Components from "./Components";
import "./../styling/sign.css";
import { FaUserInjured, FaUserTie } from "react-icons/fa";
import { LiaToggleOffSolid } from "react-icons/lia";
import { BsToggleOn } from "react-icons/bs";
import { BiSolidError } from "react-icons/bi";
import Sign from "./Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext_Main from "../context/AuthContext_Main";

function Register() {
  const {register_main} = useContext(AuthContext_Main)
  

  const [signIn, toggle] = useState(true);
  const [Error, Set_Error] = useState("");
  const [Accept, SetAccept] = useState(false);
  const [patient, setpatient] = useState(false);
  const [doctor, setdoctor] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [r_pass, setRpass] = useState("");
  // const [role , setrole] = useState(false)

  function affiche_error() {
    const errors = [];

    if (name === "") {
      errors.push(
        <p className="error">
          <BiSolidError /> &nbsp; <span>Name must be required</span>
        </p>
      );
      return errors;
    }

    if (email === "") {
      errors.push(
        <p className="error">
          <BiSolidError /> <span>Email must be required</span>
        </p>
      );
      return errors;
    }

    if (pass.length < 8) {
      errors.push(
        <p className="error">
          {" "}
          <BiSolidError /> &nbsp;{" "}
          <span>Password must be more than 8 characters</span>
        </p>
      );
      return errors;
    }

    if (r_pass !== pass) {
      errors.push(
        <p className="error">
          {" "}
          <BiSolidError /> &nbsp; <span>Password Does not match</span>
        </p>
      );
      return errors;
    }
    if (!patient && !doctor) {
      errors.push(
        <p className="error">
          {" "}
          <BiSolidError /> &nbsp; <span>Choose the client type</span>
        </p>
      );
      return errors;
    }

    return errors;
  }

  function setactive(user) {
    if (patient && user === "doctor") {
      setdoctor(true);
      setpatient(false);
    } else if (doctor && user === "patient") {
      setdoctor(false);
      setpatient(true);
    } else if (!doctor && !patient && user === "patient") {
      setpatient(true);
    } else if (!doctor && !patient && user === "doctor") {
      setdoctor(true);
    }
  }

  async function Submit(e) {
    
    let flag = true;
    e.preventDefault();
    SetAccept(true);
    if (pass.length < 8 || pass !== r_pass || name === "") {
      flag = false;
    } else flag = true;
    if (flag) {
      register_main(name , pass , email , doctor)
    }
  }

  return (
    <Components.Body>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={Submit}>
            <Components.Title>Register</Components.Title>
            <Components.Error>{Accept && affiche_error()}</Components.Error>
            <Components.Input
              type="text"
              placeholder="Name"
              name="username"
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
            />
            <Components.Input
              type="password"
              name="password"
              placeholder="Conferm Password"
              onChange={(e) => {
                setRpass(e.target.value);
              }}
              value={r_pass}
            />
            <Components.BTN>
              <Components.check
                onClick={() => setactive("patient")}
                patient={patient}
                doctor={doctor}
              >
                <FaUserInjured /> &nbsp; Patient <br />{" "}
                {patient ? (
                  <BsToggleOn className="toggle_on" />
                ) : (
                  <LiaToggleOffSolid />
                )}
              </Components.check>
              <Components.check onClick={() => setactive("doctor")}>
                <FaUserTie /> &nbsp; Doctor <br />{" "}
                {doctor ? (
                  <BsToggleOn className="toggle_on" />
                ) : (
                  <LiaToggleOffSolid />
                )}
              </Components.check>
            </Components.BTN>
            <Components.Button>Next</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Sign />

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign IN
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.Body>
  );
}

export default Register;

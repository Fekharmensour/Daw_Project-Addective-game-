import React, {  useState  , useEffect , useContext} from 'react';
import {Route,Navigate, Outlet, useNavigate} from "react-router-dom";
import AuthContext_Main from '../context/AuthContext_Main'
import Patient_interface from '../Patient_interface';
import Doctor_interface from '../Doctor_interface';
import Cookies from "js-cookie";

const Privet_main = () => {
    const navigate = useNavigate()
    
    const {user_main  , role , more_info} = useContext(AuthContext_Main)
    const authenticated = false  ;
    window.localStorage.setItem('rolr', role)
   
    useEffect(() => {
        if (!user_main) {
          navigate('/register');
        } else if (!more_info) {
          navigate('/next-re');
        }
      }, [user_main, more_info, navigate]);
    

  return (
    <Outlet>
    {role === 'patient' && <Route path="/patient-inter" element={<Patient_interface />} />}
    {role === 'doctor' && <Route path="/doctor-inter" element={<Doctor_interface />} />}
  </Outlet>
  )
}

export default Privet_main

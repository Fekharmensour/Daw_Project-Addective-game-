import React, {  useState  , useContext} from 'react';
import {Route,Navigate, Outlet} from "react-router-dom";
import AuthContext_Dashbord from '../context/AuthContext_Dashbord';

const Privet_dashbord = () => {

    const authenticated = false  ;
    const { user_admin} = useContext(AuthContext_Dashbord);
  return (
    user_admin? <Outlet/> : <Navigate to='sign' />
  )
}

export default  Privet_dashbord ;


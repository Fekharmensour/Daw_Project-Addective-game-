import React, { useContext, useState } from "react";
import * as Components from './Components';
import './../styling/sign.css';
import { BiSolidError } from 'react-icons/bi' ;
import AuthContext_Main from "../context/AuthContext_Main";

const Sign =() => {
    const {LogIn_main} = useContext(AuthContext_Main)
    
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); 

    const [signIn, toggle] =useState(true);
    const [name , setname] = useState("")
    const [pass , setPass] = useState("")
    const [Accept , SetAccept] = useState(false)
    const [user_error  , Set_Error ] = useState(""); 

  

    function affiche_error() {
       
        const errors = [];

        if (name === "") {
            errors.push(<p className="error"><BiSolidError/> <span>Username must be required</span></p>);
            return errors;
        }
          
        if (pass.length < 8) {
            errors.push(
                <p className="error"> <BiSolidError/> &nbsp; <span>Password must be more than 8 characters</span></p>
            );
            return errors;
        }
        if (user_error == "400") {
            errors.push(<p className="error">incorrect password/username</p>);
            return errors;
        }
        
    
        return errors;
    }


    async function Submit(e)  {
        let flag = true ;
          e.preventDefault();
          SetAccept(true);
          if ( pass.length < 8  ){
              flag=false ;
          }else flag=true;
          if(flag){
            LogIn_main(name , pass)
            //  let res =await axios
            //  .post('http://192.168.43.12:8000/signin/', {
            //       username : name ,
            //       password: pass 
            //   })
            //  .then(respons => {
            //   // Handle a successful response here
            //   console.log(respons.data);
            //   if(respons.status === 201 ){
            //     // window.location.pathname="/";
            //     console.log(respons.data.sessionid);
                
            //     Cookies.set('username', name , { expires: expirationDate } );
            //     Cookies.set('sessionid', respons.data.sessionid, { expires: expirationDate } );
            //     window.location.pathname=`/next-re/`; 
            //   }
            //  })
            // .catch(error => {
            //   Set_Error(error.response.status)
            //   if (error.response.status === 400) {
            //   // Handle 422 validation errors
            //   console.log('Validation Errors:', error.response.data);
            //   } else {
            //    // Handle other errors
            //    console.error('Request failed with status code', error.response.status);
            //  }
            // });
    
          }
      }

 return(
    <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={Submit} >
            <Components.Title>Sign in</Components.Title>
            <Components.Error>
            {Accept && affiche_error()}
            </Components.Error>
            <Components.Input type='name' placeholder='Username' onChange={(e)=>{setname(e.target.value)}} value={name} />
            <Components.Input type='password' placeholder='Password' onChange={(e)=>{setPass(e.target.value)}} value={pass} />
            <Components.Button>Sigin In</Components.Button>
        </Components.Form>
    </Components.SignInContainer>
 )
}
export default Sign;
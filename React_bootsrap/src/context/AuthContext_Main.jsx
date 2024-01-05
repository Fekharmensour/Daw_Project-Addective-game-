import { createContext  , useState , useEffect} from "react";
import {useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const expirationDate = new Date();
expirationDate.setDate(expirationDate.getDate() + 7);

const Succes_msg_Register = () =>
    toast.success(" your Register seccesfuly !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
const Error_msg_register = () =>
    toast.error(" your Register has error !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
const Succes_msg_Login = () => toast.success(' your login seccesfuly !', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
const Error_msg_Login = () => toast.error(' your login has error !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
    });

const AuthContext_Main = createContext();
export default AuthContext_Main;

export const AuthProvider_Main = ({children}) => {
    const [user , setuser ]=useState(Cookies.get('username')?true:false)
    const [more_info , setMore_info ]=useState(Cookies.get('more_info')?true:false)
    const navigate = useNavigate();
    let rol;

   const Sign_UP = async (username , password , email , role )=>{
    rol = role?"doctor":"patient";
    console.log(username , rol);
       await axios
       .post('http://127.0.0.1:8000/signup/', {
        username:username,
        password:password,
        email:email,
        is_staff:  role,
        is_superuser: false ,
        dateOfBirth : null ,
        })
       .then(respons => {
        // Handle a successful response here

        console.log(respons.status);
        
        if(respons.status === 201 ){
          console.log(respons.data);
          Succes_msg_Register();
        //   Cookies.set('username', username , { expires: expirationDate } );
        //   Cookies.set('sessionid', respons.data.sessionid, { expires: expirationDate } );
        //   navigate('')
        }
       })
      .catch(error => {
        Error_msg_register();
        if (error.response.status === 422) {
        // Handle 422 validation errors
        console.log('Validation Errors:', error.response.data);
        } else {
         // Handle other errors
         console.error('Request failed with status code', error.response.status);
       }
      });
   }

   const Sign_In = async (username , password) => {
    console.log(username);
    await axios
    .post('http://127.0.0.1:8000/signin/', {
         username : username ,
         password: password 
     })
    .then(respons => {
     // Handle a successful response here
     console.log(respons.data);
     if(respons.status === 201 ){
       setuser(true)
       console.log(respons.data);
       Succes_msg_Login()
       Cookies.set('username', username , { expires: expirationDate } );
       navigate('next-re') 
     }
    })
   .catch(error => {
     Error_msg_Login()
     if (error.response.status === 400) {
     // Handle 422 validation errors
     console.log('Validation Errors:', error.response.data);
     } else {
      // Handle other errors
      console.error('Request failed with status code', error.response.status);
    }
   });
   }
   const logout = ()=>{
   
   }

    const ContextData = {
        register_main : Sign_UP ,
        LogIn_main    : Sign_In ,
        user_main     : user ,
        logout_main   : logout,
        role          : rol? rol : false,
        more_info     :more_info,
      }
  
      return(
          <AuthContext_Main.Provider value={ContextData} >
              {children}
          </AuthContext_Main.Provider>
      )
}
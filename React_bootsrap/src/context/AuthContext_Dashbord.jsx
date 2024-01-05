import { createContext  , useState , useEffect} from "react";
import {useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const AuthContext_Dashbord = createContext();
export default AuthContext_Dashbord;

const Succes_msg_Register = () =>
    toast.success(" your LogUn seccesfuly !", {
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
    toast.error(" your Login has error !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

export const AuthProvider_Dashbord = ({children}) => {
    const [user , setuser ]=useState(() => localStorage.getItem('user_admin')? localStorage.getItem('user_admin'): null)
    let username , password;
    const navigate = useNavigate();

   const login =  (e)=>{
    e.preventDefault();
    console.log('is submiting');
    username = e.target.username.value;
    password = e.target.password.value;
    if (username === 'fekhar' && password === '4545') {
         Succes_msg_Register();
        setuser(username);
        localStorage.setItem('user_admin' , username) 
        navigate('/dashbord');
    }else  Error_msg_register() 

   }
   const logout = ()=>{
    setuser(null); 
    localStorage.removeItem('user_admin') 
    navigate('/');
   }

    const ContextData = {
        login_admin : login ,
        user_admin : user ,
        logout_admin : logout
      }
  
      return(
          <AuthContext_Dashbord.Provider value={ContextData} >
              {children}
          </AuthContext_Dashbord.Provider>
      )
}
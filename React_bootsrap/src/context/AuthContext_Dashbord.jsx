import { createContext  , useState , useEffect} from "react";
import {useNavigate } from 'react-router-dom'

const AuthContext_Dashbord = createContext();
export default AuthContext_Dashbord;

export const AuthProvider_Dashbord = ({children}) => {
    const [user , setuser ]=useState(() => localStorage.getItem('user_admin')? localStorage.getItem('user_admin'): null)
    let username , password;
    const navigate = useNavigate();

   const login = (e)=>{
    e.preventDefault();
    console.log('is submiting');
    username = e.target.username.value;
    password = e.target.password.value;
    if (username === 'fekhar' && password === '4545') {
        setuser(username);
        localStorage.setItem('user_admin' , username) 
        navigate('/dashbord');
        alert('your login is succesfully !')
    }else  alert('uncorrect username / password !')

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
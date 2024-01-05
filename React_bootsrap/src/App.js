import {Route , Routes  } from "react-router-dom"
import Home from "./home";
import Register from "./components/register";
import Next_Re from "./components/next_re";
import  Quiz  from "./components/Quiz";
import  Questions  from "./Questions/Questions";
import Dashboard from "./Dashboard";
import Patient from "./Dashboard/pages/Patient";
import Doctor from "./Dashboard/pages/Doctor";
import Static from "./Dashboard/pages/static";
import 'react-bootstrap/dist/react-bootstrap'
import SignIn from "./Dashboard/SignIn";
import Privet_dashbord from "./provide/Privet_rout_dashbord";
import { AuthProvider_Dashbord } from "./context/AuthContext_Dashbord";
import AuthContext_Main, { AuthProvider_Main } from "./context/AuthContext_Main";
import Privet_main from "./provide/Privet_rout_main";
import Doctor_interface from "./Doctor_interface";
import Patient_interface from "./Patient_interface";  

function App() {

 

  return (
    <div className="App">
      <AuthProvider_Main>
        <Routes>
          <Route path='/register' element={<Register  />}/>
          <Route path='/'  element={<Home/>}/>
          <Route  element={ <Privet_main/> } >
            <Route path="/patient-inter" element={<Patient_interface />} />
            <Route path="/doctor-inter" element={<Doctor_interface />} />
            <Route path="next-re" element={<Next_Re/>}/>
            <Route path="next-re" element={<Next_Re/>}/>
            <Route path='questions'  element={<Questions/>}/>
          </Route>
        </Routes>
      </AuthProvider_Main>

      <AuthProvider_Dashbord>
        <Routes>
          {/* this is privete router method */}
          <Route path='/sign' element={<SignIn  />}/>
          <Route element={<Privet_dashbord/>}>
            <Route path='dashbord'  element={<Dashboard/>}>
              <Route path='patient' element={<Patient/>}/>
              <Route path='doctor' element={<Doctor/>}/>
              <Route path='' element={<Static/>}/>
            </Route>
          </Route>
        </Routes>
      </AuthProvider_Dashbord>
    
  </div>
  );
}

export default App;

import React , {useContext} from 'react'
import AuthContext_Dashbord from '../context/AuthContext_Dashbord'


const SignIn = () => {
  const {login_admin} = useContext(AuthContext_Dashbord)
  return (
    <div className='d-flex justify-content-center align-items-center bg-dark ' style={{height:'100vh'}}>
      <form onSubmit={login_admin} className='border shadow p-5 bg-white rounded-4 d-flex justify-content-center align-items-center flex-column' >
        <h4 className='text-center'>Sign In</h4>
        <input type="text" class="form-control rounded-2 ps-4 pe-4 mt-3 mb-2" placeholder="Username" aria-label="Username" name='username'/>
        <input type="password" class="form-control ps-4 pe-4  rounded-2" placeholder="Password" aria-label="Password" name='password'/>
        <input type="submit" class="btn btn-primary text-center justify-content-center mt-3" style={{width:'fit-content'}} value='Sign in ' />
      </form>
    </div>
  )
}

export default SignIn

import React, { useState } from 'react'
import * as Components from './Components';
import Button from 'react-bootstrap/Button';
import { BiSolidError } from 'react-icons/bi'
import axios from 'axios';
import './../styling/sign.css'


const Next_Re = () => {
  const [image , setImage] = useState(null);
  const [Sexe , setSexe] = useState('Male');
  const [date , setDate] = useState(null);
  const [Accept , SetAccept] = useState(false)
  

  function affiche_error() {
       
    const errors = [];

        if (image == null) {
           console.log(date);
            errors.push(<p className="error"><BiSolidError/> &nbsp; <span> Photo Profile must be required</span></p>);
            return errors;
          }
      
          if (date == null) {
            errors.push(<p className="error"><BiSolidError/> <span> Your birthday must be required</span></p>);
            return errors;
          }
      
          
 return errors;
}

   const getData = async () => {
      try {
        const response = await axios.post('http://192.168.43.12:8000/userinfo/', {
          timeout: 5000,
          withCredentials: true,
          sessionid : "54utdmjjg84at5ttt1uxoj4ppfdoly80" ,
          headers: {
            'Content-Type': 'application/json',
            // Add any other necessary headers
        },
        });
        console.log(response.data);
        alert("succesfuly ")
      } catch (error) {
         alert("you have error")
        console.error('Error fetching data:', error);
      }
    };

    async function Post_Data(e) {
      e.preventDefault();
      SetAccept(true);
      const Form_filed = new FormData();
      Form_filed.append('Sexe', Sexe);
      Form_filed.append('birthday', date);
    
      let flag = true;
    
      if (affiche_error().length > 0) {
        flag = false;
      } else {
        flag = true;
        Form_filed.append('image', image);
      }
    
      if (!flag) {
        try {
          const response = await axios.post('http://192.168.43.12:8000/userinfo/', {
            data: Form_filed,
          });
          console.log(response.data);
          alert('Successfully submitted');
        } catch (error) {
          alert('Error submitting data');
          console.error('Error fetching data:', error);
        }
      }
    }
    


  return (
    <div>
      <Components.Body>
         <Components.Container>
             <Components.Form onSubmit={Post_Data}>
                <Components.Title>hi  </Components.Title>
                <Components.Paragraph>
                           Enter Your personal details and start journey with us
                </Components.Paragraph>
                 { Accept && affiche_error() }
                 <Components.flex>
                    < Components.Input_like value={Sexe} onChange={(e)=>{setSexe(e.target.value)}} > 
                        <Components.Option>Male</Components.Option>
                        <Components.Option>Female</Components.Option>
                    </Components.Input_like>
                    <Components.flex>
                       <Components.Lable> birthday</Components.Lable>
                       <Components.Input type='date' onChange={(e)=>{setDate(e.target.value)}} />  
                    </Components.flex>
                    
                 </Components.flex>
                 <Components.Lable> Photo Profile </Components.Lable>
                <Components.Input type='file' onChange={(e)=>{setImage(e.target.files[0])}}/>
                <Components.Button>
                         Sign up
                </Components.Button>
            </Components.Form>
         </Components.Container>
      </Components.Body >      
    </div>
  )
}

export default Next_Re

import styled from 'styled-components';


export const Body = styled.body`
// background: -webkit-linear-gradient(to right buttom  , #164863 , #176B87);
// background: linear-gradient(to right  , #164863 , #176B87);
 background: #001c309d;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family: "Montserrat", sans-serif;
height: 100vh;
margin: 0 !important;
justify-content: space-around;
`

 export const Container = styled.div`
 background-color: #fff;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 800px;
 max-width: 100%;
 padding:10px ;
 min-height: 520px;

 `;

 export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => !props.signinIn ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
 `;
 

 export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 ${props => (!props.signinIn ? `transform: translateX(100%);` : null)}
 `;
 
 export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;
 
 export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 
 `;
 export const Error = styled.p`
 color: #AF0404;
 padding: 5px 15px!important;
 font-weight: 600;
 font-family: sans-serif;
 margin: 0;
 font-width: 600;
 
 `
 
 export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
 `;
 export const Lable =styled.label`
 background-color: #eee;
 font-weight: 400;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
 margin-left:2px;
 `
 export const BTN = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
 width: 100% ;
 margin: 10px;
 `
 export const check =styled.div`
 background-color:#F5F5F5;
 width:fit-content;
 padding:5px 15px;
 margin-bottom:0;
 border:none;
 border-radius: 5px;
 border: 1px solid #ccc;
 transition: 0.5s;
 cursor: pointer;
 &:hover{
    border-color:#427D9D;
 }
 `
 

 export const Button = styled.button`
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #164863 ;
    background-color: #001C30;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    margin-top:10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
 export const GhostButton = styled(Button)`
 background-color: #DAFFFB  ;
 border-color: #DAFFFB;
 border-width: 2px;
 color:#001C30;
 transition: 0.5s;
 cursor: pointer;
 margin-bottom: 5px ;
 &:hover{
  border: 2px solid #DAFFFB;
  background-color: transparent;
  color: #DAFFFB !important;
 }
 `;
 
 export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 `;
 export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
  props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right buttom  , #176B87 , #001C30);
background: linear-gradient(to right  , #176B87 , #001C30);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;
 
 export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

 export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

 export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

 export const Paragraph = styled.p`
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px
 `;

 export const flex = styled.div`
 display:flex ;
 width: 100%;
 padding:5px; 
 align-items: center;
 `
 export const Input_like = styled.select`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 padding-right:30px;
 margin: 8px 0;
 width: 100%;
 `;
 export const Option = styled.option`
 `;

 export const Row = styled.div`
 display:flex ;
 justify-content: space-between;
 width: 100%;
 padding:10px 20px 0px ; 
 align-items: center;
 `
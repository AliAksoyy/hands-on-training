import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AliDiv, LoginForm, LoginDiv } from './Register.style'

let counter=0
const Register = () => {
  const navigate = useNavigate()

const[register,setRegister] = useState({
  username:"",
  email:"",
  password:""
});

const handleinput = (e) => {
  e.target.type ==="text" && setRegister({...register, username:e.target.value})
}
const handleSubmitRegister = (e) => {
  e.preventDefault()
  const localvalue = (Object.values(localStorage)).map((item)=> JSON.parse(item))
 
  
  if(!localvalue.some((item)=> item.username === register.username) || !localvalue.some((item)=> item.email === register.email) || !localvalue.some((item)=> item.password === register.password)) {
  localStorage.setItem(new Date().getTime(), JSON.stringify(register))
    document.querySelector(".show").innerText = `başarılı kayıt oldunuz tebrikler yönlediriliyorsunuz`
    setTimeout(()=> {
      navigate("/login")
    },2000)
   
  }else {
    document.querySelector(".show").innerText = `yanlış giriş yaptınız hakkınız ${2-counter} kaldı`
    counter ++
    if(counter ===3) {
      counter = 0
      document.querySelector("button").disabled=true;
      setTimeout(() => {
        document.querySelector("button").disabled=false;
        document.querySelector(".show").innerText = ""
      }, 2000);

      
      
    }
  
}
  setRegister({
    username:"",
    email:"",
    password:""
  });

}




  return (
    <LoginDiv>
    <AliDiv>
      
      <LoginForm onSubmit={handleSubmitRegister}>
      <p className='show'></p>
        <input onChange={handleinput} style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="text" placeholder='username' value={register.username}/>
        <input onChange={(e)=> setRegister({...register, email:e.target.value})}  value={register.email} style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="email" placeholder='email'/>
        <input onChange={(e)=> setRegister({...register, password:e.target.value})}  value={register.password} style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="password" placeholder='pasword' />
        <button type='submit' style={{width:"10rem"}}>LOGIN</button>
      </LoginForm>

    </AliDiv>
    </LoginDiv>
  )
}

export default Register
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
const LoginSignup = () => {
  const [state,setstate]=useState("signup")
  const [user,setuser]=useState(state==='signup'?{name:"",email:"",password:""}:{email:"",password:""})
  const navigate=useNavigate()
  const HandleChange=(e)=>{
    setuser({...user,[e.target.name]:e.target.value})
    
  }
  const signup=async(e)=>{
    
    let responseData;
    await fetch("http://localhost:8000/signup",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    }).then((res)=>res.json()).then((data)=>{responseData=data})
    console.log(responseData)
    if(responseData.success===true){
      localStorage.setItem("auth-token",responseData.token)
      setstate({name:"",email:"",password:""})
    }
    
  }
  const login=async(e)=>{
    // e.preventDefault()
    let responseData;
    await fetch("http://localhost:8000/login",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    }).then((res)=>res.json()).then((data)=>{responseData=data})
    console.log(responseData)
    if(responseData.success===true){
      localStorage.setItem("auth-token",responseData.token)
      setstate({name:"",email:"",password:""})
    }
    navigate("/")
  }
  return (
    <div className=' flex justify-center items-center pt-10 sm:pl-3 md:pl-10 pb-28 bg-pink-200'>
        <div className='bg-white p-[10px] sm:p-[50px]'>
          <div >
            {state==="signup"?
          <h1 className='mt-4 mb-4 text-xl font-bold'>SignUp</h1>:
          <h1 className='mt-4 mb-4 text-xl font-bold'>Login</h1>
            }
          <div className='flex flex-col '>
            {state==='signup'?<input className='bg-transparent border border-black  pl-3 w-[80vw] md:w-[40vw] mb-2 text-xs h-10' value={user.name} type="text" name="name" id="name" placeholder='your name' onChange={HandleChange} />:<></>}
            <input className='bg-transparent border border-black  pl-3 w-[80vw] md:w-[40vw] mb-2 text-xs  h-10' value={user.email} type="email" name="email" id="email" placeholder='your email' onChange={HandleChange}/>
            <input className="bg-transparent border border-black  pl-3 w-[80vw] md:w-[40vw] mb-2 text-xs  h-10" value={user.password} type="password" name="password" id="password" placeholder='password' onChange={HandleChange}/>
          </div>
          <div className='flex flex-row mt-3 mb-3'>
            <input type="checkbox" name="" id="" />
            <p className='text-[8px] '>By Continuing i am agreeing to the terms of use and policy</p>
          </div>
          <button className='bg-red-500 text-black text-sm px-2 w-[80vw] md:w-[40vw] h-7' onClick={state==="login"?login:signup}>Continue</button>
          </div>
          {state==='signup'?
          <p className='text-[10px] text-blue-500 mt-3 ml-3 cursor-pointer'>Already have an account ? <span onClick={()=>{setstate("login");}}>login</span></p>
          :
          <p className='text-[10px] text-blue-500 mt-3 ml-3 cursor-pointer'>Dont have an account ?<span onClick={()=>{setstate("signup");}}>signup</span></p>

          }
        </div>
    </div>
  )
}

export default LoginSignup
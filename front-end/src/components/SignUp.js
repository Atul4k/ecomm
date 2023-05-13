import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

 const SignUp=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [error,setError]= React.useState(false)

    const navigate =useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/');
        }
    })
    const collectData=async ()=>{

        
        console.warn(password,name,email);
        if(!password || !name || !email)
        {
            setError(true)
            return false;
        }

         let result =await fetch("/getdata",{
            method:'POST',
            body:JSON.stringify({password,name,email}),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result=await result.json();
            console.warn(result);
            localStorage.setItem("user",JSON.stringify(result));
         navigate('/');

        

        
    }
    return(
        <div className='register'>
            <h1>Register</h1>
            <input className='inputBox' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter name'/>
            {error && !name && <span className=' invalid-input'>Enter valid name</span>}
            <input className='inputBox' type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email'/>
            {error && !email && <span className=' invalid-input'>Enter valid email</span>}
            <input  className='inputBox'type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Password'/>
            {error && !password && <span className=' invalid-input'>Enter valid password</span>}
            <button onClick={collectData} className='appButton' type='button'>Sign Up</button>

        </div>
    )
}
export default SignUp;
import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { startLoginUser } from '../redux/actions/userLoginAction'
import './CSS/login.css'
import image from './images/login-image.jpg'

const Login=(props)=>{
    const [userEmail,setEmail]=useState('')
    const [userPassword,setPassword]=useState('')
    const dispatch=useDispatch()
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const loginData={
            email:userEmail,
            password:userPassword
        }
        dispatch(startLoginUser(loginData))
        props.history.push('/Home2')

    }
    return(
        <div id='login'>
            <h2>Login Here</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={userEmail} onChange={handleEmail} placeholder='email'/><br/>
                <input type='password' value={userPassword} onChange={handlePassword} placeholder='password'/><br/>
                <input type='submit' value='login'/>
            </form>
            <img src={image} alt='expense-quotes'/>
        </div>
    )
}

export default Login
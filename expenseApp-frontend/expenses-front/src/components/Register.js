import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { startRegisterUser } from '../redux/actions/userRegisterAction'
import './CSS/register.css'
import image from './images/register-image.jpg'

const Register=()=>{
    const [userName,setUserName]=useState('')
    const [userEmail,setEmail]=useState('')
    const [userPassword,setPassword]=useState('')
    const dispatch=useDispatch()
    const handleUserName=(e)=>{
        setUserName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const userData={
            username:userName,
            email:userEmail,
            password:userPassword
        }
        dispatch(startRegisterUser(userData))
        setUserName('')
        setEmail('')
        setPassword('')
    }
    return(
        <div id='register'>
            <div id='formdiv'>
                <h1>Register here</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={userName} onChange={handleUserName} placeholder='username'/><br/>
                    <input type='text' value={userEmail} onChange={handleEmail} placeholder='email'/><br/>
                    <input type='password' value={userPassword} onChange={handlePassword} placeholder='password'/><br/>
                    <input type='submit' value='register'/>
                </form>
            </div>
            <img src={image} alt='registerimage'/>
        </div>
    )
}

export default Register
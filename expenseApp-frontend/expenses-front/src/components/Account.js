import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useEffect} from 'react'
import { startGetUser } from '../redux/actions/userAccountAction'
import './CSS/account.css'

const Account=()=>{
    const user=useSelector(state=>{
        return state.user
    })
    const dispatch=useDispatch()
    useEffect(()=>{
        const tokenLoc=JSON.parse(localStorage.getItem('token'))
        const tokenData={
            "headers":{
                "Authorization":tokenLoc.token
            }
        }
        dispatch(startGetUser(tokenData))
    },[dispatch])
    return(
        <div id='account'>
            <h3 id='details'>Account Details</h3>
            <ul id='list'>
                <li>User Name-{user.username}</li>
                <li>Email Id-{user.email}</li>
                <li>User Id-{user._id}</li>
            </ul>    
        </div>
    )
}

export default Account
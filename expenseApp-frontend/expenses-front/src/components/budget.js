import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { startAddBudget, startGetBudget, startUpdateBudget } from '../redux/actions/budgetAction'
import { startGetUser } from '../redux/actions/userAccountAction'

const Budget=()=>{
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

    const user=useSelector(state=>{
        return state.user
    })
    
    useEffect(()=>{
        dispatch(startGetBudget(user._id))
    },[dispatch,user._id])

    const userBudget=useSelector(state=>{
        return state.userBudget
    })
 
    const [newBudget,setNewbudget]=useState('')
    const [toggle,setToggle]=useState(userBudget?true:false)

    
    const handleChange=(e)=>{
        setNewbudget(e.target.value)
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        const budgetData={
            amount:newBudget,
            userId:user._id
        }
        dispatch(startAddBudget(budgetData))
        setToggle(true)
    }
    const handleUpdate=(e)=>{
        e.preventDefault()
        const input=prompt('Enter updated Budget')
        if(input>0){
            const updateBody={
                amount:input
            }
            const id=userBudget._id
            dispatch(startUpdateBudget(updateBody,id))
        }
        else{
            alert('budget cant be 0')
        }
        
    }

    return(
        <div>
            <h4>Budget-{userBudget.amount?userBudget.amount:0}</h4>
            <form>
                {   (toggle)?(
                        <button onClick={handleUpdate}>update budget</button>
                    ):(
                        <div>
                            <input type='text' placeholder='monthly budget' onChange={handleChange} value={newBudget}/>
                            <button onClick={handleAdd}>add</button>
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default Budget
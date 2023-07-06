import React from 'react'
import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { startAddExpense } from '../redux/actions/expenseAction'
import { startGetCategory } from '../redux/actions/categoryAction'
import { startUpdateExpense } from '../redux/actions/expenseAction'
import './CSS/expense.css'

const Expense=(props)=>{
    const {expense,handleToggle}=props
    const dispatch=useDispatch()

    const user=useSelector(state=>{
        return state.user
    })

    useEffect(()=>{
        dispatch(startGetCategory(user._id))
    },[dispatch,user._id])
    
    const category=useSelector(state=>{
        return state.userCategories
    })

    const [name,setName]=useState(expense?expense.name:'')
    const [amount,setAmount]=useState(expense?expense.amount:'')
    const [description,setDescription]=useState(expense?expense.description:'')
    const [date,setDate]=useState(expense?expense.expenseDate:'')
    const [catId,setCatId]=useState(expense?(expense.categoryId._id):'')
    const [catName,setCatName]=useState(expense?(expense.categoryId.name):'category')
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }
    const handleDate=(e)=>{
        setDate(e.target.value)
    }
    const handleChange=(e)=>{
        setCatId(e.target.value)
        const findCat=category.find(ele=>ele._id===e.target.value)
        setCatName(findCat.name)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const expenseData={
            name:name,
            amount:amount,
            description:description,
            expenseDate:date,
            categoryId:catId,
            userId:user._id
        }
        if(expense){
            dispatch(startUpdateExpense(expense._id,expenseData))
            handleToggle(false)
        }
        else{
            dispatch(startAddExpense(expenseData))
            setCatName('category')
            setName('')
            setAmount('')
            setDate('')
            setDescription('')
        }

    }
    return(
       <div id='expensecomp'>
            <form id='form'onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type='text'  onChange={handleName} value={name}/><br/>
                <label>Amount</label><br/>
                <input type='text' onChange={handleAmount} value={amount} /><br/>
                <label>Description</label><br/>
                <input type='text' onChange={handleDescription} value={description}/><br/>
                <label>Date</label><br/>
                <input type='date' onChange={handleDate} value={date}/><br/>
                <label>Category</label><br/>
                <select name='category' id='categorylist' value="category" onChange={handleChange}><br/>

                        <option>{catName}</option>
                        {
                            category&&category.map((ele,i)=>{
                                return(
                                    <option value={ele._id} key={i}>{ele.name}</option>
                                )
                            })             
                        }
                </select>
                <input type='submit' value='sumbit'/>
            </form>
       </div>
    )
}

export default Expense
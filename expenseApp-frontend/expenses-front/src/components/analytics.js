import React,{useState,useEffect,useMemo} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startExpenseSum } from '../redux/actions/expenseSumAction'
import { startGetUser } from '../redux/actions/userAccountAction'
import { startGetCategory } from '../redux/actions/categoryAction'
import {Chart} from 'react-google-charts'
import './CSS/analytics.css'

const Analytics =()=>{
    const [startDate,setStart]=useState('')
    const [endDate,setEnd]=useState('')
    const [dateRange,setDate]=useState({})
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
        dispatch(startGetCategory(user._id))
    },[dispatch,user._id])

    const categories=useSelector(state=>{
        return state.userCategories
    })
    // useEffect(()=>{
    //     dispatch(startExpenseSum(dateRange))
    // },[dateRange,dispatch])


    const handleStartDate=(e)=>{
        setStart(e.target.value)
    }
    const handleEndDate=(e)=>{
        setEnd(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setDate({
            startDate:startDate,
            endDate:endDate
        })
        dispatch(startExpenseSum(startDate,endDate,categories))
    }
    
    const expenseSum=useSelector(state=>{
        return state.expenseSum
    })
   
    const options = {
        title: "My Daily expenses",
      };

      console.log(expenseSum)

    return(
        <div id='analytics'>
            <h2 id='heading'>Analytics Page</h2>
            <form id='form'onSubmit={handleSubmit}>
                <label id='label'>Date range</label>
                <input type='date' onChange={handleStartDate} id='startDate' value={startDate}/>
                <input type='date' onChange={handleEndDate} id='endDate' value={endDate}/>
                <input id='submit' type='submit'/>
            </form>
            <div id='pie'>
                    <Chart
                        chartType="PieChart"
                        data={expenseSum}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
            </div>
        </div>   
    )
}

export default Analytics
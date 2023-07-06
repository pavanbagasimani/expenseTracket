import axios from 'axios'

export const startExpenseSum=(startDate,endDate,categories)=>{
    console.log(startDate,endDate)
    return (dispatch)=>{
        axios.get(`http://localHost:3077/api/sumExpenses/${startDate}/${endDate}`)
        .then(res=>{
             dispatch(setExpenseSum(res.data,categories))
        })
    }
}

export const setExpenseSum=(expenseSum,categories)=>{
    return{
        type:"SUM_EXPENSES",
        payload:{
            sum:expenseSum,
            cat:categories
        }
    }
}
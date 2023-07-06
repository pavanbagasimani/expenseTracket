import axios from 'axios'

export const startAddExpense=(expenseData)=>{
    return (dispatch)=>{
        axios.post('http://localHost:3077/api/addExpense',expenseData)
            .then(res=>{
                dispatch(setAddExpense(res.data))
            })
    }
}

export const startGetExpense=(userId)=>{
    return (dispatch)=>{
        axios.get(`http://localHost:3077/api/userExpenses/${userId}`)
            .then(res=>{
                dispatch(setGetExpense(res.data))
            })
    }
}

export const startGetExpenseList=(search)=>{
    return(dispatch)=>{
        axios.get(`http://localHost:3077/api/userExpenseSearchList/${JSON.stringify(search)}`)
            .then(res=>{
                dispatch(setExpenseList(res.data))
            })
            .catch(e=>{ 
                console.log(e)
            })
    }
}

export const startDeleteExpense=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localHost:3077/api/deleteExpense/${id}`)
            .then(res=>{
                console.log(res.data)
                dispatch(deleteExpense(res.data._id))
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const startUpdateExpense=(id,body)=>{
    return (dispatch)=>{
        axios.put(`http://localHost:3077/api/updateExpense/${id}`,body)
            .then(res=>{
                console.log(res.data)
                dispatch(setUpdateExpense(res.data))
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const setAddExpense=(expense)=>{
    return {
        type:'ADD_EXPENSE',
        payload:expense
    }
}

export const  setGetExpense=(expenses)=>{
    return {
        type:'GET_EXPENSE',
        payload:expenses
    }
}

export const setExpenseList=(list)=>{
    return {
        type:'SET_EXPENSE_LIST',
        payload:list
    }
}

export const setUpdateExpense=(expense)=>{
    return{
        type:'UPDATE_EXPENSE',
        payload:expense
    }
}

export const deleteExpense=(id)=>{
    return {
        type:'DELETE_EXPENSE',
        payload:id
    }
}

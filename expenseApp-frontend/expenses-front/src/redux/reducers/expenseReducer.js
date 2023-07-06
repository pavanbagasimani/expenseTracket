const expenseInitialValue=[]

export const expenseReducer=(state=expenseInitialValue,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':{
            return [...state,{...action.payload}]
        }
        case 'GET_EXPENSE':{
            if(Array.isArray(action.payload)){
                return [...action.payload]
            }
            else{
                return []
            }
            
        }
        case 'DELETE_EXPENSE':{
            return [...state].filter(ele=>{
                return ele._id!==action.payload
            })
        }
        case 'UPDATE_EXPENSE':{
            return [...state].map(ele=>{
                if(ele._id===action.payload._id){
                    return {...action.payload}
                }
                else{
                    return {...ele}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

const expenseListInitialValue=[]

export const expenseListReducer=(state=expenseListInitialValue,action)=>{
    switch(action.type){
        case 'SET_EXPENSE_LIST':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default expenseReducer
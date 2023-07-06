
const userBudgetInitialValue={}

export const userBudgetReducer=(state=userBudgetInitialValue,action)=>{
    switch(action.type){
        case 'SET_USER_BUDGET':{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default userBudgetReducer

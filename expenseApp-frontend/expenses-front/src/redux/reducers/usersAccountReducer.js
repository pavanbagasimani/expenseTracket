const userInitialValue={}

const usersAccountReducer=(state=userInitialValue,action)=>{
    switch(action.type){
        case 'USER_ACCOUNT':{
            return {...action.payload}
        }
        default:{
            return {...state}
        }
    }
}

export default usersAccountReducer
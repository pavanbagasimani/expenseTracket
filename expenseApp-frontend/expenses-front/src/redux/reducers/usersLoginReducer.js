const statusInitialValue=false

const usersLoginReducer=(state=statusInitialValue,action)=>{
    switch(action.type){
        case 'LOGIN_STATUS':{
            return action.payload
        }
        default:{
            return state
        }
    }
}

export default usersLoginReducer
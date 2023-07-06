const usersInitialValue=[]

const usersReducer=(state=usersInitialValue,action)=>{
    switch(action.type){
        case 'REGISTER_USER':{
            return [...state,{...action.payload}]
        }
        default:{
            return [...state]
        }
    }
}

export default usersReducer
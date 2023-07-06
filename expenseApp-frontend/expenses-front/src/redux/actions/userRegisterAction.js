import axios from 'axios'
export const startRegisterUser=(userData)=>{
    return (dispatch)=>{
        axios.post('http://localHost:3077/api/usersRegister',userData)
            .then(res=>{
                if(res.data){
                    alert(`${res.data?.username} registration successfull`)
                }
                dispatch(setUsers(res.data))
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const setUsers=(userData)=>{
    return {
        type:'REGISTER_USER',
        payload:userData
    }
}

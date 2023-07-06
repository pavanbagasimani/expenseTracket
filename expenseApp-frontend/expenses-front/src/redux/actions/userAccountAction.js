import axios from 'axios'

export const startGetUser=(tokenData)=>{
    return (dispatch)=>{
        axios.get('http://localHost:3077/api/usersAccount',tokenData)
            .then(res=>{
                dispatch(setUser(res.data))
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const setUser=(user)=>{
    return {
        type:'USER_ACCOUNT',
        payload:user
    }
}
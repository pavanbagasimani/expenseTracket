import axios from 'axios'

export const startLoginUser=(loginData)=>{
    return (dispatch)=>{
        axios.post('http://localHost:3077/api/usersLogin',loginData)
            .then(res=>{
                const status=res.data.hasOwnProperty('token')
                if(status){
                    localStorage.setItem('token',JSON.stringify(res.data))
                    dispatch(isLoggedIn(status))
                }
                
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const isLoggedIn=(status)=>{
    return{
        type:'LOGIN_STATUS',
        payload:status
    }
}


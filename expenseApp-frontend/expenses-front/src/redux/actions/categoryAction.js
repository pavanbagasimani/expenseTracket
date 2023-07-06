import axios from 'axios'
export const startAddCategory=(categoryData)=>{
    return (dispatch)=>{
        axios.post('http://localHost:3077/api/addCategory',categoryData)
            .then(res=>{
                dispatch(setCategories(res.data))
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const startGetCategory=(userId)=>{
    return (dispatch)=>{
        axios.get(`http://localHost:3077/api/userCategories/${userId}`)
            .then(res=>{
                dispatch(getCategories(res.data))
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const startDeleteCategory=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localHost:3077/api/deleteCategory/${id}`)
            .then(res=>{
                dispatch(deleteCategory(res.data._id))
            })
            .catch(e=>{
                console.log(e)
            })
    }
    
  }

export const startUpdateCategory=(id,body)=>{
    return (dispatch)=>{
        axios.put(`http://localHost:3077/api/updateCategory/${id}`,body)
            .then(res=>{
                const body=res.data
                const id=res.data._id
                dispatch(updateCtegory(id,body))
            })
            .catch(e=>{
                console.log(e)
            })
    }
}

export const setCategories=(category)=>{
    return{
        type:'SET_CATEGORIES',
        payload:category
    }
}

export const getCategories=(categories)=>{
    return{
        type:'GET_CATEGORIES',
        payload:categories
    }
}

export const deleteCategory=(id)=>{
    return{
        type:'DELETE_CATEGORY',
        payload:id
    }
}

export const updateCtegory=(id,body)=>{
    return{
        type:'UPDATE_CATEGORY',
        payload:{
            catId:id,
            catBody:body
        }
    }
}


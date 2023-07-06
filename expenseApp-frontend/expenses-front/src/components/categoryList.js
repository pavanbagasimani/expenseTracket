import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startDeleteCategory, startUpdateCategory } from '../redux/actions/categoryAction'
const CategoryList=()=>{
    const dispatch=useDispatch()
    const categories=useSelector(state=>state.userCategories)
    
    const handleEdit=(id)=>{
        const changeName=prompt('Enter the changed category name')
        if(changeName){
            const body={
                name:changeName
            }
            dispatch(startUpdateCategory(id,body))
        }
    }

    const handleRemove=(id)=>{
        const catName=categories.length>0&&categories.find(ele=>ele._id===id).name
        const checkConfirm=window.confirm(`If you remove ${catName} all the expenses related will also be removed`)
        if(checkConfirm){
            dispatch(startDeleteCategory(id))
        }
    }

    return(
        <div>
            <ul>
                {
                    categories.length>0&&categories.map((ele,i)=>{
                        return(
                            <div key={i}>
                                <li  key={i}>{ele.name}</li>
                                <button onClick={()=>{handleEdit(ele._id)}}>edit</button>
                                <button onClick={()=>{handleRemove(ele._id)}}>remove</button>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CategoryList
import React from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { startAddCategory } from '../redux/actions/categoryAction'

const Category=()=>{
    const dispatch=useDispatch()

    const user=useSelector(state=>{
        return state.user
    })

    const [category,setCategory]=useState('')

    const handleChange=(e)=>{
        setCategory(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const categoryData={
            name:category,
            userId:user._id
        }
        dispatch(startAddCategory(categoryData))
        setCategory('')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='enter category' value={category} onChange={handleChange}/>
                    <input type='submit' value='add'/>
            </form>
        </div>
    )
}

export default Category
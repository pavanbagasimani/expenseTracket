import React from "react";
import Budget from './budget'
import Category from './category'
import Expense from "./expense";
import { useSelector } from "react-redux";
import CategoryList from "./categoryList";
import './CSS/settings.css'

const Settings=()=>{
    const categories=useSelector(state=>state.userCategories)
    return(
        <div id='settings'>
            <h2 id='welcome'>Welcome to settings</h2> 
            <div id='budget'>
                <h3 id='addBudget'>Add Budget</h3>
                <Budget/>
            </div>

            <div id='category'>
                <h3 id='addCategory'>Add category</h3>
                <Category/>
                <h3 id='catList'>{categories.length>0?'':'Categories List'}</h3>
                <CategoryList/>
            </div>
            <div id='expense'>
                <h3 id='addExpense'>Add expense</h3>
                <Expense/>
            </div>
        </div>
    )
}

export default Settings
import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startDeleteExpense, startGetExpense, startGetExpenseList } from '../redux/actions/expenseAction';
import Expense from './expense';
import { startGetUser } from '../redux/actions/userAccountAction';
import './CSS/expenseList.css'

const ExpenseList = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [search,setSearch]=useState({string:'',userId:user?user._id:''})
  const [toggle,setToggle]=useState(false)
  const [expense,setExpense]=useState({})

  useEffect(() => {
    const tokenLoc=JSON.parse(localStorage.getItem('token'))
        const tokenData={
            "headers":{
                "Authorization":tokenLoc.token
            }
        }
        dispatch(startGetUser(tokenData))
      dispatch(startGetExpenseList(search));
  }, [search,dispatch,user._id]);
  
  useEffect(()=>{
    dispatch(startGetExpense(user._id))
  },[dispatch,user._id])

  const expenseList=useSelector(state=>state.expenseList)

  const expenses=useSelector(state=>state.userExpenses)

  const handleToggle=(status)=>{
    setToggle(status)
  }

  const handleSearch=(e)=>{
    const newSearch={string:e.target.value,userId:user._id}
    setSearch(newSearch)
  }

  const handleClickSearch=(e)=>{
    e.preventDefault()
    dispatch(startGetExpenseList(search))
  }

  const handleEdit=(ele)=>{
    setExpense(ele)
    handleToggle(true)
  }

  const handleRemove=(id)=>{
    const confrm=window.confirm('Are you sure?')
    if(confrm){
      dispatch(startDeleteExpense(id))
    }
  }

  return (
    <div id='expenseList'>
      <h3 id='head'>Expenses List</h3>
      <form onSubmit={handleClickSearch}>  
          <input type='text' placeholder='search expense' value={search.string} onChange={handleSearch}/>
          <input type='submit' value='search'/>
      </form>
      <br/>
      <br/>
      
      { toggle&&
        <div id='editExpense'>
              <h3>Edit Expense</h3>
              <Expense expense={expense} handleToggle={handleToggle}/>
        </div>
      }
      <br/>
      <br/>
      <table id='table'border="1px">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
            <th>Category</th>
            <th>edit</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          { (search.string?(expenseList.length>0?expenseList:[]):(expenses.length>0?expenses:[]))
                .map((ele,i)=>{
                return(
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.amount}</td>
                            <td>{ele.description}</td>
                            <td>{ele.expenseDate}</td>
                            <td>{ele.categoryId.name}</td>
                            <td><button onClick={()=>{handleEdit(ele)}}>edit</button></td>
                            <td><button onClick={()=>{handleRemove(ele._id)}}>remove</button></td>
                        </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
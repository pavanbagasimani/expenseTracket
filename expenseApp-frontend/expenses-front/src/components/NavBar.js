import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {isLoggedIn} from '../redux/actions/userLoginAction'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import Settings from './Settings'
import Home2 from './home2'
import ExpenseList from './expenseList'
import Analytics from './analytics'
import './CSS/navBar.css';

const NavBar=(props)=>{
    const loginStatus=useSelector(state=>{
        return state.loginStatus
    })
    const dispatch=useDispatch()
    useEffect(()=>{
        const token=JSON.parse(localStorage.getItem('token'))
        if(token){
            const status=token.hasOwnProperty('token')
            dispatch(isLoggedIn(status))
        }   
    },[dispatch])

    return(
        <div className='navBar'>
            {
                loginStatus?(
                    <React.Fragment>
                        <h2><Link to='/Home2'>Home</Link></h2>
                        <h2><Link to='/Account'>Account</Link></h2>
                        <h2><Link to='/Settings'>Settings</Link></h2>
                        <h2><Link to='/Expenses'>Expenses</Link></h2>
                        <h2><Link to='/Analyitcs'>Analytics</Link></h2>
                        <h2><Link onClick={()=>{
                            alert('Logged out succesfully')
                            dispatch(isLoggedIn(false))
                            localStorage.removeItem('token')
                            props.history.push('/Home')
                        }}>Loggout</Link></h2>
                        <Route path='/Home2' component={Home2} exact={true}/>
                        <Route path='/Account' component={Account} exact={true}/>
                        <Route path='/Settings' component={Settings} exact={true}/>
                        <Route path='/Expenses' component={ExpenseList} exact={true}/>
                        <Route path='/Analyitcs'component={Analytics} exact={true}/>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                        <h2 id='home'><Link to='/Home'>Home</Link></h2>
                        <h2><Link to='/Login'>Login</Link></h2>
                        <h2><Link to='/Register'>Register</Link></h2>
                        <Route path='/Home' component={Home} exact={true} />
                        <Route path='/Login' component={Login} exact={true}/>
                        <Route path='/Register' component={Register} exact={true}/>
                    </React.Fragment>
                        
                )
            }
            
        </div>
    )
}

const WrappedComponent=withRouter(NavBar)
export default WrappedComponent
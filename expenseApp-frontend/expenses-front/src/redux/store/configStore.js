import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userBudgetReducer from '../reducers/budgetReducer'
import { expenseReducer,expenseListReducer } from '../reducers/expenseReducer'
import usersAccountReducer from '../reducers/usersAccountReducer'
import usersLoginReducer from '../reducers/usersLoginReducer'
import categoryReducer from '../reducers/categoryReducer'
import {expenseSumReducer} from '../reducers/expenseSumReducer'

const configStore=()=>{
    const store=createStore(combineReducers({
        loginStatus:usersLoginReducer,  
        user:usersAccountReducer,
        userBudget:userBudgetReducer,
        userCategories:categoryReducer,
        userExpenses:expenseReducer,
        expenseList:expenseListReducer,
        expenseSum:expenseSumReducer
}),applyMiddleware(thunk))
    return store
}



export default configStore
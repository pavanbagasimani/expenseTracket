const express=require('express')
const route=express.Router()
const userController=require('../app/controllers/userController')
const budgetController=require('../app/controllers/budgetController')
const categoryController=require('../app/controllers/categoryController')
const expenseController=require('../app/controllers/expenseController')
const authenticateUser=require('../app/middlewares/authenticateUser')

route.post('/api/usersRegister',userController.register)
route.get('/api/allUsers',userController.allUsers)
route.post('/api/usersLogin',userController.login)  
route.get('/api/usersAccount',authenticateUser,userController.account)
route.delete('/api/deleteUser/:id',userController.deleteUser) 

route.post('/api/addBudget',budgetController.addBudget)
route.put('/api/updateBudget/:id',budgetController.updateBudget)
route.get('/api/allBudget',budgetController.allBudget)
route.get('/api/userBudget/:id',budgetController.userBudget)
route.delete('/api/deleteBudget',budgetController.deleteBudget)


route.post('/api/addCategory',categoryController.addCategory)
route.put('/api/updateCategory/:id',categoryController.updateCategory)
route.get('/api/allCategory',categoryController.allCategory)
route.delete('/api/deleteAllCategories',categoryController.deleteCategory)
route.get('/api/userCategories/:userId',categoryController.userCategories)
route.delete('/api/deleteCategory/:id',categoryController.deleteCategory)


route.post('/api/addExpense',expenseController.addExpense)
route.put('/api/updateExpense/:id',expenseController.updateExpense)
route.delete('/api/deleteAllExpense/:catId',expenseController.deleteAllExpense)
route.get('/api/allExpense',expenseController.allExpense)
route.delete('/api/deleteExpense/:expenseId',expenseController.deleteExpense)
route.get('/api/categoryExpense/:id',expenseController.categoryExpense)
route.get('/api/userExpenses/:userId',expenseController.userExpenses)
route.get('/api/userExpenseSearchList/:search',expenseController.searchExpense)
route.get('/api/sumExpenses/:startDate/:endDate',expenseController.sumExpenses)

module.exports=route
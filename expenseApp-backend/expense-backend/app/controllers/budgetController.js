const { request } = require('express')
const Budget=require('../models/budget')

const budgetController={}

budgetController.addBudget=(req,res)=>{
    const body=req.body
    const budget=new Budget(body)
                budget.save()
                    .then(budget=>{
                        res.json(budget)
                    })
                    .catch(e=>{
                        res.json(e)
                    })
    
}

budgetController.updateBudget=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Budget.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then(budget=>{
            res.json(budget)
        })
        .catch(e=>{
            res.json(e)
        })

}

budgetController.allBudget=(req,res)=>{
    Budget.find()
        .then(allBudget=>{
            res.json(allBudget)
        })
        .catch(e=>{
            res.json(e)
        })
}

budgetController.userBudget=(req,res)=>{
    const uId=req.params.id 
    Budget.findOne({userId:uId})
        .then(userBudget=>{
            res.json(userBudget)
        })
        .catch(e=>{
            res.json(e)
        })
}

budgetController.deleteBudget=(req,res)=>{
    Budget.deleteMany()
        .then(budgets=>{
            res.json(budgets)
        })  
        .catch(e=>{
            res.json(e)
        })
}

module.exports=budgetController
const Expense=require('../models/expense')
const Category=require('../models/catagory')

const expenseController={}

expenseController.addExpense=(req,res)=>{
    const body=req.body
    const expense=new Expense(body)
    expense.save()
            .then(result=>{
                Expense.populate(expense,{path:'categoryId',model:Category})
                    .then(exp=>{
                        res.json(exp)
                    })
            })
            .catch(err=>{
                res.json(err)
            })
}

expenseController.updateExpense=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Expense.findByIdAndUpdate(id,body,{new:true,runValidators:true})
        .then((result)=>{
            Expense.populate(result,{path:'categoryId',model:Category})
                .then(expense=>{
                    res.json(expense)
                })
                .catch(err=>{
                    res.json(err)
                })
            
        })
        .catch(err=>{
            res.json(err)
        })
}

expenseController.deleteExpense=(req,res)=>{
    const expenseId=req.params.expenseId
    Expense.findByIdAndDelete(expenseId)
        .then(expense=>{
            res.json(expense)
        })  
        .catch(err=>{
            res.json(err)
        })
}

expenseController.searchExpense=(req,res)=>{
    const search=JSON.parse(req.params.search)
    if(!search.string){
        Expense.find({userId:search.userId})
            .then(data=>{
                res.json(data)
            })
            .catch(e=>{
                res.json(e)
            })
    }
    else{
        Expense.find({userId:search.userId})
        .then(expenses=>{
            const result=expenses.filter(ele=>ele.name.includes(search.string))
            res.json(result)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    
}

expenseController.allExpense=(req,res)=>(
    Expense.find()
        .populate("categoryId")
        .then(allExpense=>{
            res.json(allExpense)
        })
        .catch(e=>{
            res.json(e)
        })
)

expenseController.categoryExpense=(req,res)=>{
    const userId=req.params.id
    Expense.findById(userId)
        .then(categoryExpense=>{
            res.json(categoryExpense)
        })
        .catch(e=>{
            res.json(e)
        })
}

expenseController.deleteAllExpense=(req,res)=>{
    const catId=req.params.catId
    Expense.deleteMany({categoryId:catId})
        .then(res=>{
            res.json(res)
        })
        .catch(e=>{
            res.json(e)
        })
}

expenseController.userExpenses=(req,res)=>{
    const uId=req.params.userId
    Expense.find({userId:uId})
        .populate('categoryId')
        .then(data=>{
            res.json(data)
        })
        .catch(e=>{
            res.json(e)
        })
}

expenseController.sumExpenses=async(req,res)=>{
    const {startDate,endDate}=req.params
    try{
        const sumData=await Expense.aggregate([
            {
                $match:{"expenseDate":{$gte:startDate,$lt:endDate}}
            },
            {
                $group:{_id:"$categoryId",totalExpense:{$sum:"$amount"}}
            }
        ])
        return res.json(sumData)
    }catch(err){
        return res.json(err)
    }
    
}

module.exports=expenseController
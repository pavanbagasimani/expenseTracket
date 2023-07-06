const Category = require('../models/catagory')
const Expense=require('../models/expense')

const categoryController={}

categoryController.addCategory=(req,res)=>{
    const body=req.body
    const catagory=new Category(body)
    catagory.save() 
        .then(catagory=>{
            res.json(catagory)
        })
        .catch(e=>{
            res.json(e)
        })
}

categoryController.updateCategory=(req,res)=>{
    const body=req.body
    const id=req.params.id
    Category.findByIdAndUpdate(id,body,{new:true,runvalidator:true})
        .then(category=>{
            res.json(category)
        })
        .catch(err=>{
            res.json(err)
        })
}


categoryController.allCategory=(req,res)=>{
    Category.find()
        .then(allCategory=>{
            res.json(allCategory)
        })
        .catch(e=>{
            res.json(e)
        })
}

categoryController.userCategories=(req,res)=>{
    const uId=req.params.userId
    Category.find({userId:uId})
        .then(expenseCategory=>{
            res.json(expenseCategory)
        })
        .catch(e=>{
            res.json(e)
        })
}

categoryController.deleteCategories=(req,res)=>{
    Category.deleteMany()
        .then(res=>{
            res.json(res)
        })
        .catch(e=>{
            res.json(e)
        })
}

categoryController.deleteCategory=(req,res)=>{
    const catId=req.params.id
    Expense.deleteMany({categoryId:catId})
        .then(()=>{
            Category.findByIdAndDelete(catId)
                .then(data=>{
                    res.json(data)
                })
                .catch(e=>{
                    res.json(e)
                })
        })
        .catch(e=>{
            res.json(e)
        })

}

module.exports=categoryController
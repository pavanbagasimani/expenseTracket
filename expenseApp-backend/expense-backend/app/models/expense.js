const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ExpenseSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    expenseDate:{
        type:String,
        required:true,
        unique:true
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'usercategory',
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true

    }
})

const Expense=mongoose.model('expense',ExpenseSchema)

module.exports=Expense
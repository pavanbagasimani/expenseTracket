const mongoose=require('mongoose')
const Schema=mongoose.Schema
const BudgetSchema=new Schema({
    amount:{
        type:Number,
        required:true,
        index:true,
        unique:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        index:{unique:true,dropDups:true},
        unique:true,
        ref:'user'
    }
})

const Budget=mongoose.model('budget',BudgetSchema)

module.exports=Budget
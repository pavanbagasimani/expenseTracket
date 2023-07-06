const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userCategorySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
})

const Category=mongoose.model('usercategory',userCategorySchema)

module.exports=Category
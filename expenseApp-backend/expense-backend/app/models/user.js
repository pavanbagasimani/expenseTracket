const mongoose=require('mongoose')
const validator=require('validator')
const Schema=mongoose.Schema
const UserSchema=new Schema({
    username:{
        type:String,
        required:[true,'name cannot be blank'],
        minlength:6,
        maxlength:64,
        unique:true
    },
    email:{
        type:String,
        required:[true,'email cannot be blank'],
        minlength:8,
        maxlength:128,
        unique:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'email is invalid'
            }
        }
    },
    password:{
        type:String,
        required:[true,'password cannot be blank'],
        validate:{
            validator:function(value){
                return validator.isStrongPassword(value)
            },
            message:function(){
                return 'strong password required- minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1'
            }
        }
    }
})

const User=mongoose.model('user',UserSchema)

module.exports=User
const User=require('../models/user')
const userController={}
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')

userController.register=(req,res)=>{
    const body=req.body
    const user= new User(body)
    bcryptjs.genSalt()
        .then(salt=>{
            bcryptjs.hash(user.password,salt)
                .then(encrypted=>{
                    user.password=encrypted
                    user.save()
                        .then(user=>{
                            res.json(user)
                        })
                        .catch(err=>{
                            res.json(err)
                        })
                })
        })
    
}

userController.login=(req,res)=>{   
    const body=req.body
    User.findOne({email:body.email})
        .then(user=>{
            if(!user){
                res.json('invalid email or password')
            }
            bcryptjs.compare(body.password,user.password)
                .then(match=>{
                    if(match){
                        const tokenData={
                            _id:user._id,
                            email:user.email,
                            username:user.username
                        }
                        const token=jwt.sign(tokenData,'sercret123',{expiresIn:'2d'})
                        res.json({
                            token:`Bearer ${token}`
                        })
                    }
                    else{
                        res.json('invalid email or password')
                    }
                })
                .catch(err=>{
                    res.json(err)
                })
        })
        .catch(err=>{
            res.json(err)
        })
}

userController.account=(req,res)=>{
   res.json(req.user)
}

userController.allUsers=(req,res)=>{
    User.find()
        .then(allUsers=>{
            res.json(allUsers)
        })  
        .catch(e=>{
            res.json(e)
        })
}

userController.deleteUser=(req,res)=>{
    const id=req.params.id
    console.log(id)
    User.findByIdAndDelete(id)
        .then(res=>{
            res.json(res)
        })
        .catch(e=>{
            res.json(e)
        })
}

module.exports=userController
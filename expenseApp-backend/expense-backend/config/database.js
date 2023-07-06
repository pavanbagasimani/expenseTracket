const mongoose=require('mongoose')
const configDB=()=>{
    mongoose.connect('mongodb://localhost:27017',{
        useUnifiedTopology: true,
        useNewUrlParser: true, //make this true
        autoIndex: false, //make this also true
    })
    .then(()=>{
        console.log('db connected')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=configDB

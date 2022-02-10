const mongoose=require('mongoose')
const ConnectDB=(url)=>{
    return mongoose.connect(url,{
        useUnifiedTopology:true
    })
}

module.exports=ConnectDB
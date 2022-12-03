const model = require('./model.js')


async function ADD_BALANCE(req,res){
   try {
       let balance = await model.ADD_BALANCE(req.body,req.headers)
       if(!req.headers.token) return 'token required!'
       if(balance){
        res.status(201).json({
            status:201,
            message:"Your request has been accepted!",
            data:balance
        })
       }else{
        res.status(403).json({
            status:403,
            message:"Folbiddin!",
            data:null
        })
       }
   } catch (error) {
    console.log(error)
   }
}




module.exports = {
    ADD_BALANCE
}
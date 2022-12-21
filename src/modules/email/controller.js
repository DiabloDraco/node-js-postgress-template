const model = require('./model.js')


const PUT = async (req,res) =>{
    try {
        let code = await model.PUT(req.body)
        if(code){
            res.status(200).json({
                status:200,
                message:'SMS sent to email!',
                id:code
            })
        }else{
            res.status(404).json({
                status:404,
                message:'email not found!'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const POST = async (req,res) =>{
    try {
        let code = await model.POST(req.body,req.params)
        console.log(code)
        if(code){
            res.status(201).json({
                status:201,
                message:'updated password',
                user:true
            })
        }else{
            res.status(403).json({
                status:403,
                message:'password is incorrect',
                user:false
            })
        }
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    PUT,
    POST
}
const UserService = require("../services/user.services");

exports.register =async(req,res,next)=>{
    try{
        const{email,password} = req.body;

        const succesRes = await UserService.registerUser(email,password);

        res.json({status:true,succes:"User Registred Sucefully"});
    }catch (error){
        throw error
    }
}
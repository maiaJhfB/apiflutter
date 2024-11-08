const UserModel = require('../model/user.model')
const dbName = 'manutencaoDB';


class UserService{
static async registerUser(item){
    try{
        const createUser = new UserModel({item});
        return await createUser.save();
    }catch(err){
        throw err;
    }
}
}

module.exports = UserService;
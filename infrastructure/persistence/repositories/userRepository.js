const model = require ('../models/init-models');
const sequelize = require('../database');
const Users = model(sequelize);

class UserRepository{
    async findById(id){
        return Users.users.findOne({
            where:{
                idUser: id
            }
        });
    }

    async findAll(){
        return Users.users.findAll();
    }

    async findByCredentials(credentials){
        return Users.users.findOne({
            where:{
                userName: credentials.userName,
                password: credentials.password
            }
        })
    }

    async save(user){
        return Users.users.create(user);
    }

    async update(user){

        return Users.users.update({
            userName: user["userName"],
            password: user["password"],
            address: user["address"],
            phone: user["phone"],
            typeUser: user["typeUser"],
        },
        {
            where:{
                idUser: user["idUser"]
            }
        });
    }

    async delete(id){
        return Users.users.destroy({
            where:{
                idUser: id
            }
        });
    }
}

module.exports = UserRepository;
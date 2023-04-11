const model = require ('../models/init-models');
const sequelize = require('../database');
const TypesUser = model(sequelize);

class TypeUserRepository{
    async findById(id){
        return TypesUser.type_user.findOne({
            where:{
                idTypeUser: id
            }
        });
    }

    async findAll(){
        return TypesUser.type_user.findAll();
    }

    async save(typeUser){
        return TypesUser.type_user.create(typeUser);
    }

    async update(typeUser){

        return TypesUser.type_user.update({
            denomination: typeUser["denomination"],
            rol: typeUser["rol"]
        },
        {
            where:{
                idTypeUser: typeUser["idTypeUser"]
            }
        });
    }

    async delete(id){
        return TypesUser.type_user.destroy({
            where:{
                idTypeUser: id
            }
        });
    }

    async deleteAll(){
        return TypesUser.type_user.destroy({
            where: {}
        })
    }
}

module.exports = TypeUserRepository;
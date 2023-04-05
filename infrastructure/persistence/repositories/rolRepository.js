const model = require ('../models/init-models');
const sequelize = require('../database');
const Roles = model(sequelize);

class RolRepository{
    async findById(id){
        return Roles.roles.findOne({
            where:{
                idRol: id
            }
        });
    }

    async findAll(){
        return Roles.roles.findAll();
    }

    async save(rol){
        return Roles.roles.create(rol);
    }

    async update(rol){

        return Roles.roles.update({
            denomination: rol["denomination"]
        },
        {
            where:{
                idRol: rol["idRol"]
            }
        });
    }

    async delete(id){
        return Roles.roles.destroy({
            where:{
                idRol: id
            }
        });
    }

    async deleteAll(){
        return Roles.roles.destroy({
            where: {}
        });
    }
}

module.exports = RolRepository;
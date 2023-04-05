const model = require ('../models/init-models');
const sequelize = require('../database');
const Families = model(sequelize);

class FamilyRepository{
    async findById(id){
        return Families.family.findOne({
            where:{
                idFamily: id
            }
        });
    }

    async findAll(){
        return Families.family.findAll();
    }

    async save(newFamily){
        return Families.family.create(newFamily);
    }

    async update(newFamily){

        return Families.family.update({
            nameFamily: newFamily["nameFamily"]
        },
        {
            where:{
                idFamily: newFamily["idFamily"]
            }
        });
    }

    async delete(id){
        return Families.family.destroy({
            where:{
                idFamily: id
            }
        });
    }
}

module.exports = FamilyRepository;
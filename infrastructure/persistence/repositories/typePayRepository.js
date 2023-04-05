const model = require ('../models/init-models');
const sequelize = require('../database');
const TypesPay = model(sequelize);

class TypePayRepository{
    async findById(id){
        return TypesPay.typepay.findOne({
            where:{
                idTapePay: id
            }
        });
    }

    async findAll(){
        return TypesPay.typepay.findAll();
    }

    async save(typePay){
        return TypesPay.typepay.create(typePay);
    }

    async update(typePay){

        return TypesPay.typepay.update({
            denomination: typePay["denomination"]
        },
        {
            where:{
                idTapePay: typePay["idTapePay"]
            }
        });
    }

    async delete(id){
        return TypesPay.typepay.destroy({
            where:{
                idTapePay: id
            }
        });
    }
}

module.exports = TypePayRepository;
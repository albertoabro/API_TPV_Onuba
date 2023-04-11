const model = require ('../models/init-models');
const sequelize = require('../database');
const Providers = model(sequelize);

class ProviderRepository{
    async findById(id){
        return Providers.providers.findOne({
            where:{
                idProvider: id
            }
        });
    }

    async findAll(){
        return Providers.providers.findAll();
    }

    async save(provider){
        return Providers.providers.create(provider);
    }

    async update(provider){

        return Providers.providers.update({
            nameProvider: provider["nameProvider"],
            address: provider["address"],
            phone: provider["phone"],
            products: provider["products"]
        },
        {
            where:{
                idProvider: provider["idProvider"]
            }
        });
    }

    async delete(id){
        return Providers.providers.destroy({
            where:{
                idProvider: id
            }
        });
    }
}

module.exports = ProviderRepository;
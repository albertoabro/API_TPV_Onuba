const model = require ('../models/init-models');
const sequelize = require('../database');
const TraceabilityProducts = model(sequelize);
class TraceabilityProductsRepository{

    async findById(id){
        return TraceabilityProducts.traceabilityproducts.findAll({
            where:{
                idTraceability: id
            }
        });
    }

    async findAll(){
        return TraceabilityProducts.traceabilityproducts.findAll();
    }

    async save(newTraceability){
        return TraceabilityProducts.traceabilityproducts.create(newTraceability);
    }
}

module.exports = TraceabilityProductsRepository;


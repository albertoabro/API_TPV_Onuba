const model = require ('../models/init-models');
const sequelize = require('../database');
const article = require('../models/article');
const Traceabilities = model(sequelize);
class TraceabilityRepository{
    async findById(id){
        return Traceabilities.traceability.findOne({
            where:{
                idTraceability: id
            }
        });
    }

    async findAll(){
        return Traceabilities.traceability.findAll();
    }

    async save(newTraceability){
        return Traceabilities.traceability.create(newTraceability);
    }

    async update(newTraceability){

        return Traceabilities.traceability.update({
            article: newTraceability["article"],
            products: newTraceability["products"],
            numberBatch: newTraceability["numberBatch"],
            expirationDate: newTraceability["expirationDate"]
        },
        {
            where:{
                idTraceability: newTraceability["idTraceability"]
            }
        });
    }

    async delete(id){
        return Traceabilities.traceability.destroy({
            where:{
                idTraceability: id
            }
        });
    }

    async getProductsFromTraceability(){
        return Traceabilities.traceability.findAll({
    
            group: ['idTraceability']
        })
    }
}

module.exports = TraceabilityRepository;
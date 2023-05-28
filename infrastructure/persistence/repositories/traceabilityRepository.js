const model = require ('../models/init-models');
const sequelize = require('../database');
const Traceabilities = model(sequelize);
const Api400 = require('../../../Error/Api400Error');
const Api404 = require('../../../Error/Api404Error');
const Api500 = require('../../../Error/Api500Error');

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

    async findByNumberBatch(numberBatch){
        const traceabilities = Traceabilities.traceability.findOne({
            where:{
                numberBatch: numberBatch
            }
        })
                  
        if(traceabilities == null)
            throw Api404;

        return traceabilities;
    }
}

module.exports = TraceabilityRepository;
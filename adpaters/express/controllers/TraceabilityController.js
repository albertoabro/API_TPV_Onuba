const TraceabilityService = require('../../../application/services/traceabilityService');
const TraceabilityRepository = require('../../../infrastructure/persistence/repositories/traceabilityRepository');
const traceabilityService = new TraceabilityService(new TraceabilityRepository());
const Api404 = require('../../../Error/Api404Error');
async function findById(req, res){
    const {id} = req.params;
    const traceability = await traceabilityService.findById(id);
    if(!traceability){
        res.status(404).send();
    }
    else{
        res.json(traceability);
    }
}

async function findAll(req, res) {
    const traceabilities = await traceabilityService.findAll();
    res.json(traceabilities);
}

async function create(req, res){
    const dataTraceability = req.body;
    const traceability = await traceabilityService.create({
        idTraceability: dataTraceability.idTraceability,
        article: dataTraceability.article,
        numberBatch: dataTraceability.numberBatch,
        expirationDate: dataTraceability.expirationDate
    });
    res.status(201).json(traceability);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await traceabilityService.delete(id);

    if(deleted){
        res.send();
    }
    else{
        res.status(404).send();
    }

}

async function findByNumberBatch(req, res){
    const {numberBatch} = req.params;
    const traceability = await traceabilityService.findByNumberBatch(numberBatch);
    if(traceability==Api404)
        res.json(null);

    res.json(traceability);
}

module.exports={
    findById,
    findAll,
    findByNumberBatch,
    create,
    remove,
};
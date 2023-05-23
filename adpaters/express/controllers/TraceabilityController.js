const TraceabilityService = require('../../../application/services/traceabilityService');
const TraceabilityRepository = require('../../../infrastructure/persistence/repositories/traceabilityRepository');
const traceabilityService = new TraceabilityService(new TraceabilityRepository());

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
        article: dataTraceability.article,
        products: dataTraceability.products,
        numberBatch: dataTraceability.numberBatch,
        expirationDate: dataTraceability.expirationDate
    });
    res.status(201).json(traceability);
}

async function update(req, res){
    const {id} = req.params;
    const dataTraceability = req.body;
    const traceability = await traceabilityService.findById(id);

    if(!traceability){
        res.status(404).send;
        return;
    }

    traceability.article = dataTraceability.article;
    traceability.products = dataTraceability.products;
    traceability.numberBatch = dataTraceability.numberBatch;
    traceability.expirationDate = dataTraceability.expirationDate;
    const updatedTraceability = traceabilityService.update(traceability);
    res.json(updatedTraceability);
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

module.exports={
    findById,
    findAll,
    create,
    update,
    remove,
};
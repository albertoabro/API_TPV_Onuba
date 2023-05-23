const TraceabilityProductService = require('../../../application/services/traceabilityProductService');
const TraceabilityProductRepository = require('../../../infrastructure/persistence/repositories/traceabilityProductsRepository');
const traceabilityProductsService = new TraceabilityProductService(new TraceabilityProductRepository());

async function findById(req, res){
    const {id} = req.params;
    const traceabilityProduct = await traceabilityProductsService.findById(id);
    if(!traceabilityProduct)
        res.status(404).send();
    else
        res.json(traceabilityProduct);
}

async function create(req, res){
    const dataTraceability = req.body;
    const traceabilityProduct = await traceabilityProductsService.create({
        idTraceability: dataTraceability.idTraceability,
        idProduct: dataTraceability.idProduct
    });
    res.status(201).json(traceabilityProduct);
}

module.exports={
    findById,
    create,
};


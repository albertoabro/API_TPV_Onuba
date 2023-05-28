const TraceabilityProduct = require('../../domain/traceabilityProduct');

class TraceabilityProductService{
    constructor(traceabilityProductRepository){
        this.traceabilityProductRepository = traceabilityProductRepository;
    }

    async findById(id){
        const TraceabilityProductModel = await this.traceabilityProductRepository.findById(id);
        if(!TraceabilityProductModel)
            return null;
        
        return TraceabilityProductModel;
    }

    async findAll(){
        return await this.traceabilityProductRepository.findAll();
    }

    async create(traceability){
        const TraceabilityProductModel = await this.traceabilityProductRepository.save(traceability);
        return new TraceabilityProduct(TraceabilityProductModel);
    }
}

module.exports = TraceabilityProductService;
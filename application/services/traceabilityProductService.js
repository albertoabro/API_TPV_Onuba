const TraceabilityProduct = require('../../domain/traceabilityProduct');

class TraceabilityProductService{
    constructor(traceabilityProductRepository){
        this.traceabilityProductRepository = traceabilityProductRepository;
    }

    async findById(id){
        const TraceabilityModel = await this.traceabilityProductRepository.findById(id);
        if(!TraceabilityModel)
            return null;
        
        return new TraceabilityProduct(TraceabilityModel);
    }

    async create(traceability){
        const TraceabilityModel = await this.traceabilityProductRepository.save(traceability);
        return new TraceabilityProduct(TraceabilityModel);
    }
}

module.exports = TraceabilityProductService;
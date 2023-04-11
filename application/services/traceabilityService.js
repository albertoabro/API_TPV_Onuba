const Traceability = require('../../domain/traceability');

class TraceabilityService{
    constructor(traceabilityRepository){
        this.traceabilityRepository=traceabilityRepository;
    }

    async findById(id){
        const TraceabilityModel = await this.traceabilityRepository.findById(id);
        if(!TraceabilityModel){
            return null;
        }

        return new Traceability(TraceabilityModel);
    }

    async findAll(){
        const TraceabilityModel = await this.traceabilityRepository.findAll();
        return TraceabilityModel;
    }

    async create(traceability){
        const TraceabilityModel = await this.traceabilityRepository.save(traceability);
        return new Traceability(TraceabilityModel);
    }

    async update(traceability){
        console.log(traceability);
        const TraceabilityModel = await this.traceabilityRepository.update(traceability);
        console.log(TraceabilityModel);
        return new Traceability(TraceabilityModel);
    }

    async delete(id){
        const TraceabilityModel = await this.findById(id);
        if(!TraceabilityModel){
            return null;
        }

        await this.traceabilityRepository.delete(id);
        return true;
    }
}

module.exports = TraceabilityService;
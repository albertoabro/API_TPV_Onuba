const Provider = require('../../domain/provider');

class ProviderService{
    constructor(providerRepository){
        this.providerRepository=providerRepository;
    }

    async findById(id){
        const providerModel = await this.providerRepository.findById(id);
        if(!providerModel){
            return null;
        }

        return new Provider(providerModel);
    }

    async findAll(){
        const providerModel = await this.providerRepository.findAll();
        return providerModel;
    }

    async create(provider){
        const providerModel = await this.providerRepository.save(provider);
        return new Provider(providerModel);
    }

    async update(provider){
        console.log(provider);
        const providerModel = await this.providerRepository.update(provider);
        return new Provider(providerModel);
    }

    async delete(id){
        const providerModel = await this.findById(id);
        if(!providerModel){
            return null;
        }

        await this.providerRepository.delete(id);
        return true;
    }

    async findByNameProvider(nameProvider){
        const providerModel = this.providerRepository.findByNameProvider(nameProvider);
        if(!providerModel)
            return null;

        return providerModel;
    }
}

module.exports = ProviderService;
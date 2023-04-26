const ProviderService = require('../../../application/services/providerService');
const ProviderRepository = require('../../../infrastructure/persistence/repositories/providerRepository');
const providerService = new ProviderService(new ProviderRepository());

async function findById(req, res){
    const {id} = req.params;
    const provider = await providerService.findById(id);
    if(!provider){
        res.status(404).send();
    }
    else{
        res.json(provider);
    }
}

async function findAll(req, res) {
    const providers = await providerService.findAll();
    res.json(providers);
}

async function create(req, res){
    const dataProvider = req.body;
    const provider = await providerService.create({
        nameProvider: dataProvider.nameProvider,
        address: dataProvider.address,
        phone: dataProvider.phone,
        products: dataProvider.products
    });
    res.status(201).json(provider);
}

async function update(req, res){
    const {id} = req.params;
    const dataProvider = req.body;
    const provider = await providerService.findById(id);
    if(!provider){
        res.status(404).send;
        return;
    }
    provider.idProvider = dataProvider.idProvider
    provider.nameProvider = dataProvider.nameProvider;
    provider.address = dataProvider.address;
    provider.phone = dataProvider.phone;
    provider.products = dataProvider.products;
    const updatedProvider = providerService.update(provider);
    res.json(updatedProvider);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await providerService.delete(id);

    if(deleted){
        res.send();
    }
    else{
        res.status(404).send();
    }

}

async function findByNameProvider(req, res){
    const{nameProvider} = req.params;
    const providers = await providerService.findByNameProvider(nameProvider);
    res.json(providers);
}

module.exports={
    findById,
    findAll,
    findByNameProvider,
    create,
    update,
    remove,
};
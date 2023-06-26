const TypePayService = require('../../../application/services/typePayService');
const TypePayRepository = require('../../../infrastructure/persistence/repositories/typePayRepository');
const typePayService = new TypePayService(new TypePayRepository());

async function findById(req, res){
    const {id} = req.params;
    const typePay = await typePayService.findById(id);
    if(!typePay){
        res.status(404).send();
    }
    else{
        res.json(typePay);
    }
}

async function findAll(req, res) {
    const typesPay = await typePayService.findAll();
    res.json(typesPay);
}

async function create(req, res){
    const {denomination} = req.body;
    const typePay = await typePayService.create({denomination});
    res.status(201).json(typePay);
}

async function update(req, res){
    const {id} = req.params;
    const {denomination} = req.body;
    const typePay = await typePayService.findById(id);

    if(!typePay){
        res.status(404).send();
        return;
    }

    typePay.denomination=denomination;
    const updatedTypePay = typePayService.update(typePay);
    res.json(updatedTypePay);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await typePayService.delete(id);

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
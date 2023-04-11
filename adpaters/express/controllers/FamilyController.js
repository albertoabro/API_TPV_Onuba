const FamilyService = require('../../../application/services/familyService');
const FamilyRepository = require('../../../infrastructure/persistence/repositories/familyRepository');
const familyService = new FamilyService(new FamilyRepository());

async function findById(req, res){
    const {id} = req.params;
    const family = await familyService.findById(id);
    if(!family){
        res.status(404).send();
    }
    else{
        res.json(family);
    }
}

async function findAll(req, res) {
    const families = await familyService.findAll();
    res.json(families);
}

async function create(req, res){
    const {nameFamily} = req.body;
    const family = await familyService.create({nameFamily});
    res.status(201).json(family);
}

async function update(req, res){
    const {id} = req.params;
    const {nameFamily} = req.body;
    const family = await familyService.findById(id);

    if(!family){
        res.status(404).send;
        return;
    }

    family.nameFamily=nameFamily;
    const updatedFamily = familyService.update(family);
    res.json(updatedFamily);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await familyService.delete(id);

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
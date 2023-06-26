const TypeUserService = require('../../../application/services/typeUserService');
const TypeUserRepository = require('../../../infrastructure/persistence/repositories/typeUserRepository');
const typeUserService = new TypeUserService(new TypeUserRepository());

async function findById(req, res){
    const {id} = req.params;
    const typeUser = await typeUserService.findById(id);
    if(!typeUser){
        res.status(404).send();
    }
    else{
        res.json(typeUser);
    }
}

async function findAll(req, res) {
    const typesUser = await typeUserService.findAll();
    res.json(typesUser);
}

async function create(req, res){
    const dataTypeUser = req.body;
    const typeUser = await typeUserService.create({
        denomination: dataTypeUser.denomination,
        rol: dataTypeUser.rol
    });
    res.status(201).json(typeUser);
}

async function update(req, res){
    const {id} = req.params;
    const {denomination} = req.body;
    const typeUser = await typeUserService.findById(id);

    if(!typeUser){
        res.status(404).send();
        return;
    }

    typeUser.denomination=denomination;
    const updatedTypeUser = typeUserService.update(typeUser);
    res.json(updatedTypeUser);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await typeUserService.delete(id);

    if(deleted){
        res.send();
    }
    else{
        res.status(404).send();
    }

}

async function removeAll(req, res){
    const deleted = await typeUserService.deleteAll();

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
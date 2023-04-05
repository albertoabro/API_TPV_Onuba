const RolService = require('../../../application/services/rolService');
const RolRepository = require('../../../infrastructure/persistence/repositories/rolRepository');
const rolService = new RolService(new RolRepository());

async function findById(req, res){
    const {id} = req.params;
    const rol = await rolService.findById(id);
    if(!rol){
        res.status(404).send();
    }
    else{
        res.json(rol);
    }
}

async function findAll(req, res) {
    const roles = await rolService.findAll();
    res.json(roles);
}

async function create(req, res){
    const {denomination} = req.body;
    const rol = await rolService.create({denomination});
    res.status(201).json(rol);
}

async function update(req, res){
    const {id} = req.params;
    const {denomination} = req.body;
    const rol = await rolService.findById(id);

    if(!rol){
        res.status(404).send;
        return;
    }

    rol.denomination=denomination;
    const updatedRol = rolService.update(rol);
    res.json(updatedRol);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await rolService.delete(id);

    if(deleted){
        res.send();
    }
    else{
        res.status(404).send();
    }

}

async function removeAll(req, res){
    const deleted = await rolService.deleteAll();

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
    removeAll,
};
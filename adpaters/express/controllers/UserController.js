const UserService = require('../../../application/services/userService');
const UserRepository = require('../../../infrastructure/persistence/repositories/userRepository');
const userService = new UserService(new UserRepository());

async function findById(req, res){
    const {id} = req.params;
    const user = await userService.findById(id);
    if(!user){
        res.status(404).send();
    }
    else{
        res.json(user);
    }
}

async function findByCredentials(req, res){
    const dataUser= req.body
    const credentials = {
        userName:dataUser.userName,
        password:dataUser.password
    }
    const user = await userService.findByCredentials(credentials)
    if(!user){
        res.status(404).send;
    }
    else{
        res.json(user)
    }

}

async function findAll(req, res) {
    const users = await userService.findAll();
    res.json(users);
}

async function create(req, res){
    const dataUser = req.body;
    const user = await userService.create({
        userName: dataUser.userName,
        password: dataUser.password,
        address: dataUser.address,
        phone: dataUser.phone,
        typeUser: dataUser.typeUser
    });
    res.status(201).json(user);
}

async function update(req, res){
    const {id} = req.params;
    const dataUser = req.body;
    const user = await userService.findById(id);

    if(!user){
        res.status(404).send;
        return;
    }

    user.userName = dataUser.userName;
    user.password =  dataUser.password;
    user.address = dataUser.address;
    user.phone = dataUser.phone;
    user.typeUser = dataUser.typeUser;
    const updatedUser = userService.update(user);
    res.json(updatedUser);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await userService.delete(id);

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
    findByCredentials,
    create,
    update,
    remove,
};
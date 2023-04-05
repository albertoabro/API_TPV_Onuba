const TypeUser = require('../../domain/type_user');

class TypeUserService{
    constructor(typeUserRepository){
        this.typeUserRepository=typeUserRepository;
    }

    async findById(id){
        const typeUserModel = await this.typeUserRepository.findById(id);
        if(!typeUserModel){
            return null;
        }

        return new TypeUser(typeUserModel);
    }

    async findAll(){
        const typeUserModel = await this.typeUserRepository.findAll();
        return typeUserModel;
    }

    async create(typeUser){
        const typeUserModel = await this.typeUserRepository.save(typeUser);
        return new TypeUser(typeUserModel);
    }

    async update(typeUser){
        console.log(typeUser);
        const typeUserModel = await this.typeUserRepository.update(typeUser);
        console.log(typeUserModel);
        return new TypeUser(typeUserModel);
    }

    async delete(id){
        const typeUserModel = await this.findById(id);
        if(!typeUserModel){
            return null;
        }

        await this.typeUserRepository.delete(id);
        return true;
    }

    async deleteAll(){
        this.typeUserRepository.deleteAll();
        return true;
    }
}

module.exports = TypeUserService;
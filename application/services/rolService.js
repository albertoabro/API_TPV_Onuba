const Rol = require('../../domain/rol');

class RolService{
    constructor(rolRepository){
        this.rolRepository=rolRepository;
    }

    async findById(id){
        const rolModel = await this.rolRepository.findById(id);
        if(!rolModel){
            return null;
        }

        return new Rol(rolModel);
    }

    async findAll(){
        const rolModel = await this.rolRepository.findAll();
        return rolModel;
    }

    async create(rol){
        const rolModel = await this.rolRepository.save(rol);
        return new Rol(rolModel);
    }

    async update(rol){
        const rolModel = await this.rolRepository.update(rol);
        return new Rol(rolModel);
    }

    async delete(id){
        const rolModel = await this.findById(id);
        if(!rolModel){
            return null;
        }

        await this.rolRepository.delete(id);
        return true;
    }

    async deleteAll(){
        this.rolRepository.deleteAll();
        return true;
    }
}

module.exports = RolService;
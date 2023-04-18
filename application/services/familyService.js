const Family = require('../../domain/family');

class FamilyService{
    constructor(familyRepository){
        this.familyRepository=familyRepository;
    }

    async findById(id){
        const familyModel = await this.familyRepository.findById(id);
        if(!familyModel){
            return null;
        }

        return new Family(familyModel);
    }

    async findAll(){
        const familyModel = await this.familyRepository.findAll();
        return familyModel;
    }

    async create(family){
        const familyModel = await this.familyRepository.save(family);
        return new Family(familyModel);
    }

    async update(family){
        console.log(family);
        const familyModel = await this.familyRepository.update(family);
        console.log(familyModel);
        return new Family(familyModel);
    }

    async delete(id){
        const familyModel = await this.findById(id);
        if(!familyModel){
            return null;
        }

        await this.familyRepository.delete(id);
        return true;
    }

    async findByNameFamily(nameFamily){
        const familyModel = this.familyRepository.findByNameFamily(nameFamily);
        if(!familyModel)
            return null;
        
        return familyModel;
    }
}

module.exports = FamilyService;
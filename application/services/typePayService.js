const TypePay = require('../../domain/typepay');

class TypePayService{
    constructor(typePayRepository){
        this.typePayRepository=typePayRepository;
    }

    async findById(id){
        const typePayModel = await this.typePayRepository.findById(id);
        if(!typePayModel){
            return null;
        }

        return new TypePay(typePayModel);
    }

    async findAll(){
        const typePayModel = await this.typePayRepository.findAll();
        return typePayModel;
    }

    async create(typePay){
        const typePayModel = await this.typePayRepository.save(typePay);
        return new TypePay(typePayModel);
    }

    async update(typePay){
        console.log(typePay);
        const typePayModel = await this.typePayRepository.update(typePay);
        console.log(typePayModel);
        return new TypePay(typePayModel);
    }

    async delete(id){
        const typePayModel = await this.findById(id);
        if(!typePayModel){
            return null;
        }

        await this.typePayRepository.delete(id);
        return true;
    }
}

module.exports = TypePayService;
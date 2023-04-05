const User = require('../../domain/users');

class UserService{
    constructor(userRepository){
        this.userRepository=userRepository;
    }

    async findById(id){
        const userModel = await this.userRepository.findById(id);
        if(!userModel){
            return null;
        }

        return new User(userModel);
    }

    async findAll(){
        const userModel = await this.userRepository.findAll();
        return userModel;
    }

    async findByCredentials(credentials){
        const userModel = await this.userRepository.findByCredentials(credentials);
        return userModel;
    }

    async create(user){
        const userModel = await this.userRepository.save(user);
        return new User(userModel);
    }

    async update(user){
        console.log(user);
        const userModel = await this.userRepository.update(user);
        console.log(userModel);
        return new User(userModel);
    }

    async delete(id){
        const userModel = await this.findById(id);
        if(!userModel){
            return null;
        }

        await this.userRepository.delete(id);
        return true;
    }
}

module.exports = UserService;
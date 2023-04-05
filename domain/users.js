class User{
    constructor({idUser, userName, password, address, phone, typeUser}){
        this.idUser=idUser;
        this.userName=userName;
        this.password=password;
        this.address=address;
        this.phone=phone;
        this.typeUser=typeUser;
    }
}

module.exports = User;
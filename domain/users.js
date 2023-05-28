class User{
    constructor({idUser, userName, password, address, phone, typeUser, passwordTPV}){
        this.idUser=idUser;
        this.userName=userName;
        this.password=password;
        this.address=address;
        this.phone=phone;
        this.typeUser=typeUser;
        this.passwordTPV=passwordTPV;
    }
}

module.exports = User;
class Provider{
    constructor({idProvider, nameProvider, address, phone, products}){
        this.idProvider=idProvider;
        this.nameProvider=nameProvider;
        this.address=address;
        this.phone=phone;
        this.products=products;
    }
}

module.exports = Provider
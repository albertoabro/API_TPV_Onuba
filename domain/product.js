class Product{
    constructor({idProduct, nameProduct, provider, category, price}){
        this.idProduct=idProduct;
        this.nameProduct=nameProduct;
        this.provider=provider;
        this.category=category;
        this.price=price;
    }
}

module.exports = Product;
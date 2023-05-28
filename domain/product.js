class Product{
    constructor({idProduct, nameProduct, provider, category, price, stock}){
        this.idProduct=idProduct;
        this.nameProduct=nameProduct;
        this.provider=provider;
        this.category=category;
        this.price=price;
        this.stock=stock;
    }
}

module.exports = Product;
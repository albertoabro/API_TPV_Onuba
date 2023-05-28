class Article{
    constructor({idArticle, nameSales, priceSales, units, family, numBatch, stock}){
        this.idArticle = idArticle;
        this.nameSales = nameSales;
        this.priceSales = priceSales;
        this.units = units;
        this.family = family;
        this.numBatch = numBatch;
        this.stock=stock;
    }
}

module.exports = Article;
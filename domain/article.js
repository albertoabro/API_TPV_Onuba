class Article{
    constructor({idArticle, nameSales, priceSales, units, family, numBatch}){
        this.idArticle = idArticle;
        this.nameSales = nameSales;
        this.priceSales = priceSales;
        this.units = units;
        this.family = family;
        this.numBatch = numBatch;
    }
}

module.exports = Article;
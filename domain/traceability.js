class Traceability{
    constructor({idTraceability, article, products, numberBatch, expirationDate}){
        this.idTraceability=idTraceability;
        this.article=article;
        this.products=products;
        this.numberBatch=numberBatch;
        this.expirationDate=expirationDate;
    }
}

module.exports = Traceability;
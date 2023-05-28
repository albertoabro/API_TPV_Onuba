class Traceability{
    constructor({idTraceability, article, numberBatch, expirationDate}){
        this.idTraceability=idTraceability;
        this.article=article;
        this.numberBatch=numberBatch;
        this.expirationDate=expirationDate;
    }
}

module.exports = Traceability;
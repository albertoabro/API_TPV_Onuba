class Ticket{
    constructor({idAuto, idTicket, userName, dateBuy, article, unit, typePay, total, pay, payBack}){
        this.idAuto=idAuto;
        this.idTicket=idTicket;
        this.userName=userName;
        this.dateBuy=dateBuy;
        this.article=article;
        this.unit=unit;
        this.typePay=typePay;
        this.total=total;
        this.pay=pay;
        this.payBack=payBack;
    }
}

module.exports = Ticket;
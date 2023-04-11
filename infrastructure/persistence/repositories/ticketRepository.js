const model = require ('../models/init-models');
const sequelize = require('../database');
const Ticket = model(sequelize);
class TicketRepository{
    async findById(id){
        return Ticket.ticket.findOne({
            where:{
                idTicket: id
            }
        });
    }

    async findAll(){
        return Ticket.ticket.findAll();
    }

    async save(newTicket){
        return Ticket.ticket.create(newTicket);
    }

    async update(newTicket){

        return Ticket.ticket.update({
            idTicket: newTicket["idTicket"],
            userName: newTicket["userName"],
            dateBuy: newTicket["dateBuy"],
            article: newTicket["article"],
            unit: newTicket["unit"],
            typePay: newTicket["typePay"],
            total: newTicket["total"],
            pay: newTicket["pay"],
            payBack: newTicket["payBack"]
        },
        {
            where:{
                idTicket: newTicket["idTicket"]
            }
        });
    }

    async delete(id){
        return Ticket.ticket.destroy({
            where:{
                idTicket: id
            }
        });
    }
}

module.exports = TicketRepository;
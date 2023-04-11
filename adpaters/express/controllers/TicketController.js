const TicketService = require('../../../application/services/ticketService');
const TicketRepository = require('../../../infrastructure/persistence/repositories/ticketRepository');
const ticketService = new TicketService(new TicketRepository());

async function findById(req, res){
    const {id} = req.params;
    const ticket = await ticketService.findById(id);
    if(!ticket){
        res.status(404).send();
    }
    else{
        res.json(ticket);
    }
}

async function findAll(req, res) {
    const tickets = await ticketService.findAll();
    res.json(tickets);
}

async function create(req, res){
    const dataTicket = req.body;
    const ticket = await ticketService.create({
        idTicket: dataTicket.idTicket,
        userName: dataTicket.userName,
        dateBuy: dataTicket.dateBuy,
        article: dataTicket.article,
        unit: dataTicket.unit,
        typePay: dataTicket.typePay,
        total: dataTicket.total,
        pay: dataTicket.pay,
        payBack:dataTicket.payBack
    });
    res.status(201).json(ticket);
}

async function update(req, res){
    const {id} = req.params;
    const dataTicket = req.body;
    const ticket = await ticketService.findById(id);

    if(!ticket){
        res.status(404).send;
        return;
    }

    ticket.idTicket = dataTicket.idTicket;
    ticket.userName = dataTicket.userName;
    ticket.dateBuy = dataTicket.dateBuy;
    ticket.article = dataTicket.article;
    ticket.unit = dataTicket.unit;
    ticket.typePay = dataTicket.typePay;
    ticket.total = dataTicket.total;
    ticket.pay = dataTicket.pay;
    ticket.payBack = dataTicket.payBack;

    const updatedTicket = ticketService.update(ticket);
    res.json(updatedTicket);
}

async function remove(req, res){
    const {id} = req.params;
    const deleted = await ticketService.delete(id);

    if(deleted){
        res.send();
    }
    else{
        res.status(404).send();
    }

}

module.exports={
    findById,
    findAll,
    create,
    update,
    remove,
};
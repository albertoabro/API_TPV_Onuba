const Ticket = require('../../domain/ticket');

class TicketService{
    constructor(ticketRepository){
        this.ticketRepository=ticketRepository;
    }

    async findById(id){
        const ticketModel = await this.ticketRepository.findById(id);
        if(!ticketModel){
            return null;
        }

        return new Ticket(ticketModel);
    }

    async findAll(){
        const ticketModel = await this.ticketRepository.findAll();
        return ticketModel;
    }

    async create(ticket){
        const ticketModel = await this.ticketRepository.save(ticket);
        return new Ticket(ticketModel);
    }

    async update(ticket){
        console.log(ticket);
        const ticketModel = await this.ticketRepository.update(ticket);
        console.log(ticketModel);
        return new Ticket(ticketModel);
    }

    async delete(id){
        const ticketModel = await this.findById(id);
        if(!ticketModel){
            return null;
        }

        await this.ticketRepository.delete(id);
        return true;
    }
}

module.exports = TicketService;
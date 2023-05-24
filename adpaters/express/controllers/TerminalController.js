const TerminalService = require('../../../application/services/terminalService');
const TerminalRepository = require('../../../infrastructure/persistence/repositories/terminalRepository');
const terminalService = new TerminalService(new TerminalRepository());

async function findById(req, res){
    const{id} = req.params;
    const terminal = await terminalService.findById(id);

    if(!terminal)
        res.status(404).send();

    res.json(terminal);
}

async function findAll(req, res){
    const terminals = await terminalService.findAll();
    res.json(terminals);
}

module.exports={
    findById,
    findAll,
};
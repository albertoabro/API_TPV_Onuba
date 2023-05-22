const Terminal = require('../../domain/terminal');

class TerminalService{
    constructor(terminalRepository){
        this.terminalRepository=terminalRepository;
    }

    async findById(id){
        const terminalModel = await this.terminalRepository.findById(id);
        if(!terminalModel)
            return null;

        return new Terminal(terminalModel);
    }

    async findAll(){
        const terminalModel = this.terminalRepository.findAll();
        return terminalModel;
    }
}
module.exports = TerminalService;
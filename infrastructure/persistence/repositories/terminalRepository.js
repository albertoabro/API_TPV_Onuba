const model = require('../models/init-models');
const sequelize = require('../database');
const Terminal = model(sequelize);
class TerminalRepository{
    async findById(id){
        return Terminal.terminal.findOne({
            where:{
                idterminal: id
            }
        });
    }

    async findAll(){
        return Terminal.terminal.findAll();
    }
}
module.exports = TerminalRepository;
class Terminal{
    constructor({idTerminal, name, ipv4, ipv6}){
        this.idTerminal = idTerminal;
        this.name=name;
        this.ipv4 = ipv4;
        this.ipv6 = ipv6;
    }
}

module.exports = Terminal;
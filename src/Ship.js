class Ship {
    constructor(name, currentPort, passengers) {
        this.name = name;
        this.currentPort = currentPort;
        this.passengers = passengers;
    }
    setSail() {
        this.currentPort = null;
    }
    dock(destinationPort) {
        this.currentPort = destinationPort;
    }
};

module.exports = Ship;
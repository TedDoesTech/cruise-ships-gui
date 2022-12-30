function Ship(name, startingPort, passengers) {
    this.name = name;
    this.startingPort = startingPort;
    this.passengers = passengers;
};

Ship.prototype.setSail=function() {
    this.startingPort = null
};

module.exports = Ship;
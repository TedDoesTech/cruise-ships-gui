function Port (name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip=function(ship) {
    this.ships.push(ship);
    return this.ships;
};

Port.prototype.removeShip=function(ship) {
    const shipToRemoveIndex = this.ships.indexOf(ship);
    this.ships.splice(shipToRemoveIndex,1);
    return this.ships;
};

module.exports = Port
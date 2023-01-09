function Port (name) {
    this.name = name;
    this.ships = [];
};

Port.prototype.addShip=function(ship) {
    this.ships = [ship];
};

Port.prototype.removeShip=function(ship) {
    const shipToRemoveIndex = this.ships.indexOf(ship);
    this.ships = this.ships.splice(shipToRemoveIndex,1);
};

module.exports = Port
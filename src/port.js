(function exportPort() {
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

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    };
}());

module.exports = Port
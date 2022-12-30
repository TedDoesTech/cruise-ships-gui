const Ship = require("../src/ship.js");
const Port = require("../src/port.js");

describe('Ship', () => {
    it('returns a new cruise ship as an object', () => {
        expect(new Ship('Titanic', 'Southampton')).toBeInstanceOf(Object);
    });
});
describe('currentPort', () => {
    it('has a starting port', () => {
        const port = new Port('Southampton')
        const ship = new Ship('Titanic', port)
        expect(ship.currentPort).toBe(port)
    });
});
describe('passengers', () => {
    it('has passengers on board', () => {
        const ship = new Ship('Titanic', 'Southampton', ['Dave, Zoe, Ryan'])
        expect(ship.passengers).toBeInstanceOf(Array);
    });
});
describe('setSail', () => {
    it('is able to set sail', () => {
        const port = new Port('Southampton')
        const ship = new Ship('Titanic', port, ['Dave, Zoe, Ryan'])
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});
describe('dock', () => {
    it('is able to dock at a different port', () => {
        const departurePort = new Port('Southampton');
        const ship = new Ship('Titanic', departurePort, ['Dave, Zoe, Ryan']);
        const destinationPort = new Port('Calais');

        ship.dock(destinationPort);
        
        expect(ship.currentPort).toBe(destinationPort)
    });
});

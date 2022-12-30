const Ship = require("../src/Ship");

describe('Ship', () => {
    it('returns a new cruise ship as an object', () => {
        expect(new Ship('Titanic', 'Southampton')).toBeInstanceOf(Object);
    });
});
describe('startingPort', () => {
    it('has a starting point', () => {
        const ship = new Ship('Titanic', 'Southampton')
        expect(ship.startingPort).toEqual('Southampton')
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
        const ship = new Ship('Titanic', 'Southampton', ['Dave, Zoe, Ryan'])
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});
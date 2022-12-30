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
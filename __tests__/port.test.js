/* globals describe it expect */

const Port = require('../src/port.js');

describe('Port', () => {
    describe('it has a name and can add and remove a ship', () => {
        let port;
        let ship;
        let titanic;
        let queenMary;

    beforeEach(() => {
        port = new Port('Dover');
        ship = jest.fn();
        titanic = jest.fn();
        queenMary = jest.fn();
        });

        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });

        it('has a name', () => {
            expect(port.name).toEqual('Dover');
        });

        it('can add a ship', () => {
            port.addShip(ship);

            expect(port.ships).toContain(ship);
        });

        it('can remove a ship', () => {
            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        });
    });
});
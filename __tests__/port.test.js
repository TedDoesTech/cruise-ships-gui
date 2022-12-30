const Port = require("../src/port");

describe('Port', () => {
    it('returns a new port as an object', () => {
        expect(new Port('Southampton')).toBeInstanceOf(Object);
    });
});
describe('location', () => {
    it('checks port has a location', () => {
        const port = new Port('Southampton')
        expect(port.location).toEqual('Southampton')
    });
});
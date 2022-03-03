const Manager = require('../lib/Manager.js');

test('create a manager object', () => {
    const manager = new Manager('Brandon', 29, 'test@test.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role of employee', () => {
    const manager = new Manager('Brandon', 29, 'test@test.com', 4);

    expect(manager.getRole()).toEqual("Manager");
})
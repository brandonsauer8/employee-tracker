const Engineer = require('../lib/Engineer.js');

test('create an engineer object', () => {
    const engineer = new Engineer('Brandon', 29, 'test@test.com', 'brandonsauer8');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get github username', () => {
    const engineer = new Engineer('Brandon', 29, 'test@test.com', 'brandonsauer8');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('Brandon', 29, 'test@test.com', 'brandonsauer8');

    expect(engineer.getRole()).toEqual("Engineer");
});
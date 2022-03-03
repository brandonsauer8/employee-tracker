const Intern = require('../lib/Intern.js');

test('create an intern object', () => {
    const intern = new Intern('Brandon', 29, 'test@test.com', 'UC Davis');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('Brandon', 29, 'test@test.com', 'UC Davis');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role of employee', () => {
    const intern = new Intern('Brandon', 29, 'test@test.com', 'UC Davis');

    expect(intern.getRole()).toEqual("Intern");
});
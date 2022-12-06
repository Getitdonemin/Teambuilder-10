const Engineer = require('../lib/Engineer.js');

// Class accepts destructured object (name, id, email, github)
const testObject = {name: 'Jeff', id: 2, email: "jeff@some.com", github: "its-jefe"}

test('Checks for inherited Employee properties', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.name).toEqual(expect.any(String));
    console.log(`Engineer name: ${engineer.name}`)
    expect(engineer.id).toEqual(expect.any(Number));
    console.log(`Engineer id: ${engineer.id}`)
    expect(engineer.email).toEqual(expect.any(String));
    console.log(`Engineer email: ${engineer.email}`)
});

test('Checks for github', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.github).toEqual(expect.any(String));
    console.log(`Engineer github: ${engineer.github}`)
});

test('Checks for office number', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getGithub()).toEqual(expect.any(String));
    console.log(`Engineer getGithub(): ${engineer.getGithub()}`)
});

test('Gets Engineer role', () => {
    const engineer = new Engineer(testObject);
    expect(engineer.getRole()).toBe('Engineer');
    console.log(`Engineer getRole(): ${engineer.getRole()}`)
    // Returns 'Engineer'
});
const Intern = require('../lib/Intern.js');

// Class accepts destructured object (name, id, email, school)
const testObject = {name: 'Rookie', id: 3, email: "rookie@some.com", school: "school"}

test('Checks for inherited Employee properties', () => {
    const intern = new Intern(testObject);
    expect(intern.name).toEqual(expect.any(String));
    console.log(`Intern name: ${intern.name}`)
    expect(intern.id).toEqual(expect.any(Number));
    console.log(`Intern id: ${intern.id}`)
    expect(intern.email).toEqual(expect.any(String));
    console.log(`Intern email: ${intern.email}`)
});

test('Checks for school', () => {
    const intern = new Intern(testObject);
    expect(intern.school).toEqual(expect.any(String));
    console.log(`Intern school: ${intern.school}`)
});

test('Gets Interns school', () => {
    const intern = new Intern(testObject);
    expect(intern.getSchool()).toEqual(expect.any(String));
    console.log(`Intern getSchool(): ${intern.getSchool()}`)
});

test('Gets Intern role', () => {
    const intern = new Intern(testObject);
    expect(intern.getRole()).toBe('Intern');
    console.log(`Intern getRole(): ${intern.getRole()}`)
    // Returns 'Intern'
});
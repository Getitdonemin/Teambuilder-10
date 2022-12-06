//Same employee properties and methods adding on school and getschool for Intern's properties and methods
const Employee = require('./Employee.js');

//added school for the Intern's properties 'school
class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name, id, email);
        this.school = school;
    }
    //now returns intern with high wishes
    getRole(){
        return 'Good Luck Intern!!';
    }
    //new method for Intern getSchool()
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
//with employee extended engineer adding same methods from employee while adding getgithub and github and for getrole returning engineer instead
const Employee = require('./Employee.js');

//added github for the employee's properties
class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name, id, email);
        this.github = github;
}
    getRole(){
        return 'The Engineer!';
    }
    //new method for engineer
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;
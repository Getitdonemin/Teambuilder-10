//Same employee properties and methods added officeNumber property
const Employee = require('./Employee.js')
//added OfficeNumber for the Manager's properties
class Manager extends Employee {
    constructor(name,id,email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getName() {
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
}
    //now returns Manager with high wishes
    getRole(){
        return 'High Status Manager.'
    }
    //gets office number function
    getOfficeNumber(){
        return this.officeNumber
    }
   
}

module.exports = Manager
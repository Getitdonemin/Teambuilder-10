//importing all the classes and packages
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//creates example page into html renderer
const render = require("./lib/htmlRenderer");

//Employee array
let employeeArray = []
//made prompt for the manager including name id email and office number
inquirer.prompt([
{
    message: 'Name of the Manager?',
    type: 'input',
    name: 'name'
},
{
    message: 'Id of the Manager?',
    type: 'input',
    name: 'id'
},{
    message: 'Email of the Manager?',
    type: 'input',
    name: 'email'
},{
    message: 'Officenumber of the Managers office?',
    type: 'input',
    name: 'officeNumber'
},
])
//pushes the inputs into the array making a new manager
.then(manager=>{
    let newManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
    employeeArray.push(newManager)

    
})
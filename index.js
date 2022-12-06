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
const { type } = require("os");

//Employee array
let employeeArray = []
// continued question after engineer or intern
const questionContinue = () =>{
    inquirer.prompt([{
        message: 'Want any more team members?',
        type: 'list',
        choices: ['yes', 'nah'],
        name: 'yesOrNah'
    }])
    .then(yesOrNah =>{
        if (yesOrNah.yesOrNah == 'yes'){
            engineerOrIntern()
        } else {
            console.log('Done!')
        }
    })
}
//added new prompt for either engineer or intern
const engineerOrIntern = () => {
    inquirer.prompt([{
        message :'would you like to add an engineer or the intern?',
        type: 'list',
        choices: ['Engineer', 'Intern'],
        name: 'engineerOrIntern'
    }])
    //engineer's prompt
    .then(answer => {
        if(answer.engineerOrIntern == 'Engineer'){
            inquirer.prompt([
                {
                    message: 'Name of the Engineer?',
                    type: 'input',
                    name: 'name'
                },
                {
                    message: 'Id of the Engineer?',
                    type: 'input',
                    name: 'id'
                },{
                    message: 'Email of the Engineer?',
                    type: 'input',
                    name: 'email'
                },{
                    message: 'Github of the Engineer?',
                    type: 'input',
                    name: 'github'
                },
            ])
            .then(engineer => {
                let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github)
                employeeArray.push(newEngineer)
                questionContinue()
            })
        }
    })
}
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
    engineerOrIntern() 
})

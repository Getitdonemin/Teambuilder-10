//required packages
const fs = require('fs');
const inquirer = require('inquirer');

// Employee template based on these below.
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// This array fills in with employee data.
const membersArray = [];
// Manager will change so it can't be a const. 
let manager;
// This info is for the HTML.
let teamTitle;

//created prompt for manager's data while using it to create new obj
function getManagersData() {
    inquirer.prompt([
        {   
            type: "input",
            message: "Name of your team?",
            name: "teamTitle"
        },
        {   
            type: "input",
            message: "Name of the Manager?",
            name: "managerName"
        },
        {  
            type: "input",
            message: "Manager's ID?",
            name: "managerID"
        },
        {   
            type: "input",
            message: "Manager's email?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Manager's office number?",
            name: "officeNumber"
        }]).then(managerAnswers => {
            manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
            teamTitle = managerAnswers.teamTitle;
            console.log("Any new/current employee that needs to be added?")
            newOrCurrentEmployeeData();
        });
}
//Then goes into prompt for engineer or Intern
function newOrCurrentEmployeeData() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is this employee's role?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"]
        },

        {
            type: "input",
            message: "Employee's name?",
            name: "employeeName"
        },
        {
            type: "input",
            message: "Employee's id?",
            name: "employeeId"
        },
        {
            type: "input",
            message: "Employee's email?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "Engineer's Github?",
            name: "github",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type: "input",
            message: "Intern's school?",
            name: "school",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add another member?" 
        }
        //from here then pushes either intern or engineer to membersArray
    ]).then(answers => {
  
        if (answers.employeeRole === "Intern") {
            const employee = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
            membersArray.push(employee);
        } else if (answers.employeeRole === "Engineer") {

            membersArray.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github));
        }
        if (answers.newEmployee === true) {
            newOrCurrentEmployeeData();
        } else {

            var main = fs.readFileSync('./src/main.html', 'utf8');

            main = main.replace(/{{teamTitle}}/g, teamTitle);

            var managerCard = fs.readFileSync('./src/Manager.html', 'utf8');
            managerCard = managerCard.replace('{{name}}', manager.getName());
            managerCard = managerCard.replace('{{role}}', manager.getRole());
            managerCard = managerCard.replace('{{id}}', manager.getId());
            managerCard = managerCard.replace('{{email}}', manager.getEmail());
            managerCard = managerCard.replace('{{officeNumber}}', manager.getOfficeNumber());

            var cards = managerCard;
            for (var i = 0; i < membersArray.length; i++) {
                var employee = membersArray[i];
                cards += renderEmployee(employee);
            }

            main = main.replace('{{cards}}', cards);

            fs.writeFileSync('./output/team.html', main);

            console.log("Your file has been saved!");
        }
    });
}
//creates html based on getrole
function renderEmployee(employee) {
    if (employee.getRole() === "Good Luck Intern!!") {
        var internCard = fs.readFileSync('./src/Intern.html', 'utf8');
        internCard = internCard.replace('{{name}}', employee.getName());
        internCard = internCard.replace('{{role}}', employee.getRole());
        internCard = internCard.replace('{{id}}', employee.getId());
        internCard = internCard.replace('{{email}}', employee.getEmail());
        internCard = internCard.replace('{{school}}', employee.getSchool());
        return internCard;
    } else if (employee.getRole() === "The Engineer!") {
        var engineerCard = fs.readFileSync('./src/Engineer.html', 'utf8');
        engineerCard = engineerCard.replace('{{name}}', employee.getName());
        engineerCard = engineerCard.replace('{{role}}', employee.getRole());
        engineerCard = engineerCard.replace('{{id}}', employee.getId());
        engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
        engineerCard = engineerCard.replace('{{github}}', employee.getGithub());
        return engineerCard;
    }
}

getManagersData();
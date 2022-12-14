# Team-Profile-Generator
## Object-Oriented Programming Challenge: Team Profile Generator
Your challenge is to build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
Because this Challenge will require the use of the Inquirer package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: npm i inquirer@8.2.4.
Testing is key to making code maintainable, you’ll also write unit tests for each part of your code and ensure that it passes all of them.
This application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video and add it to the README of your project.

```
Install npm i inquirer@8.2.4
```

## User Story
```
As a manager
I Want generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Getting Started
This Challenge will combine many of the skills you’ve learned over the first ten weeks of this course. To help you get started, we’ve provided some guidelines in addition to the User Story and Acceptance Criteria.

Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:

```
node index.js
```

It is recommended that you start with a directory structure that looks like this:

```
.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── src/                   // template helper code 
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
```

```
IMPORTANT
Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.

The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

The first class is an Employee parent class with the following properties and methods:

name

id

email

getName()

getId()

getEmail()

getRole() // Returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have:

officeNumber

getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:

school

getSchool()

getRole() // Overridden to return 'Intern'

Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.
```

### Walkthrough Video Link: [Untitled_ Dec 6, 2022 3_57 PM.webm](https://user-images.githubusercontent.com/107437104/206032447-444bf407-4581-401d-898d-a35de379657b.webm)

### The HTML file generated: ![Team builder screen shot](https://user-images.githubusercontent.com/107437104/206032631-b875efc5-565a-42ce-95b1-1502fd879b01.jpg)

### Github Repository:https://github.com/Getitdonemin/Teambuilder-10

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
const inquirer = require('inquirer');
const confirm = require('inquirer-confirm');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const render = require('./src/template.js');
const allMgrData = [];
const allEngData = [];
const allIntData = [];


// function generateProfiles(data) {
//     return (
//         `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta http-equiv="X-UA-Compatible" content="IE=edge">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
//             <link rel="stylesheet" href="./style.css">
//             <title>Document</title>
//         </head>
//         <body>

//         <script src="./assets/index.js"></script>
//         </body>
//         </html>
//         `
//     )
// }
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// Employee classes

// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
//     getName = () => {
//         console.log("Name: " + this.name)
//     };
//     getId = () => {
//         console.log("ID: " + this.id)
//     };
//     getEmail = () => {
//         console.log("Email: " + this.email)
//     };
//     getRole = () => {
//         console.log("Employee")
//     }
// };

// class Manager extends Employee {
//     constructor(name, id, email, officeNumber) {
//         super(name, id, email);
//         this.officeNumber = officeNumber; 
//     };
//     getRole= () => {
//         return "Manager"
//     }
// };

// class Engineer extends Employee {
//     constructor(name, id, email, github) {
//         super(name, id, email);
//         this.github = github; 
//     };
//     getGithub = () => {
//         console.log(this.github)
//     };
//     getRole= () => {
//         console.log("Engineer")
//     }
// };

// class Intern extends Employee {
//     constructor(name, id, email, school) {
//         super(name, id, email);
//         this.school = school; 
//     };
//     getSchool = () => {
//         console.log(this.school)
//     };
//     getRole= () => {
//         console.log("Intern")
//     }
// };
const empData = [
    {
        type: "list",
        messgae: "Choose an employee type to add: ",
        name: "type",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        message: "Enter Employees's name: ",
        name: "employee"
    },
    {
        type: "input",
        message: "Enter Employee's ID: ",
        name: "id"
    },
    {
        type: "input",
        message: "Enter Employee's email: ",
        name: "email"
    },  
    {
        type: "input",
        message: "Enter Manager's office number: ",
        name: "office",
        when: (data) => data.type === "Manager"
    },
    {
        type: "input",
        message: "Enter Engineer's gitHub username: ",
        name: "git",
        when: (data) => data.type === "Engineer"
    },
    {
        type: "input",
        message: "Enter Intern's school: ",
        name: "school",
        when: (data) => data.type === "Intern"
    },

];


const anotherEmp = [
    {
        type: "list",
        message: "Would you like to add another employee?",
        name:"addAnother",
        choices: ["Yes", "No"],
    }
]


// const testPrompt()
// const
// const cal = new ec.Manager("cal", "123", "cp@test.com", "456")

// console.log(cal.officeNumber)
// cal.getName()
// cal.getRole()
// function addAnother(data) {
    
// }

function gatherData() {
    inquirer
    .prompt(empData)
    .then(data => {
        // console.log(data)
        const newMgr = new Manager(data.employee, data.id, data.email, data.office)
        // console.log(newMgr.employee, newMgr.getRole(), newMgr.id, newMgr.email, newMgr.office)
        // console.log(newMgr)
        allMgrData.push(render.renderManger(newMgr.name, newMgr.getRole(), newMgr.id, newMgr.email, newMgr.officeNumber))
        // console.log(allMgrData);
        inquirer
        .prompt(anotherEmp).then(answer => {

            if (answer.addAnother === "Yes") {
                gatherData();
            } else {
                console.log("complete")
            };
        });
    });
};

function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) => {
        err ? console.error(err) : console.log('Success!');
    });
};

function init() {
    // inquirer.prompt(empData).then((data) => {console.log(data)})
    gatherData();
    let writeHtml = render.renderPage();
    writeToFile("./dist/test.html", writeHtml)
}
// chooseEmployee()
// testCase = chooseEmployee()
// testCase
// console.log(testCase.email)
// console.log(chooseEmployee.email)

init()
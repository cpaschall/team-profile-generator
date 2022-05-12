// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
const inquirer = require('inquirer');
const fs = require('fs');
const ec = require('./lib/classes.js')

function generateProfiles(data) {
    return (
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <title>Document</title>
        </head>
        <body>

        <script src="./assets/index.js"></script>
        </body>
        </html>
        `
    )
}
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

const mgrData = [
    {
        type: "input",
        message: "Enter Manager's name: ",
        name: "manager"
    },
    {
        type: "input",
        message: "Enter Manager's ID: ",
        name: "mgrId"
    },
    {
        type: "input",
        message: "Enter Manager's email: ",
        name: "mgrEmail"
    },
    {
        type: "input",
        message: "Enter Manager's office number: ",
        name: "mgrOffice"
    },
]

const engData = [
    {
        type: "input",
        message: "Enter Engineers's name: ",
        name: "engineer"
    },
    {
        type: "input",
        message: "Enter Engineer's ID: ",
        name: "engId"
    },
    {
        type: "input",
        message: "Enter Engineer's email: ",
        name: "engEmail"
    },
    {
        type: "input",
        message: "Enter Engineer's gitHub username: ",
        name: "engGit"
    }
]

const intData = [
    {
        type: "input",
        message: "Enter Intern's name: ",
        name: "intern"
    },
    {
        type: "input",
        message: "Enter Intern's ID: ",
        name: "intId"
    },
    {
        type: "input",
        message: "Enter Intern's email: ",
        name: "intEmail"
    },
    {
        type: "input",
        message: "Enter Intern's school: ",
        name: "intSchool"
    },
]

const anotherEmp = [
    {
        type: "list",
        messgae: "Choose another employee type to add: ",
        name: "empType",
        choices: ["Engineer", "Intern", "None"]
    },
]
// const cal = new ec.Manager("cal", "123", "cp@test.com", "456")

// console.log(cal.officeNumber)
// cal.getName()
// cal.getRole()
function addAnother(data) {
    
}

function chooseEmployee() {
    inquirer
    .prompt(mgrData, anotherEmp)
    .then(data => {
        if(data.empType === "engineer") {
            inquirer.prompt(engData, anotherEmp)
            .then(engData => {

            })
        }
    })
}

function init() {
    chooseEmployee()
    if(employeeData.empType === "Manager") {
        inquirer
        .prompt(
            {
                type:"input",
                message: "Enter Manager's office number: ",
                name: "offNum"
            }
        )
        .then (data => {
            console.log(data.offNum)
        })
    }
}
// chooseEmployee()
// testCase = chooseEmployee()
// testCase
// console.log(testCase.email)
// console.log(chooseEmployee.email)

init()
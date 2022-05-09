// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

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

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        this.getName = () => {
            console.log("Name: " + this.name)
        };
        this.getId = () => {
            console.log("ID: " + this.id)
        };
        this.getEmail = () => {
            console.log("Email: " + this.email)
        };
        this.getRole = () => {
            return "Employee"
        }
    }
}

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        super.getName()
        super.getId()
        super.getEmail()
        this.getRole = () => {
            return "Manager"
        }
    }
}

const cal = new Manager("cal", "123", "cp@test.com", "456")

cal.officeNumber

// Employee classes
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log("Name: " + this.name)
    };
    getId() {
        console.log("ID: " + this.id)
    };
    getEmail() {
        console.log("Email: " + this.email)
    };
    getRole() {
        return "Employee"
    }
};

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber; 
    };
    getRole() {
        return `Manager`
    }
};

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github; 
    };
    getGithub() {
        console.log(this.github)
    };
    getRole() {
        return "Engineer"
    }
};

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school; 
    };
    getSchool() {
        console.log(this.school)
    };
    getRole() {
        return "Intern"
    }
};

module.exports = {
    Employee,
    Manager,
    Engineer,
    Intern
}
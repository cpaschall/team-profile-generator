const Employee = require("../lib/Employee.js")

describe("Employee", () => {
    describe("constructor", () => {
        it("should provide the employee's name, id number and email address when arguments are passed.", () => {
            const name = "Cal";
            const id = 123;
            const email = "cp@test.com";
            const emp = new Employee(name, id, email);
            expect(emp.name).toEqual(name);
            expect(emp.id).toEqual(id);
            expect(emp.email).toEqual(email);
        });
    });
    describe("getName", () => {
        it("should return the value of the 'name' parameter", () => {
            const name = "Cal";
            const id = 123;
            const email = "cp@test.com";
            const expected = "Cal";
            const emp = new Employee(name, id, email);
            const answer = emp.getName();
            expect(answer).toEqual(expected);
        });
    });
    describe("getId", () => {
        it("should return the value of the 'id' parameter", () => {
            const name = "Cal";
            const id = 123;
            const email = "cp@test.com";
            const expected = 123;
            const emp = new Employee(name, id, email);
            const answer = emp.getId();
            expect(answer).toEqual(expected);
        });
    });
    describe("getEmail", () => {
        it("should return the value of the 'email' parameter", () => {
            const name = "Cal";
            const id = 123;
            const email = "cp@test.com";
            const expected = "cp@test.com";
            const emp = new Employee(name, id, email);
            const answer = emp.getEmail();
            expect(answer).toEqual(expected);
        });
    });
    describe("getRole", () => {
        it("should return the value of the employee's role", () => {
            const expected = "Employee";
            const emp = new Employee();
            const answer = emp.getRole();
            expect(answer).toEqual(expected);
        });
    });
});
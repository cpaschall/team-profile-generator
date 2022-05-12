const Intern = require("../lib/Intern.js")

describe("Intern", () => {
    describe("constructor", () => {
        it("should provide the intern's name, id number, email address and school they attend when arguments are passed.", () => {
            const name = "Cal";
            const id = 123;
            const email = "cp@test.com";
            const school = "UPenn";
            const emp = new Intern(name, id, email, school);
            expect(emp.name).toEqual(name);
            expect(emp.id).toEqual(id);
            expect(emp.email).toEqual(email);
            expect(emp.school).toEqual(school);
        });
    });
    describe("getSchool", () => {
        it("should return the value of the 'school' parameter", () => {
            const name = "Cal";
            const id = 123;
            const email = "cp@test.com";
            const school = "UPenn";
            const expected = "UPenn";
            const emp = new Intern(name, id, email, school);
            const answer = emp.getSchool();
            expect(answer).toEqual(expected);
        });
    });
    describe("getRole", () => {
        it("should return the value of the intern's role", () => {
            const expected = "Intern";
            const emp = new Intern();
            const answer = emp.getRole();
            expect(answer).toEqual(expected);
        });
    });
});
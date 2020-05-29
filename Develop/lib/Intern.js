// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id,email,school){
        super(named,id,email)
        this.role = "Intern";
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;

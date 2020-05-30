const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Questions stored in object array
const sheet = [{
    name: "name",
    type: "input",
    message: "What is the employee's name?"
},
{
    name: "id",
    type: "number",
    message: "What is the employee's id number"
},

{
    name: "email",
    type: "input",
    message: "What is the employee's email address?"
},
{
    name: "role",
    type: "list",
    message: "What is the employee's role?",
    choices: [
        "Engineer",
        "Manager",
        "Intern"
    ]
}
]
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
async function outline() {
    let finishResponse = "";
    do {
        try {
            answerA = await inquirer.prompt(sheet)
            let answerB = '';
            
            // If the employee is a manager they will be promoted for the their office number
            if (answerA.role === "Engineer") {
                answerB = await inquirer.prompt([{
                    name: "github",
                    type: "input",
                    message: "What is the Engineer's github username?"
                }])
                // The new employee depending on class is then passed into an object and object is pushed to Employee Array
                const manager = new Engineer(answerA.name, answerA.id, answerA.email, answerB.github)
                employeeArray.push(engineer)

                
                // If the employee is an Engineer they will be promoted for their github username
            } else if (answerA.role === "Manager") {
                answerB = await inquirer.prompt([{
                    name: "officeNumber",
                    type: "input",
                    message: "What is the Manager's office number?"
                
                }])
                // The new employee depending on class is then passed into an object and object is pushed to Employee Array
                const engineer = new Manager(answerA.name, answerA.id, answerA.email, answerB.officeNumber)
                employeeArray.push(manager)
               
               
                // If the employee is an Intern they will be prompted for their college
            } else if (answerA.role === "Intern") {
                answerB = await inquirer.prompt([{
                    name: "school",
                    type: "input",
                    message: "What college does the Intern go to?"
                }])
                // The new employee depending on class is then passed into an object and object is pushed to Employee Array
                const intern = new Intern(answerA.name, answerA.id, answerA.email, answerB.school)
                employeeArray.push(intern)
            }

        } catch (err) {
            return console.log(err)
        }
    
    lastAnswer = await inquirer.prompt([{
            name: "End",
            type: "list",
            message: "Are you considering adding another Employee to this list?",
            choices: [
                "Yes",
                "No"
            ]
        }])

    }while(lastAnswer.finish ==="Yes")

    

    // After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

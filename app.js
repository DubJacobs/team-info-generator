const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");

const outputPath = path.join(__dirname, "./output/team.html")

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            name: "name",
            message: "What is your name?"
        }, {

            name: "id",
            message: "What is your employee id?"
        }, {
            name: "email",
            message: "What is your email?"
        }, {
            name: "officeNumber",
            message: "What is your office number?"
        }
    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
        console.log(answers.id)
        console.log(answers.name)
        console.log(answers.email)
        console.log(answers.officeNumber)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager)
        const result = render([
            manager
        ])
        console.log(result)
        console.log(outputPath)
        fs.writeFile(outputPath, result, "utf8", (err) => {
            if(err) {
                console.log(err) 
                return
            } 
            console.log(done)
        })
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

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

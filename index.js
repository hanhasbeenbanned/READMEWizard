// TODO: Include packages needed for this application
import generateMarkdown from "./utils/generateMarkdown.js";
import inquirer from "inquirer";
import fs from "fs";


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a short description of your project including what it does, why you built it, what you learned, and how you can use it.",
        },
        {
            type: "input",
            name: "install",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use.",
        },
        {
            type: "input",
            name: "contribute",
            message: "If you would like others to contribute to your application, please provide guidelines on how to do so.",
        },
        {
            type: "input",
            name: "test",
            message: "What is a good example of how to run a test for your application?",
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license.",
            choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
        },
        {
            type: "input",
            name: "github",
            message: "List your GitHub username so others can reach you with questions and see your work.",
        },
        {
            type: "input",
            name: "email",
            message: "List your email as an alternative option so others can reach you with questions.",
        },

        {
            type: "input",
            name: "credits",
            message: "If you had any collaborators or anyone you would like to give credit to, please list them here.",
        },

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Success! Your README.md file has been generated"));
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data));
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "inout",
        name: "projectTitle",
        message: "What is the title of your project"
    },
    {
        tyoe: "input",
        name: "prjoectDescription",
        message: "Describe your project",
    },
    {
        type: "input",
        name: "projectInstallation",
        message: "Describe how to use your project",
    },
    {
       

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

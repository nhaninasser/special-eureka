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
        message: "How do you install and run your project",
    },
    {
        type: "input",
        name: "projectUsage",
        message: "Describe how to use your project.",
    },
    {
        type: "list",
        name: "projectLicense",
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "ISC",
            "Mozilla",
            "None",
        ]
    },
    {
        type: "input",
        name: "projectContributors",
        message: "List the people who contributed to this project.",
    },
    {
        type: "input",
        name: "projectTests",
        message: "Describe any tests for your project and how to run them.",
    },
    {
        type: "inout",
        name: "projectIssues",
        message: "What would someone do if they had any issues with your project?",
    },
    {
        type: "input",
        name: "userGithub",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'filename',    
        message: 'What is the name of your file?',
    },
    {
        type: 'input',
        name: 'heading',    
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'requirements',
        message: 'What requirements are necessary for the project?',
    },
    {
        type: 'input',
        name: 'recommendations',
        message: 'Provide any recommendations that may assist the user or enhance the user experience.x',
    },
    {   
        type: 'input',
        name: 'access',
        message: 'Provide any instructions necessary to run the application.',
    },
    {   
        type: 'input',
        name: 'config',
        message: 'Provide any details regarding configurations, permissions and troubleshooting.',
    },
    {   
        type: 'input',
        name: 'comments',
        message: 'Enter any additional comments here',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){
            console.error(err);
        }else{
            console.log('The README.md file has generated successfully.');
        }})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // Generate your README content based on user input
        const readmeContent = ``;
})}

// Function call to initialize app
init();

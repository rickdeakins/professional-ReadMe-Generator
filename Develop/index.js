// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('/Users/rickdeakins/bootcamp/Homework/professional-ReadMe-Generator/Develop/utils/generateMarkdown.js');
const prompt = require('prompt');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'heading',    
        message: 'What is the name of your file?',
    },
    {
        type: 'input',
        name: 'description',    
        message: 'Provide a description of the project.',
    },
    {
        type: 'prompt',
        name: 'license',
        message: 'Choose a license for your document: MIT, Apache License 2.0, GNU General Public License (GPL) , Creative Commons License, BSD 3-Clause License
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide any steps necessary to take for installation.',
    },
    {   
        type: 'input',
        name: 'usage',
        message: 'Share the means of usage for the project.',
    },
    {   
        type: 'input',
        name: 'contributing',
        message: 'Provide any details regarding contributions to the project.',
    },
    {   
        type: 'input',
        name: 'tests',
        message: 'Share any steps taken regarding testing of the project.',
    },
    {   
        type: 'input',
        name: 'questions',
        message: 'Enter any additional questions or comments here',
    },
    {   
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub username here',
    },
    {   
        type: 'input',
        name: 'email',
        message: 'Enter your email address here',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./output/README.md', generateMarkdown(userInput), (err) => {
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
        const readmeContent = generateMarkdown(answers);
        // `# ${answers.heading}
        
        // ## Requirements
        // ${answers.requirements}

        // ## Recommendations
        // ${answers.recommendations}

        // ## Access
        // ${answers.access}

        // ## Configuration
        // ${answers.config}

        // ## Comments
        // ${answers.comments}`;
})}

// Function call to initialize app
init();

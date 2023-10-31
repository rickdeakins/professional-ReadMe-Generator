// TODO: Create a function that returns a license badge based on which license is passed in
const { makeBadge, ValidationError } = require('badge-maker')

function createLicenseBadge(license){
const licenseBadge = {
  'MIT': {label: 'license', message: 'MIT', color: 'blue'},
  'Apache-License-2.0': {label: 'license', message: 'Apache-License-2.0', color: 'green'},
  'GNU General Public License (GPL)': {label: 'license', message: 'GNU General Public License (GPL)', color: 'orange'},
  'Creative Commons License': {label: 'license', message: 'Creative Commons License', color: 'yellow'},
  'BSD 3-Clause License': {label:'license', message: 'BSD 3-Clause License', color: 'red'},
}}
if (license in licenseMappings) {
  const format = licenseMappings[license];
  const svg = makeBadge(format);
  return svg;
}



// If there is no license, return an empty string
function renderLicenseBadge(license) {}


// TODO: Create a function that returns the license link
// If there is no  license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${answers.heading}
        
  ## Description
  ${answers.description}

  ## Table of Contents
  [Installation](#${answers.installation})
  [Usage](#${answers.usage})
  [Contributing](#${answers.contributing})
  [Tests](#${answers.tests})
  [Questions](#${answers.questions})


  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ##License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  ${answers.questions}
  I can be reached at ${answers.email} with any further quesions.
  I can be located on GitHub at ${answers.gitHub}.
  `;
  
}

module.exports = generateMarkdown;

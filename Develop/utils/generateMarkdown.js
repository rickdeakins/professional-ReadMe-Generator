// Import the necessary packages
const { makeBadge } = require('badge-maker');

// Define the license badge function
function createLicenseBadge(license) {
  const licenseBadge = {
    'MIT': { label: 'license', message: 'MIT', color: 'blue' },
    'Apache License 2.0': { label: 'license', message: 'Apache 2.0', color: 'green' },
    'GNU General Public License (GPL)': { label: 'license', message: 'GPL', color: 'orange' },
    'Creative Commons License': { label: 'license', message: 'CC', color: 'yellow' },
    'BSD 3-Clause License': { label: 'license', message: 'BSD 3', color: 'red' },
  };

  if (license in licenseBadge) {
    const format = licenseBadge[license];
    const svg = makeBadge(format);
    return svg;
  }

  // If the license is not found, return an empty string
  return '';
}

// Define the generateMarkdown function
function generateMarkdown(answers) {
  return `# ${answers.heading}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${createLicenseBadge(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}

GitHub: [${answers.gitHub}](https://github.com/${answers.gitHub})
Email: [${answers.email}](mailto:${answers.email})
  `;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
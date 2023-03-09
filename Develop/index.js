// DEPENDENCIES 
const inquirer = require('inquirer');
const fs = require(`fs`);

// DATA 
// Questions to be asked of the user in the prompt function below
const questions = [
    {
        type: 'input',
        message: 'README.md Title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a Description.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter a Table of Contents.',
        name: 'contents'
    },
    {
        type: 'input',
        message: 'Installation Instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter How to Use.',
        name: 'use'
    },
    {
        type: 'list',
        message: 'What License is present?',
        name: 'license',
        choices: ['The Unlicense', 'MIT', 'Mozilla Public License 2.0', 'N/A']
    },
    {
        type: 'input',
        message: 'What are the Key Features?',
        name: 'features'
    },
    {
        type: 'input',
        message: 'How to Contribute?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How to Run Tests.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'How to Contact You?',
        name: 'contact'
    },
    {
        type: 'input',
        message: 'Github Username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Your Email Address?',
        name: 'email'
    },
];

// FUNCTIONS 
// Generates README file
function writeToFile(fileName, data) {
    // create a new file; us fs 
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log(`Success!`))
};

// Generates markdown text 
function genMarkdown(answers) {
    // Generates Badge Images based on License Chosen
    if(answers.license === `The Unlicense`) {
        badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    } else if(answers.license === "MIT") {
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(answers.license === "Mozilla Public License 2.0") {
        badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if(answers.license === "N/A") {
        badge = ``
    };

    // Generates the markdown template w/ placeholders for answers inputs
    const markdown =

`# ${answers.title}

${badge}

## Description
${answers.description}

## Table of Contents
${answers.contents}

## Installation
${answers.installation}    

## Usage
${answers.use}

## License
${answers.license}

## Features
${answers.features}

## How to Contribute
${answers.contribution}   

## Tests
${answers.tests}

## Questions
${answers.contact}

Github: ${answers.github}

Email: ${answers.email}
`

return markdown;
};


function init() {}

// UNSER INTERACTIONS
inquirer
  .prompt([...questions])
  .then((answers) => {
// Need to return the template structure and the answers
// Use markdown function 
        const markdown = genMarkdown(answers);
        writeToFile(`README.md`, markdown);
    })
    .catch((err) => {
        console.log(`Got error!`, err)  
    });

// INITIALIZATION 
init();

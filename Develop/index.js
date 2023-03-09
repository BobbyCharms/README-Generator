// TODO: Include packages needed for this application
// DEPENDENCIES 
const inquirer = require('inquirer');
const fs = require(`fs`);

// TODO: Create an array of questions for user input
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
        choices: ['The Unlicense', 'MIT', 'N/A']
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
        message: 'Open Questions and Contact Information?',
        name: 'questions'
    },
];



// TODO: Create a function to write README file
// FUNCTIONS 
function writeToFile(fileName, data) {
    // create a new file; us fs 
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log(data))
};

// Need a function to generate markdown text from prompt answers 
function genMarkdown(answers) {
    // Fill in badge functionality 
    const markdown =
        `# ${answers.title}
        
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
        
        ## Badges
        ${answers.license}
        
        ## Features
        ${answers.features}
        
        ## How to Contribute
        ${answers.contribution}   

        ## Tests
        ${answers.tests}
        
        ## Questions
        ${answers.questions}
    `
    // Fill in the remaining items 
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
        console.log(`This should be markdown.`, markdown);
    });

// Function call to initialize app
// INITIALIZATION 
init();

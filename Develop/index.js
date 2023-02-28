// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'title',
        message: 'What will be the title of your README?',
        name: 'title',
    },
    {
        type: 'description',
        message: 'What do you want to add to description?',
        name: 'description',
    },
    {
      type: 'table of contents',
      message: 'What will your table of contents have?',
      name: 'table',  
    },
    {
       type: 'installation',
       message: 'What are your installation instructions?',
       name: 'installation',
    },
    {
        type: 'usage',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'license',
        message: 'What is your license?',
        name: 'license',
    },
    {
        type: 'contribution',
        message: 'What are your contribution guidlines?',
        name: 'contribution',
    },
    {
        type: 'tests',
        message: 'What are test intructions?',
        name: 'test',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        //prompt questions
        const response = await inquirer.prompt(questions);
        console.log('Your responses: ', response);
        console.log('Successful!');

        console.log('Generating your README')
        const markdown = generateMarkdown(response);
        console.log(markdown);

        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();

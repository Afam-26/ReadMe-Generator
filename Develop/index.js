const inquirer = require ('inquirer');
const fs = require('fs')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
         
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },

];

inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
    })

// function to write README file
// function writeToFile(fileName, data) {
    

// }
// writeToFile(fileName, data);

// fs.writeFile('readme.md', questions, (err) => {
//     if (err) throw err;
//     console.log('it worked')
// })


// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

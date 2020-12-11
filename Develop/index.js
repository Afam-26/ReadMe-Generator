const inquirer = require ('inquirer');
const util = require('util');
const fs = require('fs');
const writeAsync = util.promisify(fs.writeFile);


let readMeTemplate = ({name, location, github}) => {
    return `Your ${name}
    where are you from ${location} 
    and your ${github}`;
}

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

    //   {
    //     type: 'input',
    //     name: 'fileName',
    //     message: "Enter the name of your README file, e.g. 'Project X README'",
    //     filter: function (value) {
    //     return formatFileName(value);
    //     },
    //   },

      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },

      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
        default: "I don't have LinkedIn account" 
      },
      

];

inquirer
    .prompt(questions)
    .then(answers => {
        // console.log(answers);

        // const {name, location, github} = answers;

        const template = readMeTemplate(answers);

        writeAsync('README.md', template);

        // fs.writeFile('README.md', template, (err) => {
        //     if (err) throw err;
        //     console.log('it worked!');
        // });
    })
    .catch(error => {
        console.log(error);
    });











// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

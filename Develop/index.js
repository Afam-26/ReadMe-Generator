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
        name: 'title', //name before
        message: 'What is the title of project?',
      },

      {
        type: 'input',
        name: 'discription',
        message: 'Please enter discription?',
      },

      {
        type: 'input',
        name: 'installation',
        message: "Please enter in brief requirement for installation?'",
        
      },

      {
        type: 'list',
        name: 'contirbutor',
        message: 'Please enter if there are any contributors',
        choices: ['one', 'two', 'none']
      },

      {
        type: 'list',
        name: 'Licence',
        message: 'Licence name is MIT:',
        default: "MIT",
        choices: ['MIT', 'GNUGPL', 'Apache.']
      },
      
      {
        type: 'input',
        name: 'github',
        message: 'What is your github-username?'
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      }

];

inquirer
    .prompt(questions)
    .then(answers => {
        // console.log(answers);

        // const {name, location, github} Mu= answers;

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

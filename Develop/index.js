const inquirer = require ('inquirer');
const util = require('util');
const fs = require('fs');
const writeAsync = util.promisify(fs.writeFile);


let readMeTemplate = ({title, discription, installation, contributor, licence, github, email}) => {
    
  
  return `# Title
    \`\`\`  
    ${title} 
    \`\`\`

    ![Licence:${licence}](https://img.shields.io/badge/License-${licence}-blue.svg)

    # Discription



    ${discription}

    

    # Table of Contents

    \n* [Installation](#installation)
    \n* [Contributor](#contributor)
    \n* [Licence](#licence)   
    \n* [Github](#github)
    \n* [Email](#email)
    \n* [Contacts](#contacts)
    \n* [Resources](#resources)

    ## Installation 

    ${installation}

    ## Contributor

    ${contributor}

    ## Lincence

    This Project is ${licence}

    [Read more...](https://opensource.org/licenses/Apache-2.0)

    [Read more...](https://opensource.org/licenses/MIT)

    [Read more...](https://opensource.org/licenses/gpl-3.0)

    ## Github

    ${github}

    ## Email 

    ${email}

    ## Contacts 

    Email: ${email}

    Github Username: ${github}

    [Github link](https://afam-26.github.io/ReadMe-Generator/) 

    ## Programming-Language 
    \`\`\`
    Java-Script
    \`\`\`
    
    `;
}

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'What is the title of project?',
      },

      {
        type: 'input',
        name: 'discription',
        message: 'Please enter discription?',
      },

      {
        type: 'input',
        name: 'Installation',
        message: 'Please enter in brief requirement for installation?',
        
      },

      {
        type: 'list',
        name: 'contirbutor',
        message: 'Please enter if there are any contributors',
        choices: ['one', 'two', 'none']
      },

      {
        type: 'list',
        name: 'licence',
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

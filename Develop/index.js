const inquirer = require ('inquirer');
const util = require('util');
const fs = require('fs');
const writeAsync = util.promisify(fs.writeFile);

// Template function
  
let readMeTemplate = (title, discription, installation, contributor, licenseName, licenseUrl, licenseBadge, github, email) => {
    
  
  return `# Title
  \`\`\`  
    ${title} 
  \`\`\`  
    

  [![License](${licenseBadge})](${licenseUrl})    
  
   

  # Discription   

  This is command-line application that accept user input and create a high-quality, professional README.md

 
  ${discription}   
    

  # Table of Contents  

    \n* [Installation](#installation)
    \n* [Usage](#usage)
    \n* [Contributor](#contributor)
    \n* [Licence](#licence)      
    \n* [Contacts](#contacts)
    \n* [Resources](#resources)

    ## Installation 

    1. Clone the repo: https://github.com/Afam-26/ReadMe-Generator.git
    2. Install NPM packages: npm install
    3. ${installation}

    ## Usage

    When a user enter their project title, it will be displayed as the title of the README.
    When a user enter a description, installation, contributions, etc; then, 
    these information is added to the sections of the README assigned for it. 
    The application will be invoked by using the following command: node index.js


    ![video on how to use app](./asset/screen)

    ## Contributor

    ${contributor}

    ## Lincense

    This Project is licensed by ${licenseName}

    [Read more by clicking here!](${licenseUrl})

  
    ## Contacts Info

    Please reach out to me if you have any questions.

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
        name: 'installation',
        message: 'Please enter brief requirement for installation?',
        
      },

      {
        type: 'list',
        name: 'contributor',
        message: 'Please enter if there are any contributors',
        choices: ['one', 'two', 'none']
      },

      {
        type: 'list',
        name: 'license',
        message: 'Please select license type',
        default: "MIT",
        choices: ['MIT license', 'GNUGPL license', 'Apache license']
      },
      
      {
        type: 'input',
        name: 'github',
        message: 'What is your github-username?',
      },

      {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
      }

];

// Array for Licence

const licenseTypes = [

  {
    name: 'MIT license',
    url: 'https://choosealicense.com/licenses/mit/',
    badge: 'https://img.shields.io/badge/license-MIT-green',
  },

  {
    name: 'GNUGPL license',
    url: 'https://opensource.org/licenses/gpl-3.0',
    badge: 'https://img.shields.io/badge/license-GPL%20v%203.0-green',
  },

  {
    name: 'Apache license',
    url: 'https://opensource.org/licenses/Apache-2.0',
    badge: 'https://img.shields.io/badge/license-Apache%202.0-green',
  }

]

inquirer
    .prompt(questions)
    .then(answers => {
        // console.log(answers);

        const {title, discription, installation, contributor, license,  github, email} = answers;             

              
        if(license === "MIT license"){
          licenseName = licenseTypes[0].name ;
          licenseUrl = licenseTypes[0].url ;
          licenseBadge = licenseTypes[0].badge;
        } else if (license === "GNUGPL license"){
          licenseName = licenseTypes[1].name ;
          licenseUrl = licenseTypes[1].url ;
          licenseBadge = licenseTypes[1].badge;
        } else if(license === "Apache license"){
          licenseName = licenseTypes[2].name ;
          licenseUrl = licenseTypes[2].url ;
          licenseBadge = licenseTypes[2].badge;
        };

        const template = readMeTemplate(title, discription, installation, contributor, licenseName, licenseUrl, licenseBadge, github, email);
        writeAsync('README.md', template);
    })
    .catch(error => {
        console.log(error);
    });



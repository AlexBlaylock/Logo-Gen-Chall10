const inquirer = require('inquirer');
const Logo = require('./lib/logo.js');

// used similar inquirer as last challenge.
// used a very similar inquirer prompt in module 9, activity 20 and also for the challenge.
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter 3 characters',
        name: 'text',
    },
    {
        type: 'list',
        message: 'Select a shape for your logo',
        name: 'shapeChoice',
        choices: [
            {
              name: 'circle',
            },
            {
              name: 'square',
            },
            {
              name: 'triangle',
            },
        ]
    },
    {
        type: 'input',
        message: "Enter a color for your logo's text (keyword or hexadecimal)",
        name: 'textColor',
    },
    {
        type: 'input',
        message: "Enter a color for your logo's shape color (keyword or hexadecimal)",
        name: 'shapeColor',
    },
])

.then(answers => {
    const logo = new Logo (
        answers.text,
        answers.shapeChoice,
        answers.textColor,
        answers.shapeColor,
    );

    logo.generateSVG();
});

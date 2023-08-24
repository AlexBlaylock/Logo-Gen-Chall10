const inquirer = require('inquirer');
const Logo = require('./lib/logo.js');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter 3 characters',
        name: 'text',
    },
    {
        type: 'input',
        message: "Enter a color for your logo's text (keyword or hexadecimal)",
        name: 'textColor',
    },
    {
        type: 'checkbox',
        message: 'Select a shape for your logo',
        name: 'shape',
        choices: [
            {
              name: 'Circle',
            },
            {
              name: 'Square',
            },
            {
              name: 'Triangle',
            },
        ]
    },
    {
        type: 'input',
        message: "Enter a color for your logo's shape (keyword or hexadecimal)",
        name: 'shapeColor',
    },
])

.then(answers => {
    const logo = new Logo(
        answers.text,
        answers.textColor,
        answers.shape,
        answers.shapeColor
    );

    logo.generateSVG();

    console.log("Generated logo.svg");
});

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
        type: 'list',
        message: 'Select a shape for your logo',
        name: 'shapeChoice',
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

    console.log("Generated logo.svg");
});

const inquirer = require('inquirer');
const Logo = require('./logo.js');

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter 3 characters',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a color for your logo (keyword or hexadecimal)',
        name: 'text',
    },
    {
        type: 'checkbox',
        message: 'Select a shape for your logo',
        name: '',
    },
])
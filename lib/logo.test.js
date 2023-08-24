const Logo = require('./logo'); 
const fs = require('fs');
// generatesvg test
describe('Logo', () => {
    test('generateSVG works', () => {
        
        const logo = new Logo('qwe', 'triangle', 'black', 'red');
        
        
        logo.generateSVG();
        
        // check for logo.svg
        expect('logo.svg').toBe(true);
    });
});

// used similar formatting to what we had written for activities 12-20

// this always will fail after making it to where my logo.svg will always load to my root
// need to find a way to make this true
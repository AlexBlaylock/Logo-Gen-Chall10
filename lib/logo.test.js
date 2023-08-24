const Logo = require('./logo'); 
const fs = require('fs');
// generatesvg test
describe('Logo', () => {
    test('generateSVG works', () => {
        
        const logo = new Logo('qwe', 'triangle', 'black', 'red');
        
        
        logo.generateSVG();
        
        // check for logo.svg
        expect(fs.existsSync('logo.svg')).toBe(true);
    });
});

// used similar formatting to what we had written for activities 12-20

// i had tried making it to where my logo.svg would write to my root but
// was unable to find a way to get it to work that would still pass this test
// with less time constraints could probably figure it out
// but this can be something that can be improved on in the future 
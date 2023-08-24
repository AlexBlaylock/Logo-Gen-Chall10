const { Triangle, Circle, Square } = require('./shapes');

// test for triangle
// wrap in a double describe because of how i set up my shapes.js
describe('Shapes', () => {
    describe('Triangle', () => {
        test('generates svg for triangle', () => {
            const triangle = new Triangle();
            const svg = triangle.render();
            expect(svg).toContain('<polygon');
            expect(svg).toContain('fill="black"');
        });
        
    })
});

// test for circle
describe('Shapes', () => {
    describe('Circle', () => {
        test('generates svg for circle', () => {
            const circle = new Circle();
            const svg = circle.render();
            expect(svg).toContain('<circle');
            expect(svg).toContain('fill="black"');
        });
    })
});

// square
describe('Shapes', () => {
    describe('Square', () => {
        test('generates svg for square', () => {
            const square = new Square();
            const svg = square.render();
            expect(svg).toContain('<rect');
            expect(svg).toContain('fill="black"');
        });
    })
});
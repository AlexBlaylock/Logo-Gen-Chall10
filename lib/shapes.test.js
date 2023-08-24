const { Triangle, Circle, Square } = require('./shapes');

// test for triangle
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
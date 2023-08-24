// importing
const { Triangle, Circle, Square } = require('./shapes'); 
const fs = require('fs');

class Logo {
    constructor(text, shape, textColor, shapeColor) {
        this.text = text;
        this.shape = shape;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

    }

    createShape() {
        switch (this.shape.toLowerCase()) {
            case 'triangle':
                this.shape = new Triangle();
                break;
            case 'circle':
                this.shape = new Circle();
                break;
            case 'square':
                this.shape = new Square();
                break;
            default:
                throw new Error('Invalid shape type');
        }

        this.shape.setColor(this.shapeColor); // sets color for shape
    }


    generateSVG() {
        this.createShape();
        const shapeSVG = this.shape.render();
        const textSVG = `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="16">${this.text}</text>`;

        const svgCode = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}" />
                ${shapeSVG}
                ${textSVG}
            </svg>`

            // writes / confirms that generation worked
            fs.writeFileSync('logo.svg', svgCode);
            console.log("Generated logo.svg");
    }
}

module.exports = Logo;
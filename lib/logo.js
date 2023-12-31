// importing
const { Triangle, Circle, Square } = require('./shapes'); 
const fs = require('fs');
// const path = require('path'); 
//added this so it always will generate to root over in lib but having testing problems

class Logo {
    constructor(text, shape, textColor, shapeColor) {
        this.text = text;
        this.shape = shape;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

    }
    // as name says
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

        // const outputPath = path.join(__dirname, '..', 'logo.svg'); 
        // added this so it always will generate to root over in lib but having testing problems

        const svgCode = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        ${textSVG}
    </svg>`;



            // console.log('shapeSVG:', shapeSVG);
            // console.log('textSVG:', textSVG);
            // console.log('svgCode:', svgCode);

            // writes / confirms that generation worked
            fs.writeFileSync('logo.svg', svgCode);
            console.log("Generated logo.svg");
    }
}

module.exports = Logo;
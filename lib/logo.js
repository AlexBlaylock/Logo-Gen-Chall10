const Square = require('./shapes')
const Circle = require('./shapes')
const Triangle = require('./shapes')

class Logo {
    constructor(text, shape, textColor, shapeColor) {
        this.text = text;
        this.shape = shape;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

        
    }

    generateSVG() {
    }
}

module.exports = Logo;
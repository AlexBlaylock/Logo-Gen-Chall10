class Shape {
    constructor() {
      this.color = "black"; // default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
        // taken from mini proj 10
      throw new Error("Child classes must implement the 'render' method.");
    }
  }
  
  class Triangle extends Shape {
    render() {
    }
  }
  
  class Circle extends Shape {
    render() {
    }
  }
  
  class Square extends Shape {
    render() {
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square
  };
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
      // points of triangle
      const points = "150,50 100,150 200,150";
      // template literals for easier formatting
      return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      // x and y coords, with a radius of 50.
      const cx = "150";
      const cy = "100";
      const r = "50";

      // template literals for easier formatting
      return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      const x = "100";
      const y = "50";
      const width = "100";
      const height = "100";

      return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.color}" />`
    }
  }
  
  module.exports = { Triangle, Circle, Square };

  
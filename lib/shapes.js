class Shape {
   constructor() {
      this.color = "";
   }
   setColor(color) {
      this.color = color;
   }
}

class Triangle extends Shape {
   display() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
   }
}

class Square extends Shape {
   display() {
      return `<rect x="50" y="40" width="200" height="200" fill="${this.color}" />`;
   }
}

class Circle extends Shape {
   display() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
   }
}

module.exports = { Triangle, Square, Circle };
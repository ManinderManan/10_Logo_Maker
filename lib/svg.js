class SVG {
   constructor() {
      this.text = "";
      this.shape = "";
   }

   setText(name, color) {
      if (name.length > 3) {
         throw new Error("Must not exceed 3 characters!");
      }
      this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${name}</text>`;
   }

   setShape(shape) {
      this.shape = shape.display();
   }
   display() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
   }
}

module.exports = SVG;
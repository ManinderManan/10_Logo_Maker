const {Triangle, Square, Circle} = require('./shapes.js');

// Circle
describe('Circle', () => {
   test('display correctly', () => {
      const shape = new Circle();
      var color = ('blue');
      shape.setColor(color);
      expect(shape.display()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
   });
});

// Square
describe('Square', () => {
   test('display correctly', () => {
      const shape = new Square();
      var color = ('green');
      shape.setColor(color);
      expect(shape.display()).toEqual(`<rect x="50" y="40" width="200" height="200" fill="${color}" />`);
   });
});

// Triangle
describe('Triangle', () => {
   test('display correctly', () => {
      const shape = new Triangle();
      var color = ('red');
      shape.setColor(color);
      expect(shape.display()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`);
   });
});
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Square, Circle } = require("./lib/shapes.js");
const SVG = require("./lib/svg.js");
const {writeFile } = require("fs/promises");


const questions = [
   {
      type: "input",
      message: "Enter up to 3 characters:",
      name: "logoName",
   },
   {
      type: "input",
      message: "Enter a color or hexadecimal code for the text:",
      name: "textColor",
   },
   {
      type: "input",
      message: "Enter a color or hexadecimal code for the background:",
      name: "shapeColor",
   },
   {
      type: "list",
      message: "Choose a shape:",
      name: "logoShape",
      choices: ["Triangle", "Square", "Circle"],
   },
];


function init() {
   inquirer.prompt(questions).then(({logoName, textColor, shapeColor, logoShape}) => {

      let shape;
      switch (logoShape) {
         case "square":
            shape = new Square();
            break;
         case "triange":
            shape = new Triangle();
            break;
         default:
            shape = new Circle();
            break;
   }
   shape.setColor(shapeColor);
   let svg = new SVG();
   svg.setText(logoName, textColor);
   svg.setShape(shape);
   return writeFile("logo.svg", svg.display());
   })
   .then(() => {
      console.log("Successfully generated logo.svg")
   })
   .catch((err) => {
      console.log(err);
   })
}

init();
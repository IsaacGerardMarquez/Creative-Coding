// Declaring the variables for both the image and mouse coordinates.
var img, x, y;

function preload() {
//  Preloading the images before the setup.
img = loadImage("Lantern2.jpg");
}

function setup() {
// Creating a canvas with a width 600 and a height 659.
createCanvas (600, 659);

// Setting the background color to "0" or "black".
background(0);
  
// Used to disable any strokes for shapes.
noStroke();
}

function draw() {
  
// Used to clear the background on each of the frame.
background(0);

// Updating the x coordinate with the position of the mouse.
x = mouseX;
  
// Updating the y coordinate with the position of the mouse.
y = mouseY;
  
// Drawing the image at position "(0, 0)".
image( img, 0, 0);
  
// Use this to get the color of the pixel at the position of the mouse.
var c = get(x, y); // Getting the value of mouse interaction.

// Used to set the fill color to the color obtained from the pixel.
fill(c); // Depending on variable C
  
// Drawing a rectangle at the position of the mouse with size 50x50.
rect (x, y, 50, 50);
}
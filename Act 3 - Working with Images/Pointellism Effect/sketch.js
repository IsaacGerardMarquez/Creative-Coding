// Declaring the variables for both the image and coordinates.
var img, x, y;
function preload() {
  
// Preloading the image named "Sunny.jpg" before setup.
img = loadImage("Sunny.jpg");
}

function setup() {
// Creating a canvas that fits the entire window.
createCanvas (windowWidth, windowHeight);
  
// Setting the background color to "0" or "black".
background(0);
  
// Used to disable any strokes for shapes.
noStroke();
}

function draw() {
  
// Generating random squares in x-coordinate within canvas width.
x = random(width);

// Generating random squares in y-coordinate within canvas width.
y = random(height);
  
// Getting the color of the pixel at the random position from the image.
var c = img.get(x, y);

// Setting the fill color with transparency based on the pixel color.
fill(c[0], c[1], c[2], 50); // 20 - Transparency

// Drawing squares at different random positions with a fixed size.
rect(x, y, 30, 30);
}
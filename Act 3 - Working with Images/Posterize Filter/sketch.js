// Creating a variable to store the image.
var img;
function preload() {

// Preloading the image named "Blue.jpg" before setup.
img = loadImage("Blue.jpg");
}

function setup () {

// Creating a canvas that spans the entire window.
createCanvas (windowWidth, windowHeight);
  
// Resizing the image to match the canvas dimensions.
img.resize(windowWidth, windowHeight);

// Setting the background color to "0" or "black".
background(0);
}

function draw() {

// Clear the background on each frame
background(0);

// Draw the image at position (0, 0)
image(img, 0, 0);

// Map the mouseX position to a range of values for the posterize effect
var v = map(mouseX, 0, width, 2, 20);
  
// Apply the POSTERIZE filter to the image with the mapped value
filter(POSTERIZE, v);
}
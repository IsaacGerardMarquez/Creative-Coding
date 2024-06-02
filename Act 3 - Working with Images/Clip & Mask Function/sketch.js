let img;

function preload(){
  // Preload the image
  img = loadImage("Panda2.jpg");
}

function setup() {
  // Creating a canvas with a width of 700 and a height of 700.
  createCanvas(700, 700);
  
  // Setting the background color to a pale blue.
  background(190, 220, 250);
  
  // Image inside shape using clip function - only works with one shape.
  img.resize(200, 200); // Resizing the size of the image.
  
  // Creating a sub-canvas for the clipped image.
  let cnv7 = createGraphics(200, 200);
  
  // Drawing a rounded rectangle as the clipping shape.
  cnv7.rect(10, 10, 180, 180, 20);
  
  // Apply a clip to the sub-canvas
  cnv7.canvas.getContext("2d").clip();
  
 // Place the resized image inside the clipped region.
  cnv7.image(img, 0, 0); // Positioning the image .
  
  // Put the sub-canvas inside the main canvas.
  image(cnv7, 350, 225); 
  
  // Image inside shape using mask function - works with multiple shapes.
  img.resize(200, 200); // Resizing the size of the image.
  
  // Create another sub-canvas.
  let cnv5 = createGraphics(200, 200);
  
  // Drawing a circle as the masking shape
  cnv5.circle(100, 0, 200); 
  
  // Applying mask to the image using the circle drawn on the sub-canvas
  img.mask(cnv5);
  
  // Putting the masked image inside the main canvas 
  image(img, 300, 25); // Putting the masked image inside the main canvas 
}
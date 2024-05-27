// I defined a variable named "word" and assigned a string value that is "Bath Spa University".
var word = "Bath Spa University"

// I declared three variables, which are font1, font2, and font3.
var font1, font2, font3;

// I used the function preload to preload the external files, which are three different font files.
function preload(){
  font1 = loadFont ("ProtestRevolution-Regular.ttf");
  font2 = loadFont ("Rock3D-Regular.ttf");
  font3 = loadFont ("Chokokutai-Regular.ttf");
}

function setup() {
  // I created a canvas that has a width of 1520 pixels and a height of 750 pixels.
  createCanvas(1520, 750);
  
  // I set the background color of the canvas to a light beige color, which has the RGB colors 232, 220, 202.
  background(232, 220, 202);
  
  // I set the color of the text to black, which has the RGB colors 1, 2, 3.
  fill(1, 2, 3);
  
  // I set the font to be used and the size of the text.
  textFont (font2, 100);
  
  // I set the alignment of the text in the center.
  textAlign (CENTER);
  
  // To display the text that is stored in the variable named "word" at the center of the canvas.
  text (word, width/2, height/2);
}
//Variables  are declared and can be access in any part of the code but let are only available inside the block where they're defined. 
//clip - allows to hide all parts of the bottom

// Function setup() is called once when the program starts.
function setup() {
  // I created a canvas with windowWidth and windowHeight so that the canvas would fit the entire window.
  createCanvas(windowWidth, windowHeight);

  // I set the background color to a light blue.
  background(190, 220, 250);

  // This sets the text and box dimensions.
  const boxWidth = 1050;
  const boxHeight = 250;
  const textSizeValue = 100;

  // This calculates the positions to center the text and the box.
  const boxX = (width - boxWidth) / 2;
  const boxY = (height - boxHeight) / 2;
  const textX = boxX + 50;
  const textY = boxY + boxHeight / 2 + textSizeValue / 2;

  // Showing drawings inside the text using both clip and erase functions.
  // The following lines are to used to draw what is behind the text:
  // I created a graphics buffer with the same size as the canvas.
  const cnv4 = createGraphics(width, height);

  // This gets the 2D context of the graphics buffer.
  const ctx2 = cnv4.canvas.getContext("2d");

  // I draw a white rectangle.
  cnv4.rect(boxX, boxY, boxWidth, boxHeight);

  // I applied a clip function to the graphics buffer.
  ctx2.clip();

  // This is to display the graphics buffer on the canvas.
  image(cnv4, 0, 0);

  
  // The following of lines are for drawing the text:
  // I created another graphics buffer with the same size as the canvas.
  const cnv3 = createGraphics(width, height);

  // I set the fill color of the rectangle to a darker shade of blue.
  cnv3.fill(98, 141, 189);

  // This is to draw a blue rectangle.
  cnv3.rect(boxX, boxY, boxWidth, boxHeight);

  // I set an erase mode to draw the text on the blue rectangle.
  cnv3.erase();

  // I set the text size to 100.
  cnv3.textSize(textSizeValue);

  // This is to display the text which is "Creative Coding 101" at position (textX, textY).
  cnv3.text('Creative Coding 101', textX, textY);

  // This is to display the graphics buffer on the canvas.
  image(cnv3, 0, 0);
}

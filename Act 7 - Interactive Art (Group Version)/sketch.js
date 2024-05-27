// I created and defined variables.
let movingLines = []; // I created an array to store the moving lines positions.
let numberOfLines = 1000; // To store the number of moving lines, which in this case is 1000.
let noiseScaleFactor = 0.01 / 2; // This is the noise scale factor.
let colorOfLines; // To store the color of the moving lines.
let textFontFamilies = []; // I created another array to store the font file paths.
let currentSelectedFontIndex = 0; // This is an index of the currently selected font
let currentSelectedFont; // A variable to store the currently selected font.

// I used the preload function to load the fonts.
function preload() {
  textFontFamilies = ['Jersey10-Regular.ttf', 'BlackOpsOne-Regular.ttf','Chokokutai-Regular.ttf', 'AllertaStencil-Regular.ttf', 'Amita-Bold.ttf']; // I created another array to store the font file paths.
}

// I used this setup function to initialize the canvas and variables.
function setup() {
  createCanvas(windowWidth, windowHeight);
  movingLines = Array.from({ length: numberOfLines }, () => createVector(random(width), random(height)));// This line is to initialize the  moving lines.
  colorOfLines = color(255); // I set default color of the moving lines to white.
  stroke(255); // I set default stroke color of the moving lines to white.
  clear(); // This line is to clear the canvas.
  textAlign(CENTER, CENTER); // This line is to center align the text.
  textSize(70); // I set the text size to 70.
  currentSelectedFont = loadFont(textFontFamilies[currentSelectedFontIndex]);
}

// I used the draw fuction to update and display the moving lines and the text.
function draw() {
  background(0, 10); // To create a semi-transparent black background.
  stroke(colorOfLines); // I added a stroke color to the moving lines.
  movingLines.forEach(p => { // To update and display the moving lines.
    let angleOffset = noise(p.x * noiseScaleFactor, p.y * noiseScaleFactor, frameCount * noiseScaleFactor * noiseScaleFactor);
    let a = TWO_PI * angleOffset; 
    p.add(cos(a), sin(a));
    if (!onScreen(p)) {
      p.set(random(width), random(height));
    }
    point(p.x, p.y);
  });

  // To add an outline to the text.
  let offsetX = [-2, 0, 2];  // This is the outline offsets in x direction.
  let offsetY = [-2, 0, 2];  // This is the outline offsets in y direction.
  let outlineColor = color(50); // To set the color of the outline.
  for (let i = 0; i < offsetX.length; i++) {
    for (let j = 0; j < offsetY.length; j++) { 
      if (i != 1 || j != 1) { // To skip the center text (original)
        fill(outlineColor); // I set a fill color to outline the color.
        textFont(currentSelectedFont); // This is to set the text's font.
        text("Welcome to Bath Spa University", width / 2 + offsetX[i], height / 2 + offsetY[j]); // To display the text with its outline.
      }
    }
  }

  // To display the text in the center.
  fill(255); // I set the fill color to white.
  textFont(currentSelectedFont); // This is to set the text's font.
  text("Welcome to Bath Spa University", width / 2, height / 2); // To display the text in the center.
}

// I used the mousePressed function to change the moving line's color when the user clicks their mouse.
function mousePressed() {
  colorOfLines = color(random(255), random(255), random(255)); // To set random color for the moving lines.
}

// I used the mouseReleased function to reset the noise seed when the user releases the mouse click.
function mouseReleased() {
  noiseSeed(millis()); // I set the noise seed based on the current time.
}

// I used the withinTheScreen Function to determine if a point is within the canvas boundaries.
function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}


// I used this function to change the text's font when the user clicks their mouse.
function mouseClicked() {
  currentSelectedFontIndex = (currentSelectedFontIndex + 1) % textFontFamilies.length; // This is to cycle through the font array.
  currentSelectedFont = loadFont(textFontFamilies[currentSelectedFontIndex]); // This line is to load selected font.
}
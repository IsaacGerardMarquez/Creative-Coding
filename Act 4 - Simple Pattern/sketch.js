function setup() {
  
  // I created a canvas that has a width of 1510 and a height of 400.
  createCanvas(1510, 880);
  
  // I set the background color of the canvas to a light beige color, which has the RGB colors 232, 220, 202.
  background(232, 220, 202);
}

function draw() {
  
  // I set the number of repetitions for creating the pattern to 1.
  let numRepetitions = 1;

  // For Loop
  // I used a "for loop" for creating the pattern.
  for (let i = 0; i < numRepetitions; i++) {
    
    // I then "randomized" the starting point and length of the line.
    let startX = random(width);
    let startY = random(height);
    let endX = startX + random(-15, 10);
    let endY = startY + random(-15, 10);

    // To generate a random color using RGB between 0 and 255.
    let randomColor = color(random(255), random(255), random(255));

    // If Statement
    // To randomly add shapes (either circles or quadrilaterals) at the start and end points of the line.
    if (random() > 0.5) {
      noStroke();
      fill(randomColor);
      
      // To draw an ellipse at the starting point. The ellipse will have a width of 75 pixels and a height of 50 pixels.
      ellipse(startX, startY, 75, 50);
    }
    
    // To randomly add shapes (either circles or quadrilaterals) at the start and end points of the line.
    if (random() > 0.5) {
      noStroke();
      fill(randomColor);
      
      // To draw a quadrilateral at the ending point. It has four sets of coordinates.
      quad(endX, endY, endX + 45, endY, endX + 15, endY + 75, endX, endY + 15);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // This is to draw the moon craters in the background.
  drawMoonCraters();
  
  // Apply scale to enlarge the alien
  let scaleFactorEnlargeAlien = 2.5;
  scale(scaleFactorEnlargeAlien);

  // Floating Pad
  fill("#8a3589");
  ellipse(200, 290, 180, 60);

  // This resets the transformation matrix to prevent further scaling.
  resetMatrix();

  // This applies the scale factor again to the remaining drawing.
  scale(scaleFactorEnlargeAlien);

  // Right Ear
  fill("#F44336");
  ellipse(250, 60, 40, 40);
  
  // Middle Ear
  ellipse(200, 40, 40, 40);
  
  // Left Ear
  ellipse(150, 60, 40, 40);
  
  // Head
  fill("#0BBD47"); // Green color
  ellipse(200, 90, 100, 100);
  
  // Left Eyeball
  fill(255);
  ellipse(170, 80, 20, 20);
  
  // Left Iris
  fill(0);
  ellipse(170, 84, 10, 10);
  
  // Middle Eyeball
  fill(255);
  ellipse(200, 80, 20, 20);
  
  // Middle Iris
  fill(0);
  ellipse(200, 84, 10, 10);
  
  // Right Eyeball
  fill(255);
  ellipse(230, 80, 20, 20);
  
  // Right Iris
  fill(0);
  ellipse(230, 84, 10, 10);
  
  // Mouth
  fill(0);
  ellipse(200, 110, 60, 10);
  
  // Set fill color for the body
  fill("#0BBD47"); // Green color
  
  // Move the origin to a different position
  translate(200, 200);
  
  // Begin the shape
  beginShape();
  
  // Define vertices and bezier control points
  vertex(-100, 0);
  bezierVertex(-100, -100, 100, -100, 100, 0); // Upper body curve
  bezierVertex(100, 100, -100, 100, -100, 0); // Lower body curve
  
  // End the shape
  endShape(CLOSE);
  
  // Left Arm
  fill("#F44336");
  ellipse(90, 10, 50, 100);
  
  // Right Arm
  fill("#F44336");
  ellipse(-90, 10, 50, 100);
  
  // Tummy
  fill("#F44336");
  ellipse(5, 10, 100, 50);

  fill("#F44336");
  
  // Draw first rotated ellipse
  push();
  rotate(-45); // Rotate the coordinate system by 45 degrees
  ellipse(100, 100, 90, 20);
  pop();

  // Draw second rotated ellipse
  push();
  rotate(45); // Rotate the coordinate system by -45 degrees
  ellipse(-100, 100, 90, 20);
  pop();
}

function drawMoonCraters() {
  fill(200); // Set the color of the craters to a light gray color.
  noStroke(); // Remove the strokes or outlines.
  
  // Draw the multiple craters. (X, Y, Width, Height)
  ellipse(10 * 3, 300 * 3, 100 * 3, 30 * 3);
  ellipse(80 * 3, 100 * 3, 100 * 3, 40 * 3);
  ellipse(100 * 3, 250 * 3, 60 * 3, 20 * 3);
  ellipse(350 * 3, 90 * 3, 90 * 3, 35 * 3);
  ellipse(350 * 3, 280 * 3, 55 * 3, 15 * 3);
  ellipse(390 * 3, 390 * 3, 85 * 3, 15 * 3);
}

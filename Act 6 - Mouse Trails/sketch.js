// These are the variables:
var ShootingStars = 55; // This variable stores the number of shooting stars.
var BackgroundStars = 25; // This variable stores the number of the stars in the background.

function setup() {
  createCanvas(windowWidth, windowHeight); // I set the canvas to fill the entire window.
  background(0); // I set the color of the background to black
  noStroke(); // To remove any stroke or outline for my drawing.
}

function draw() {
  background(0, 15); // I added a transparent effect for the background.

  
  // This is for drawing the stars in the background.
  for (var i = 0; i < BackgroundStars; i++) {
    
    // This is to randomize the position of the stars in the background.
    var BackgroundStarsX = random(width); 
    var BackgroundStarsY = random(height);
    
    // I made the stars in the background to have random sizes that ranges from 1 to 5.
    var size = random(1, 5); 
    // I set the color of the stars in the background to white.
    fill(255); 
    // To finally draw the stars in the background.
    ellipse(BackgroundStarsX, BackgroundStarsY, size, size);
  }

  // This is to draw the shooting stars that follows the mouse cursor.
  var ShootingStarsSizeX = mouseX;
  var ShootingStarsSizeY = mouseY;
  var ShootingStarsSize = 120;
  fill(255, 255, 0, 190); // This is to add a transparency effect to the shooting stars.
  // This is to call the function to draw the shooting stars.
  DrawingShootingStars(ShootingStarsSizeX, ShootingStarsSizeY, ShootingStarsSize, ShootingStarsSize / 2.5, 5); // The center of the star, the outer radius of the circle, the inner radius of the circle, and the number of points of the circle.
}

// This is the last function to draw the star.
function DrawingShootingStars(x, y, radiusNumber1, radiusNumber2, numberOfPointsForEachStar) {
  // This calculates the angle between each point.
  var angleOfShootingStars = TWO_PI / numberOfPointsForEachStar;
  var halfAngleOfShootingStars = angleOfShootingStars / 2;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angleOfShootingStars) {
    // This calculates the outer point of the star.
    var OuterStar = x + cos(a) * radiusNumber2;
    var InnerStar = y + sin(a) * radiusNumber2;
    vertex(OuterStar, InnerStar);
    // This calculates the inner point of the star.
    OuterStar = x + cos(a + halfAngleOfShootingStars) * radiusNumber1;
    InnerStar = y + sin(a + halfAngleOfShootingStars) * radiusNumber1;
    vertex(OuterStar, InnerStar);
  }
  endShape(CLOSE);
}

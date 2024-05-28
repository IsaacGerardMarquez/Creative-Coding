function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(232, 220, 202);
  
  // A variable that would be used to enlarge the size of the car.
  let scaleFactorToEnlarge = 3.3;

  // Body
  fill(255, 0, 0);
  rect(150 * scaleFactorToEnlarge, 150 * scaleFactorToEnlarge, 170 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge);
  rect(240 * scaleFactorToEnlarge, 100 * scaleFactorToEnlarge, -90 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge);
  
  // Back Body
  fill(255, 195, 0);
  rect(240 * scaleFactorToEnlarge, 120 * scaleFactorToEnlarge, 80 * scaleFactorToEnlarge, 30 * scaleFactorToEnlarge);
  
  // Windshield
  fill(73, 138, 199);
  rect(150 * scaleFactorToEnlarge, 100 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge);
  
  // Rocker Panel
  fill(129, 133, 137);
  rect(150 * scaleFactorToEnlarge, 195 * scaleFactorToEnlarge, 170 * scaleFactorToEnlarge, 10 * scaleFactorToEnlarge); 
  
  // Wheels
  fill(0, 0, 0);
  ellipse(280 * scaleFactorToEnlarge, 200 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge);
  ellipse(200 * scaleFactorToEnlarge, 200 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge, 50 * scaleFactorToEnlarge);
  
  // Wheel Rims
  fill(129, 133, 137);
  ellipse(280 * scaleFactorToEnlarge, 200 * scaleFactorToEnlarge, 20 * scaleFactorToEnlarge, 20 * scaleFactorToEnlarge);
  ellipse(200 * scaleFactorToEnlarge, 200 * scaleFactorToEnlarge, 20 * scaleFactorToEnlarge, 20 * scaleFactorToEnlarge);
  
  // Headlights
  fill(255, 195, 0);
  rect(150 * scaleFactorToEnlarge, 160 * scaleFactorToEnlarge, 15 * scaleFactorToEnlarge, 15 * scaleFactorToEnlarge);
  
  // Tail lights
  fill(255, 195, 0);
  rect(310 * scaleFactorToEnlarge, 185 * scaleFactorToEnlarge, 10 * scaleFactorToEnlarge, 10 * scaleFactorToEnlarge);

  // Strobe Lights
  fill(255, 195, 0);
  rect(210 * scaleFactorToEnlarge, 85 * scaleFactorToEnlarge, 15 * scaleFactorToEnlarge, 15 * scaleFactorToEnlarge);

  // Road
  fill(54, 69, 79);
  rect(1 * scaleFactorToEnlarge, 226 * scaleFactorToEnlarge, 470 * scaleFactorToEnlarge, 60 * scaleFactorToEnlarge); 
}
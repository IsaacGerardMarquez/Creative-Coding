// These are the variables.
let StarWarsMusic; // This stores the music to be used for the audio visualizer.
let amplitude; // This stores the amplitude object.
let playOrpause = false; // This stores the play or pause state.
let spaceStarsBackground = []; // This stores the array for the star objects.

// This preloads all the assets before setup.
function preload() {
  // This preloads the music titled "Star-Wars-Main-Theme-Full.mp3".
  StarWarsMusic = loadSound('Star-Wars-Main-Theme-Full.mp3');
}

// This is to initialize both the canvas and variables.
function setup() {
  // I set the canvas to span the entire width and height.
  createCanvas(windowWidth, windowHeight);
  // I set the angle mode to Degrees.
  angleMode(DEGREES);
  
  // This is to create a new Amplitude object.
  amplitude = new p5.Amplitude();

  // This is for the stars in the background. I made this to complete the space theme of the art.
  // This is to set the number of stars in the background. This is also to initialize the stars and push them to array.

  for (let iterateVariable = 0; iterateVariable < 450; iterateVariable++) {
    spaceStarsBackground.push(new dotsStarBackgroundCharacteristics());
  }
}

// This is to draw the space themed background.
function draw() {
  drawSpaceBackground();
  strokeWeight(1);
  noFill();

  // This is to center the subject in the canvas.
  translate(width / 2, height / 2);

  // This is to get the amplitude level.
  let amplitudeLevel = amplitude.getLevel();

  
  // This is to draw the first set of shape.
for (var setIndexOfShapesOne = 0; setIndexOfShapesOne < 5; setIndexOfShapesOne++) {
  // This is the color of the shape.
  stroke(202, 240, 248);

    // Based on the framecount and amplitude, it calculates the radius and vertex positions. This is used to draw the shape.
    beginShape();
    for (var iterateVariableOne = 0; iterateVariableOne < 359; iterateVariableOne++) {
      var shapeOneminimumRadius1 = map(sin(frameCount), 15, 75, 10, 450);
      var shapeOnmaximumRadius1 = map(sin(frameCount * 2), 30, -150, 65, 80);
      var shapeOnminimumRadius2 = map(sin(frameCount / 2), 15, 100, 120, 50);
      var shapeOnmaximumRadius2 = map(sin(frameCount), -95, 1, 50, -200);

      var radiusOfShape1ForOne = map(sin(iterateVariableOne * 5), -5, 1, shapeOneminimumRadius1, shapeOnmaximumRadius1);
      var radiusOfShape2 = map(sin(iterateVariableOne * 15 + 30), -1, 1, shapeOnminimumRadius2, shapeOnmaximumRadius2);
      var mainRadius = radiusOfShape1ForOne + radiusOfShape2 - setIndexOfShapesOne * 3 + amplitudeLevel * 1200;
      var xVertexForShapeOne = mainRadius * cos(iterateVariableOne);
      var yVertexForShapeOne = mainRadius * sin(iterateVariableOne);
      vertex(xVertexForShapeOne, yVertexForShapeOne);
    }
    endShape(CLOSE);
  }

  // This is to draw the second set of shape.
  for (var setIndexOfShapesTwo = 0; setIndexOfShapesTwo < 10; setIndexOfShapesTwo++) {
    // This is the color of the shape.
    stroke(144, 224, 239);

      // Based on the framecount and amplitude, it calculates the radius and vertex positions. This is used to draw the shape.
    beginShape();
    for (var iterateVariableTwo = 0; iterateVariableTwo < 359; iterateVariableTwo++) {
      var shapeTwominimumRadius1 = map(sin(frameCount), 15, 75, 10, 450);
      var shapeTwomaximumRadius1 = map(sin(frameCount * 2), 30, -150, 65, 80);
      var shapeTwominimumRadius2 = map(sin(frameCount / 2), 15, 100, 120, 50);
      var shapeTwomaximumRadius2 = map(sin(frameCount), -95, 1, 50, -200);

      var radiusOfShape1ForTwo = map(sin(iterateVariableTwo * 4), -5, 1, shapeTwominimumRadius1, shapeTwomaximumRadius1);
      var radiusOfShape2ForTwo = map(sin(iterateVariableTwo * 8 + 90), -1, 5, shapeTwominimumRadius2, shapeTwomaximumRadius2);
      var mainRadiusForTwo = radiusOfShape1ForTwo + radiusOfShape2ForTwo - setIndexOfShapesTwo * 10 + amplitudeLevel * 500;
      var xVertexForShapeTwo = mainRadiusForTwo * cos(iterateVariableTwo);
      var yVertexForShapeTwo = mainRadiusForTwo * sin(iterateVariableTwo);
      vertex(xVertexForShapeTwo, yVertexForShapeTwo);
    }
    endShape(CLOSE);
  }

  // This is to draw the third set of shape.
  for (var setIndexOfShapesThree = 0; setIndexOfShapesThree < 15; setIndexOfShapesThree++) {
    // This is the color of the shape.
    stroke(0, 180, 216);

    // Based on the framecount and amplitude, it calculates the radius and vertex positions. This is used to draw the shape.
    beginShape();
    for (var iterateVariableThree = 0; iterateVariableThree < 359; iterateVariableThree++) {
      var shapeThreeminimumRadius1 = map(sin(frameCount), 15, 75, 10, 450);
      var shapeThreemaximumRadius1 = map(sin(frameCount * 2), 30, -150, 65, 80);
      var shapeThreeminimumRadius2 = map(sin(frameCount / 2), 15, 100, 120, 50);
      var shapeThreemaximumRadius2 = map(sin(frameCount), -95, 1, 50, -200);

      var radiusOfShape1ForThree = map(sin(iterateVariableThree * 5), -5, 1, shapeThreeminimumRadius1, shapeThreemaximumRadius1);
      var radiusOfShape2ForThree = map(sin(iterateVariableThree * 10 + 90), 5, 1, shapeThreeminimumRadius2, shapeThreemaximumRadius2);
      var mainRadiusForThree = radiusOfShape1ForThree + radiusOfShape2ForThree - setIndexOfShapesThree * 10 + amplitudeLevel * 800; // Add amplitude level to r
      var xVertexForShapeThree = mainRadiusForThree * cos(iterateVariableThree);
      var yVertexForShapeThree = mainRadiusForThree * sin(iterateVariableThree);
      vertex(xVertexForShapeThree, yVertexForShapeThree);
    }
    endShape(CLOSE);
  }



  // This updates the position of the stars and then displaying them.
  for (let dotsStarBackground of spaceStarsBackground) {
    dotsStarBackground.update();
    dotsStarBackground.display();
  }
}

// This is to draw the space background. I made the color of the background to black to match the space theme.
function drawSpaceBackground() {
  background(0);
}

// This handles the mouse pressed events.
function mousePressed() {
  if (playOrpause) {
    StarWarsMusic.pause(); // This pauses the music.
  } else {
    StarWarsMusic.play(); // This plays the music.
  }
  
  // This is the toggle for the variable named "playOrpause".
  playOrpause = !playOrpause; 
}

// These sets the characteristics or properties of the stars in the background.
class dotsStarBackgroundCharacteristics {
  constructor() {
    this.xVertex = random(-width / 2, width / 2);
    this.yVertex = random(-height / 2, height / 2);
    this.sizeOfDotsStarBackground = random(1, 3);
    this.speedOfDotsStarBackground = random(1, 2);
    this.directionOfDotsStarBackground = random(TWO_PI); // New variable to control direction
}

  // This updates the positioning of the stars in the background.
  update() {
    this.xVertex += cos(this.directionOfDotsStarBackground) * this.sizeOfDotsStarBackground;
    this.yVertex += sin(this.directionOfDotsStarBackground) * this.sizeOfDotsStarBackground;

    if (this.xVertex < -width / 2) {
      this.xVertex = width / 2;
    } else if (this.xVertex > width / 2) {
      this.xVertex = -width / 2;
    }

    if (this.yVertex < -height / 2) {
      this.yVertex = height / 2;
    } else if (this.yVertex > height / 2) {
      this.yVertex = -height / 2;
    }
  }

  // This displays the stars in the backround.
  display() {
    stroke(255);
    strokeWeight(2);
    point(this.xVertex, this.yVertex);
  }
}

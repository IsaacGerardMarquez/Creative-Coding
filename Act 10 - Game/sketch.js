// These are all the variables used:
let bouncyBasketballGameState = 'title'; // This is the variable that would track the game state, which includes the title screen, the in game screen, and the game over screen.
let basketBall; // This is the variable that would store the "basketball".
let basketBallHoop; // This is the variable that would store the "basketball hoop".
let userScore = 0; // This is the variable that would to store the user's score.
let basketBallShooting = false; // This variables determines if the basketball is being shot.
let gameTimer = 10; // This sets the initial timer value to 10.
let bouncyBasketballStartTime; // This variable stores the start time of the game.
let basketballHoopMovementSpeed = 10; // This sets the initial speed of the hoop to 10.
let explosionEffectParticles = []; // An array that would store the explosion effect particles.
let basketballImageBackground; // This is the variable for the background image.
let bouncyBasketballGameMusic; // This is the variable for background music.

function preload() {
  // This is to load the background image of the game.
  basketballImageBackground = loadImage('ball.jpg');
  soundFormats('mp3', 'ogg');
  // This is to load the background music for the game.
  bouncyBasketballGameMusic = loadSound('BackgroundMusic.mp3');
}

function setup() {
  // This is to create a canvas that would fit the size of the window.
  createCanvas(windowWidth, windowHeight);
  
  // This is to create a new basketball.
  basketBall = new newbasketBall();
  
  // This is to create a new basketball hoop.
  basketBallHoop = new newbasketBallHoop();
  
  // Play the background music in a loop
  bouncyBasketballGameMusic.loop();
}

function draw() {
  // This is to determine the current state of the game.
  if (bouncyBasketballGameState === 'title') {
    drawTitleScreen(); // This draws the title screen if the game state is in "title".
  } else if (bouncyBasketballGameState === 'play') { // This draws the game if the game state is in "play".
    drawBouncyBasketballGame();
  } else if (bouncyBasketballGameState === 'end') { // This draws the game over screen if the game state is in "end".
    drawGameOverScreen();
  }
}

function drawTitleScreen() {
  // This is to draw or use an image as background image for the title screen.
  image(basketballImageBackground, 0, 0, width, height);

  // This is to draw and style the text for the title.
  textSize(150);
  fill(255, 165, 0);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  stroke(0);
  strokeWeight(5);
  text('Bouncy Basketball', width / 2, height / 2 - 150);
  
  // This is to draw and style the text for the game instructions.
  textSize(30);
  text('Press "ENTER" to Start the Game', width / 2, height / 2);
  textSize(20); // Adjust text size for instructions
  text('(Use the "LEFT" and "RIGHT" ARROW keys to move the ball, and press the "SPACEBAR" to shoot.)', width / 2, height / 2 + 40);
  text('Each successful shot increases your score and adds 3 seconds to the timer, while the hoop speeds up.', width / 2, height / 2 + 70);
  text('The game starts with a 10-second timer, and your goal is to score as many points as possible before time runs out.', width / 2, height / 2 + 100);

  // This transitions the user to the 'play' state when they press the "ENTER" key.
  if (keyIsDown(ENTER)) {
    bouncyBasketballGameState = 'play';
    bouncyBasketballStartTime = millis();
    bouncyBasketballGameMusic.play(); // This plays the background music when the user press the "ENTER" key.
  }
}

function drawBouncyBasketballGame() {
  drawBasketballCourt(); // This is to draw the basketball court background.

  basketBall.update(); // This updates the basketball's position and state.
  basketBall.show(); // This is to display the basketball.

  basketBallHoop.update(); // This updates the basketball hoop's position and state.
  basketBallHoop.show(); // This is to display the basketball hoop.

  // This determines if a collision took place between the basketball and the hoop.
  if (checkCollision(basketBall, basketBallHoop)) {
    
    // This increments the user's score.
    userScore++; 
    
    // This is to create the explosion effect at basketball's position.
    createExplosion(basketBall.x, basketBall.y); 
    
    // This resets the basketball position.
    basketBall.reset();
    
    // This increases the hoop speed by 0.5 each time the user scores.
    basketballHoopMovementSpeed += 0.5; 
    
    // This applies the new speed.
    basketBallHoop.speed = basketballHoopMovementSpeed; 
    
    // This adds 3 seconds of time for each point the user scores.
    gameTimer += 3; 
  }

  // This draws or displays the user's score on the screen.
  drawUserScore();
  
  // This draws or displays the game timer on the screen.
  drawGameTimer();

  // Validates the win/lose conditions.
  if (millis() - bouncyBasketballStartTime > gameTimer * 1000) {
    
    // Transitions the user to the game over state if their time runs out.
    bouncyBasketballGameState = 'end';
  }

  drawExplosionEffectParticles(); // This draws the explosion effect particles.
}

function drawGameOverScreen() {
  // This is to draw or use an image as background image for the game over screen.
  image(basketballImageBackground, 0, 0, width, height);
  
  // This is to draw and style the text for the "Game Over" screen.
  textSize(200);
  textStyle(BOLD);
  fill(255, 165, 0);
  stroke(0);
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  text('Game Over', width / 2, height / 2 - 100);
  
  // This is to draw and style the text for the user's score.
  textSize(60);
  text(`Score: ${userScore}`, width / 2, height / 2 + 50); // This displays the user's score.
  text('Press "ENTER" to Restart the Game', width / 2, height / 2 + 150);

  // In the "Game Over" screen, if the user presses the "ENTER" key, the game Restarts.
  if (keyIsDown(ENTER)) {
    bouncyBasketballGameState = 'play';
    userScore = 0;
    bouncyBasketballStartTime = millis();
    basketballHoopMovementSpeed = 10; // This resets the hoop speed back to 10.
    basketBallHoop.speed = basketballHoopMovementSpeed; // This applies the initial speed again.
    gameTimer = 10; // This resets the timer.
  }
}

// This displays the user's score.
function drawUserScore() {
  textSize(24);
  fill(0);
  text(`Score: ${userScore}`, 20, 60);
}

// This displays the game timer.
function drawGameTimer() {
  let timeLeft = gameTimer - Math.floor((millis() - bouncyBasketballStartTime) / 1000);
  textSize(24);
  fill(0);
  textAlign(LEFT, TOP); 
  text(`Time: ${timeLeft}`, 20, 20);
}

function checkCollision(basketBall, basketBallHoop) {
  // Validates if the basketball's bounding box overlaps with the hoop and the ball is falling or moving downwards.
  return (
    
     // This validates if the right edge of the basketball is to the right of the left edge of the hoop.
    basketBall.x + basketBall.basketballRadius > basketBallHoop.x &&
    
     // This validates if the left edge of the basketball is to the left of the right edge of the hoop.
    basketBall.x - basketBall.basketballRadius < basketBallHoop.x + basketBallHoop.width && 
    
    // This validates if the bottom edge of the basketball is below the top edge of the hoop.
    basketBall.y + basketBall.basketballRadius > basketBallHoop.y && 
    
    // This validates if the top edge of the basketball is above the bottom edge of the hoop.
    basketBall.y - basketBall.basketballRadius < basketBallHoop.y + basketBallHoop.height && 
    
    // This validates if the basketball is falling or moving downwards.
    basketBall.vy > 0 
  );
}

function createExplosion(x, y) {
  // Simple explosion particle system.
  for (let i = 0; i < 20; i++) {
    let p = new ExplosionParticle(x, y);
    explosionEffectParticles.push(p);
  }
}

class newbasketBall {
  constructor() {
    this.reset(); // This initializes basketball properties.
  }

  reset() {
    // This resets the basketball properties to default values.
    this.x = width / 2; // This is the initial x position at the center of the canvas.
    this.y = height - 50; // This is the initial y position near the bottom of the canvas.
    this.vx = 0; // This is the initial horizontal velocity.
    this.vy = 0; // This is the initial vertical velocity.
    this.basketballGravity = 0.5; // This is the Gravity pulling the basketball down so that it would fall.
    this.basketballBounce = -1; // This is the bounce factor for the basketball.
    this.basketballRadius = 20; // This is basketball's radius.
  }

  update() {
    // This updates basketball's position and velocity.
    if (basketBallShooting) {
      
      // This applies gravity to the vertical velocity.
      this.vy += this.basketballGravity; 
      
      // This updates the x position.
      this.x += this.vx; 
      
      // This updates the y position.
      this.y += this.vy;

      // This bounces the ball when it hits the bottom of the screen.
      
      // This determines if the bottom edge of the ball is touching the bottom of the canvas.
      if (this.y + this.basketballRadius >= height) {
        
        // This adjusts the y position to keep the ball above the canvas.
        this.y = height - this.basketballRadius; 
        
        // This reverses the vertical velocity and simulate the basketball bouncing.
        this.vy *= this.basketballBounce;
      }

      // These are for the movement of the basketball from Left to Right.
      if (keyIsDown(LEFT_ARROW)) {
        
        // This moves the basketball to the left with velocity of -5.
        this.vx = -5; 
      } else if (keyIsDown(RIGHT_ARROW)) {
        
        // This moves the basketball to the right with velocity of 5.
        this.vx = 5;
      } else {
        
        // This stops the horizontal movement.
        this.vx = 0;
      }
    }
  }

  show() {
    fill(255, 104, 31); // I set the colour of the basketball to red orange. 
    stroke(0); // I addded a black stroke to the basketball.
    strokeWeight(2); // I set the stroke weight to 2.
    
    // This is to draw the basketball as a circle or ellipse.
    ellipse(this.x, this.y, this.basketballRadius * 2, this.basketballRadius * 2);

    // This is to draw lines on the basketball.
    stroke(0);
    strokeWeight(2);
    
    // Vertical line
    line(this.x, this.y - this.basketballRadius, this.x, this.y + this.basketballRadius);
    
    // Horizontal line
    line(this.x - this.basketballRadius, this.y, this.x + this.basketballRadius, this.y);
    
    // These are the Curved lines.
    noFill(); // So that the curves would not be filled.
    arc(this.x, this.y, this.basketballRadius * 2, this.basketballRadius * 2, -HALF_PI, 0);
    arc(this.x, this.y, this.basketballRadius * 2, this.basketballRadius * 2, HALF_PI, PI);
    arc(this.x, this.y, this.basketballRadius * 2, this.basketballRadius * 2, PI, PI + HALF_PI);
    arc(this.x, this.y, this.basketballRadius * 2, this.basketballRadius * 2, PI + HALF_PI, TWO_PI);
  }

  shoot() {
    // This sets the vertical velocity to move the ball upward for shooting.
    this.vy = -10; 
  }
}

class newbasketBallHoop {
  constructor() {
    this.reset(); // This initializes the basketball hoop properties.
    this.basketBallHoopNetLength = 60; // This sets the length of each string to 60.
    this.basketBallHoopNetStringSpacing = 20; // This sets the spacing between the strings to 20.
    this.basketBallHoopNetStringThickness = 3; // This sets the thickness of each string to 3.
  }

  reset() {
    // This resets the basketball hoop properties to default values.
    this.x = width / 2 - 50; // This is the initial x position of the basketball hoop.
    this.initialY = 100; // This is the initial y position of the basketball hoop.
    this.width = 100; // This sets the width of the basketball hoop to 100.
    this.height = 10; // This sets the height of the basketball hoop to 10.
    this.speed = basketballHoopMovementSpeed; // This is the speed of hoop movement.
    this.y = this.initialY; // This initializes the y position.
  }

  update() {
    // This updates basketball hoop's position based on its speed.
    this.x += this.speed;
    
    // This reverses the direction of the hoop when hitting the screen edge.
    if (this.x <= 0 || this.x + this.width >= width) {
      this.speed *= -1;
    }
  }

  lower() {
    // Decreases the y position of the basketball hoop to lower it.
    this.y += 10;
  }

  show() {
    fill(255, 0, 0); // This sets a red color for the basketball hoop.
    rect(this.x, this.y, this.width, this.height); // This draws the basketball hoop as a rectangle.

    // This is the left string
    stroke(255); // White color for the strings
    strokeWeight(this.basketBallHoopNetStringThickness); // This is for the thickness of the strings.
    line(this.x + this.width * 0.15, this.y, this.x + this.width * 0.25, this.y + this.basketBallHoopNetLength);
    
    // This is the left string
    stroke(255); // White color for the strings
    strokeWeight(this.basketBallHoopNetStringThickness); // This is for the thickness of the strings.
    line(this.x + this.width * 0.25, this.y, this.x + this.width * 0.25, this.y + this.basketBallHoopNetLength);
    
      // This is the left string
    stroke(255); // White color for the strings
    strokeWeight(this.basketBallHoopNetStringThickness); // This is for the thickness of the strings.
    line(this.x + this.width * 0.35, this.y, this.x + this.width * 0.25, this.y + this.basketBallHoopNetLength);
    
        // This is the left string
    stroke(255); // White color for the strings
    strokeWeight(this.basketBallHoopNetStringThickness); // This is for the thickness of the strings.
    line(this.x + this.width * 0.45, this.y, this.x + this.width * 0.25, this.y + this.basketBallHoopNetLength);

        // This is the middle string
    line(this.x + this.width * 0.35, this.y, this.x + this.width * 0.5, this.y + this.basketBallHoopNetLength);
    
    // This is the middle string
    line(this.x + this.width * 0.5, this.y, this.x + this.width * 0.5, this.y + this.basketBallHoopNetLength);
    
        // This is the middle string
    line(this.x + this.width * 0.75, this.y, this.x + this.width * 0.5, this.y + this.basketBallHoopNetLength);

    // This is the right string
    line(this.x + this.width * 0.55, this.y, this.x + this.width * 0.75, this.y + this.basketBallHoopNetLength);
    
      // This is the right string
    line(this.x + this.width * 0.65, this.y, this.x + this.width * 0.75, this.y + this.basketBallHoopNetLength);
    
    // This is the right string
    line(this.x + this.width * 0.75, this.y, this.x + this.width * 0.75, this.y + this.basketBallHoopNetLength);
    
      // This is the right string
    line(this.x + this.width * 0.85, this.y, this.x + this.width * 0.75, this.y + this.basketBallHoopNetLength);
  }
}


class ExplosionParticle {
  constructor(x, y) {
    // This initializes the explosion effect particle's position and velocity.
    this.x = x;
    this.y = y;
    this.vx = random(-5, 5); // This is the random horizontal velocity.
    this.vy = random(-5, 5); // This is the random vertical velocity.
    this.alpha = 255; // This is the initial transparency of the explosion effect particles.
  }

  update() {
    // This updates the particle's position based on velocity.
    this.x += this.vx;
    this.y += this.vy;
    // This decreases the transparency over time.
    this.alpha -= 5;
  }

  show() {
    // This displays the explosion effect particles as a falling and fading ellipses.
    noStroke(); // Removes any outline.
    fill(255, this.alpha); // A white color with current transparency.
    ellipse(this.x, this.y, 10); // This draws or displays the ellipse at current position.
  }
}

function drawExplosionEffectParticles() {
  for (let i = explosionEffectParticles.length - 1; i >= 0; i--) {
    explosionEffectParticles[i].update(); // This updates each explosion effect particle's position and state,
    explosionEffectParticles[i].show(); // This displays the explosion effect particle.
    if (explosionEffectParticles[i].alpha <= 0) {
      explosionEffectParticles.splice(i, 1); // This remove the particles with alpha that are less than or equal to 0.
    }
  }
}

// This is a keyPressed event for shooting the basketball.
function keyPressed() {
  if (keyCode === 32) { // This is the "Spacebar".
    basketBall.shoot();
    basketBallShooting = true;
  }
}

function drawBasketballCourt() {
  // This is the basketball court floor.
  fill	(222,184,135); // A slightly light brown color for the floor.
  rect(0, 0, width, height);

  // This is the three-point line.
  noFill();
  stroke(255);
  strokeWeight(2);
  arc(width / 2, 50, 1200, 1200, 0, PI);

  // This is the free throw line.
  fill(255, 165, 0); // An orange color for the free throw line.
  rect(width / 2 - 100, 0, 200, 300);
  line(width / 2 - 100, 150, width / 2 + 100, 150);

  // This is the center circle of the basketball court floor.
  ellipse(width / 2, height / 1, 100, 100);
}

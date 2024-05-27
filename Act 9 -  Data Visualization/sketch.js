// These are the variables that will be used for this data visualization activity.
let CSVData; // I declared a variable named "CSVData" to hold the data from my CSV.
let barsForGraph = [];// I created an array that would store the bars.
let maxNumberofStudents; // I created another variable that would keep track of the maximum number of students for any genre.
let marginValueForGraph = 50;  // I define margin value of 50.

// This is to load the external files.
function preload() {
  
  // This is to load the CSV file with headers and store it in CSVData.
  CSVData = loadTable('Favorite Music Genres of Year 1 Students in the Creative Computing Program ( Act 9 - Data Visualization).csv', 'csv', 'header');
}

function setup() {
  // I created a canvas that has a width of 1500 and a height of 900.
  createCanvas(1500, 900);
  
  // I set the background color of the canvas to white.
  background(255);

  // This gets the number of rows in the CSV file.
  let numberOfRowsinCSV = CSVData.getRowCount();
  
  // This initializes the maxNumberofStudents to 0.
  maxNumberofStudents = 0;

  // I used a loop that would loop through each row in the CSV file.
  for (let i = 0; i < numberOfRowsinCSV; i++) {
    
    // This gets the music genre from the current row.
    let MusicGenre = CSVData.getString(i, 'Genres');
    
    // Get the number of students from the current row.
    let numberOfStudents = CSVData.getNum(i, 'NumberofStudents');
    
    // This updates the maxNumberofStudents if the current number of students is greater.
    maxNumberofStudents = max(maxNumberofStudents, numberOfStudents);
    
    // This adds an object that would represent the bar to the barsForGraph array.
    barsForGraph.push({ MusicGenre: MusicGenre, numberOfStudents: numberOfStudents, color: color(random(255), random(255), random(255)) });
  }

  // The drawBars function is used to draw the bars.
  drawBars();
}

// Function to draw the bars on the canvas
function drawBars() {
  
  // I set the text size to 26.
  textSize(26);
  
  // I set the style of the text to bold.
  textStyle(BOLD);
  
  // I aligned the text in the center.
  textAlign(CENTER);
  
  // This is to draw or display the text at the top of the canvas. This is adjusted based on the margin value.
  text("Favorite Music Genres of Year 1 Students in the Creative Computing Program", width / 2, marginValueForGraph - 20);

   // This calculates the width of each bar. It is adjusted by the left and right margins.
  let widthOfBar = (width - 2 * marginValueForGraph) / barsForGraph.length;
  
  // This also calculates the height of each sub-bar based on the maximum number of students and adjusted by the top and bottom margins.
  let heightOfSubBar = (height - 2 * marginValueForGraph) / maxNumberofStudents;

  // I used another loop that would loop through each bar in the barsForGraph array.
  for (let i = 0; i < barsForGraph.length; i++) {
    
    // This is used to calculate the x-coordinate position for the current bar. This is adjusted by the left margin.
    let xCoordinate = marginValueForGraph + i * widthOfBar;
    
    // This sets the y-coordinate position to draw starting from the bottom margin.
    let yCoordinate = height - marginValueForGraph;
    
    // This adjusts the width of the current bar. This is used to add space between bars.
    let wCoordinate = widthOfBar - 13;

    // Another loop that would loop through the number of students for the current genre to draw the sub-bars in the graph.
    for (let iterateOverNumberofStudents = 0; iterateOverNumberofStudents < barsForGraph[i].numberOfStudents; iterateOverNumberofStudents++) {
      
      // This is to set the fill color for the current sub-bar.
      fill(barsForGraph[i].color);
      
      // I set the stroke color to white.
      stroke(255);
      
      // This is to draw the sub-bar rectangle.
      rect(xCoordinate, yCoordinate - heightOfSubBar, wCoordinate, heightOfSubBar);
      
      // This is to move up for the next sub-bar.
      yCoordinate -= heightOfSubBar;
    }

    // This is to align the text to the center.
    textAlign(CENTER);
    
    // I set the text size to 15.
    textSize(15);
    
    // This is to draw the number of students on top of the bars. It is 5 pixels above the bar.
    text(barsForGraph[i].numberOfStudents, xCoordinate + wCoordinate / 2, yCoordinate - 5);

    // This is to draw the genre names below the bars. It is 25 pixels below the bar.
    text(barsForGraph[i].MusicGenre, xCoordinate + wCoordinate / 2, height - marginValueForGraph + 25);
  }
}

// I created a function that would handle the mouse click events.
function mouseClicked() {
  
  // This loop loops through each bar in the array named "barsForGraph".
  for (let i = 0; i < barsForGraph.length; i++) {
    
    // This changes the color of the current bar to a random color.
    barsForGraph[i].color = color(random(255), random(255), random(255));
  }
  
  // This is to draw the bars with their new colors.
  drawBars();
}
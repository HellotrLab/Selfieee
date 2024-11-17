function setup() {
  createCanvas(520, 520);
}

  function setup() {
   createCanvas(520, 520);
   rectMode(CENTER);                      // centers all shapes
   background(59, 214, 200);
   console.log("Setup finished")
}

function draw() {
    
    // Patterns using for loop
    for (j = 0; j <= height; j += 40) {     // spread cross down
       for (i = 0; i <= width; i += 40) {   // spread cross right
            stroke(167, 91, 208, 100);
            strokeWeight(2);
            line(10+i, 10+j, 20+i, 20+j);
            line(20+i, 10+j, 10+i, 20+j)
       }
    }
  
  //Hair Pt1
  noStroke()
  fill(0, 0, 0);
  rect(260,453,270,400);
  
  //Hair Pt2
  noStroke()
  fill(0,0,0);
  arc(260, 260, 270, 350, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);
  
  
  //Face 
  noStroke()
  fill(240, 184, 160);
  ellipse(260, 255, 200, 260);

  //Ears
  arc(150, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)

  //Bang
  noStroke()
  fill(0, 0, 0);
  arc(260, 170, 220, 120, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Eyebrows
  stroke(0, 0, 0);
  strokeWeight(3);
  noFill();
  arc(210, 235, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN);

  //Eyeshadow
  stroke(249, 67, 6, 130);
  strokeWeight(6);
 fill(199, 122, 88);
  arc(210, 255, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 255, 45, 15, PI, TWO_PI, OPEN);
  arc(210, 257, 40, 30, HALF_PI, PI);
  arc(310, 257, 40, 30, 0, HALF_PI);

  //Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(210, 260, 28, 25);
  ellipse(310, 260, 28, 25);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(207, 252, 8, 8);
  ellipse(306, 252, 8, 8);

  //Nose
  fill(199, 122, 88)
  triangle(260, 270, 270, 300, 250, 300);

  //Mouth
  fill(255, 102, 102);
  arc(260, 325, 49, 35, 0, PI);

  //Hoodie
  rectMode(CENTER)
  fill(0,0,0)
  rect(260, 470, 205, 150, 20);
  fill(50,50,50)
  triangle(135, 435, 170, 360, 330, 470);
  triangle(360, 380, 390, 460, 200, 435);
  fill(255)
  ellipse(300, 432, 15, 15);
  ellipse(220, 432, 15, 15);
  rect(300, 460, 8, 65, 20);
  rect(220, 460, 8, 65, 20);


  //Neck
  fill(240, 184, 160)
  rect(260, 380, 50, 55, 20);

  // Glasses
  stroke(0);
  strokeWeight(5);  
  fill(0,0,0,100);
  line(249, 255, 270, 255);
  ellipse(210, 266, 75, 75);    
  ellipse(310, 266, 75, 75);
  
}

function setup() {
  // put setup code here
  createCanvas(500, 400);
    background(200);
}

function draw() {
  // put drawing code here
angleMode(DEGREES);
rectMode(CENTER);
fill(0);
stroke(0);
strokeWeight(4);

beginShape();
fill(200);
  vertex(29, 334);
  quadraticVertex(42, 270, 60, 71);
  bezierVertex(435, 3, 1, 340, 414, 334);
endShape(CLOSE);

line(70, 334, 70, 300);
line(100, 334, 100, 275);
line(130, 334, 130, 250);
line(160, 334, 160, 227);
line(190, 334, 190, 205);
line(220, 334, 220, 260);
line(250, 334, 250, 300);
line(280, 334, 280, 317);
line(310, 334, 310, 327);

push();
fill(240);
translate(220, 195);
rotate(30);
rect(0, 0, 20, 10);
pop();

push();
fill(255);
strokeWeight(2);
line(225, 187, 230, 178);
line(230, 193, 240, 185);
line(228, 203, 230, 213);
line(230, 203, 233, 209);
ellipse(228, 188, 8);
pop();

push();
fill(240);
translate(195, 195);
rotate(-25);
rect(0, 0, 20, 10);
pop();

push();
fill(240);
translate(175, 205);
rotate(-35);
rect(0, 0, 20, 10);
pop();

push();
fill(240);
translate(155, 220);
rotate(-35);
rect(0, 0, 20, 10);
pop();

push();
fill(240);
translate(137, 234);
rotate(-36);
rect(0, 0, 20, 10);
pop();

push();
fill(240);
translate(118, 250);
rotate(-37);
rect(0, 0, 20, 10);
pop();
  // rotate(radians(-25));
  // rect(70, 260, 30, 10);


}
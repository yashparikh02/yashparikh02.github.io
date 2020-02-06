var yoff = 0.0;        // 2nd dimension of perlin noise repush
var r, g, b;

function setup() {
  createCanvas(windowWidth,windowHeight);
  r = random(80);
  g = random(80);
  b = random(100,255);
  a = random(200,255)

}

function draw() {
  background(250,250,250);
  let width = windowWidth;
  let height= windowHeight;
  fill(r,g,b,a);
  noStroke();
  // We are going to draw a polygon out of the wave points
  beginShape();

  var xoff = 0;       // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 12) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    var y = map(noise(xoff, yoff), 0, 1, (windowWidth*.15),(windowHeight*.11));

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function mousePressed() {
  r = random(80);
  g = random(80);
  a = random(200,255)
  b = random(120,200)
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

let x = 0;

function setup() {
  createCanvas(720, 480);
}

function draw() {
  background('AA44FF');
  let y = height / 2 + sin(frameCount * 0.05) * 50;
  fill(lerpColor(color('#FFAA00'), color('#00AAFF'), (frameCount * 0.01) % 1));
  rect(x, y, 20, 20);
  x = (x + 2) % width;
}
let numbers = [1, 2, 3, 4, 5];
let strings = ["Omg Snow?"];
let mixed = [42, "P5.js", true];
let particles = []; // particle system array
let spawnNonStop = false; // flag to control continuous spawning

function setup() {
  createCanvas( windowWidth, 400);

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  console.log("Numbers joined:", numbers.join(", "));
  console.log("Concatenated arrays:", numbers.concat(strings));

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  let singleParticleButton = createButton("Add 1 Piece of Snow");
  singleParticleButton.mousePressed(() => {
    particles.push(new Particle(random(width), random(height)));
  });

  // Adding a button to create multiple particles
  let multipleParticlesButton = createButton("Add More Snow");
  multipleParticlesButton.mousePressed(() => {
    for (let i = 0; i < 10; i++) {
      particles.push(new Particle(random(width), random(height)));
    }
  });

  // Adding a button to spawn particles non-stop
  let nonStopParticlesButton = createButton("Spawn A Snowstorm");
  nonStopParticlesButton.mousePressed(() => {
    spawnNonStop = !spawnNonStop; // Toggle the flag
  });

  // Adding a button to reset the particle system
  let resetButton = createButton("Melt All the Snow");
  resetButton.mousePressed(() => {
    particles = []; // Clear the particles array
    spawnNonStop = false; // Stop continuous spawning
  });
}

function draw() {
    background(100, 150, 200);
    // Spawn particles continuously if the flag is true
    if (spawnNonStop) {
      particles.push(new Particle(random(width), random(height)));
    }
  
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
  
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      if (particles[i].isFinished()) {
        particles.splice(i, 1);
      }
    }

    // 
    fill(255);
    textSize(16);
    text("Numbers: " + numbers.join(", "), 10, height - 60);
    text("Strings: " + strings.join(" "), 10, height - 40);
}

// Particle class
class Particle {
    constructor(x, y, persistent = false) {
      this.x = x;
      this.y = y;
      this.vx = random(-2, 2);
      this.vy = random(-2, 2); //https://p5js.org/reference/#/p5/random
      this.alpha = 1000; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
      this.persistent = persistent; 
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
  
      // Collisions with the canvas borders
      if (this.x - 8 <= 0 || this.x + 8 >= width) {
        this.vx *= -1; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
      }
      if (this.y - 8 <= 0 || this.y + 8 >= height) {
        this.vy *= -1; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
      }
  
      if (!this.persistent) {
        this.alpha -= 5; 
      }
    }
  
    show() {
      noStroke();
      fill(255, this.alpha);
      ellipse(this.x, this.y, 16);
    }
  
    isFinished() {
      return this.alpha <= 0;
    }
  }
function setup() {
    createCanvas(800, 600);
    let particles = []; // Initialize an empty array for particles

    // Create 100 particles and push them into the array
    for (let i = 0; i < 100; i++) {
        let particle = {
            x: random(width),
            y: random(height),
            size: random(5, 15)
        };
        particles.push(particle); // Use push() to add particles to the array
    }
}

function draw() {
    background(200);
    
    // Display each particle
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ellipse(p.x, p.y, p.size);
    }

    // Example of removing particles based on a condition
    if (particles.length > 50) {
        particles.splice(0, 10); // Remove the first 10 particles
    }
}

// References:
// 1. P5.js Reference: https://p5js.org/reference/
// 2. JavaScript Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
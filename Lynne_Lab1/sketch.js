function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background(255);
    stroke('blue');
    noFill('blue');
    let spacing = 50;

    for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
            ellipse(x, y, spacing * 0.8);
            triangle(
                x - spacing / 4, y + spacing / 4,
                x, y - spacing / 4,
                x + spacing / 4, y + spacing / 2
            );
        }
    }
}
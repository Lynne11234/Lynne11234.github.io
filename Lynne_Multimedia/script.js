let memeImg = document.getElementById('memeImage');
let backgroundVid = document.getElementById('backgroundVideo');
let backgroundAudio = document.getElementById('backgroundAudio');
let yippeAudio = document.getElementById('yippeAudio');

backgroundVid.onplay = () => {
    if (backgroundAudio.paused) {
        backgroundAudio.currentTime = backgroundVid.currentTime;
        backgroundAudio.play();
        backgroundAudio.volume = 0.2; // Reduce volume to 20%
    }
};

backgroundVid.onpause = () => {
    backgroundAudio.pause();
};

backgroundVid.ontimeupdate = () => {
    if (Math.abs(backgroundAudio.currentTime - backgroundVid.currentTime) > 0.3) {
        backgroundAudio.currentTime = backgroundVid.currentTime;
    }
};


memeImg.onclick = function () {
yippeAudio.currentTime = 0; 
yippeAudio.play();

if (!backgroundVid.paused) {
    backgroundVid.pause();
    backgroundAudio.pause();
} else {
    backgroundVid.pause();
}
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(0, 0, 0, 0); 
    text('Find a way to stop the cat!!!', width / 2, height - 50);
}
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
//https://p5js.org/reference/#/p5.MediaElement
//https://p5js.org/reference/#/p5/createAudio

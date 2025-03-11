var tada;
var button;
var button2;
var mystring = 'hello';
var numberOfClicks = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    tada = createAudio('mysound.mp3');
    button = createButton('click me');
    button.position(49,153);
    button.hide();

    button2 = createButton('no, click me');
    button2.position(200,10);
    button2.hide();
    button2.mousePressed(function(){
        button2.hide();
        button.show();
        sillything();
    });

    // object callback
    button.mousePressed(function(){
        //tada.play();
        button2.show();
        button.hide();
        sillything(); // not a callback
    });
}


function draw(){
    background(100);
    if(mouseIsPressed){//event polling
        background(150);
        // tada.play();
    }
    ellipse(mouseX, mouseY, 10,10);
    text(numberOfClicks, 100,100);
}

// global callback
function mousePressed(){
    //tada.play();
    // set mystring to a different message
}

//global callback
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    button.show();
}

// global function not a global callback
function sillything(){
    numberOfClicks++;
    if(numberOfClicks > 10){
        tada.play();
    }
}
var storyText = "You were minding your own business, but the you ecounter...A wild animal?";
var storyElement;
var button, button2;
var imageElement;

function setup() {
    noCanvas(); // Prevent the default canvas from being created
    setupStory();
}

function setupStory() {
    storyElement = createP(storyText);
    storyText = "You're minding your own business, but then you saw...";
    imageElement = createImg('eevee.png');

    button = createButton('Ignore it');
    button.position(50, 150);
    button.mousePressed(ignore);

    button2 = createButton('Show some interest');
    button2.position(200, 150);
    button2.mousePressed(notignore);
}

function ignore() {
let confirmation = confirm("Are you sure you want to ignore it?");
if (confirmation) {
let secondConfirmation = confirm("Are you really sure?");
if (secondConfirmation) {
    storyText = "Maybe you're not a dog person... what a shame.";
    updateStory('cry.webp');
    
    // Remove existing buttons
    button.remove();
    button2.remove();

    // Add a "Go Back" button
    let goBackButton = createButton('Go Back');
    goBackButton.position(50, 150);
    goBackButton.mousePressed(() => {
        location.reload(); // reload
    });
} else {
    location.reload(); // reload
    notignore(); // Redirect to "notignore"
}
    }
}
function notignore() {
storyText = "I knew you couldn't resist such a cute creature, let's see what it is!";
updateStory('eevee.png');
button.remove();
buttonrandom=createButton('I changed my mind, I\'m leaving');
buttonrandom.mousePressed();

// Add random movement by kristynle0608
buttonrandom.mouseOver(() => {
var offset = buttonrandom.position();
var topOffset = getRandomIntInclusive(-300, 300);
var leftOffset = getRandomIntInclusive(-300, 300);
var top = offset.y + topOffset;
var left = offset.x + leftOffset;
buttonrandom.position(left, top);
});
button2.html('Show some interest');
button2.mousePressed(interest);
}

/**
* Generates a random number between the range of the min and max number (min and max are inclusive)
* Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function interest() {
storyText = "You did some research, and it's an Eevee! Evolve it?";
updateStory('eevee.png');
button2.remove();

// Evolution conts
const evolutions = [
{ name: 'Sylveon', image: 'ss.jpg', cake: 'Strawberry Shortcake'},
{ name: 'Espeon', image: 'et.jpg', cake:'Taro Boba Jelly' },
{ name: 'Umbreon', image: 'ul.jpg', cake:'Lava Cake' },
{ name: 'Vaporeon', image: 'vj.jpg', cake:'Clear Blue Jelly' },
{ name: 'Leafeon', image: 'lm.jpg', cake:'Matcha Roll Cake' },
{ name: 'Eevee', image: 'ec.jpg',  cake:'Butter Croissant' }
];

// Calculate button spacing
const screenWidth = window.innerWidth;
const buttonWidth = 150; // Approximate width of each button
const totalButtons = evolutions.length;
const spacing = (screenWidth - totalButtons * buttonWidth) / (totalButtons + 1);

// Create buttons for each evolution option
evolutions.forEach((evolution, index) => {
const buttonX = spacing + index * (buttonWidth + spacing); // Calculate x position
const buttonY = 200; // Fixed y position

const evolveButton = createButton(evolution.name);
evolveButton.position(buttonX, buttonY);
evolveButton.mousePressed(() => evolve(evolution.cake, evolution.name, evolution.image));
});
}
function evolve(cake, evolution, image) {
    storyText = `Your Eevee evolved into ${cake} ${evolution}!`;
    updateStory(image);
    button.remove();
    button2.remove();
    selectAll('button').forEach(btn => btn.remove());

    let goBackButton = createButton('Try again?');
    goBackButton.position(50, 150);
    goBackButton.mousePressed(() => {
        location.reload(); // reload
    });
}
function updateStory(image) {
    storyElement.html(storyText);
    imageElement.attribute('src', image);
}
//tbh the whole thing is to showcase my new eevee arts (and show ppl my love for eevelutions)
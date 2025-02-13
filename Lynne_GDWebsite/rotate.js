const greyCircle = document.getElementById('greyCircle');
const blueHandle = document.getElementById('blueHandle');
const image = greyCircle.querySelector('img');
image.style.pointerEvents = 'none';
let isDragging = false;
let initialAngle = 0;
let currentRotation = 0;

const startDrag = (event) => {
    isDragging = true;
    document.body.style.cursor = 'grabbing';

    const rect = greyCircle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX || event.touches[0].clientX;
    const mouseY = event.clientY || event.touches[0].clientY;

    initialAngle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
    const rotationMatch = greyCircle.style.transform.match(/rotate\((.*)deg\)/);
    currentRotation = rotationMatch ? parseFloat(rotationMatch[1]) : 0;
};

const endDrag = () => {
    isDragging = false;
    document.body.style.cursor = 'default';
};

const duringDrag = (event) => {
    if (!isDragging) return;

    const rect = greyCircle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX || event.touches[0].clientX;
    const mouseY = event.clientY || event.touches[0].clientY;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
    const deltaAngle = angle - initialAngle;

    greyCircle.style.transform = `translate(-50%, -50%) rotate(${currentRotation + deltaAngle}deg)`;
};

blueHandle.addEventListener('mousedown', startDrag);
blueHandle.addEventListener('touchstart', startDrag);

document.addEventListener('mouseup', endDrag);
document.addEventListener('touchend', endDrag);

document.addEventListener('mousemove', duringDrag);
document.addEventListener('touchmove', duringDrag);
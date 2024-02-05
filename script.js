function downloadQR() {
    const qrImage = document.querySelector('.popup img');
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'qr.jpg';
    link.click();}
const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const yesButton = document.querySelector('.button .yes');
const noButton = document.querySelector('.button .no');
let noButtonClickCount = 0;

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

yesButton.addEventListener('click', () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    let randomX, randomY;

    do {
        // Keep generating random positions until "Yes" button is not overlapped by "No" button with at least 10px margin
        randomX = Math.floor(Math.random() * (screenWidth * 0.85)) - (screenWidth * 0.425);
        randomY = Math.floor(Math.random() * (screenHeight * 0.7)) - (screenHeight * 0.4);
    } while (
        // Check if the new position is too close to the "No" button
        Math.abs(randomX - noButton.offsetLeft) < noButton.offsetWidth * 1.2 + 10 &&
        Math.abs(randomY - noButton.offsetTop) < noButton.offsetHeight * 1.2 + 10
    );

    yesButton.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.2)`;
    noButtonClickCount++;
    const scaleMultiplier = 1 + (noButtonClickCount * 0.5); // Increase scale by 0.5 for each click
    noButton.style.transform = `scale(${scaleMultiplier})`;
});

box.addEventListener('animationend', () => {
    box.remove();
});

box2.addEventListener('animationend', () => {
    box2.remove();
});

// Get device screen size
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Adjust content based on screen size
if (screenWidth < 768) {
    // Small screens
    document.body.style.fontSize = '14px';
} else if (screenWidth < 1024) {
    // Medium screens
    document.body.style.fontSize = '16px';
} else {
    // Large screens
    document.body.style.fontSize = '18px';
}
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    // Randomly position the flower within the screen width
    const randomX = Math.floor(Math.random() * window.innerWidth);
    flower.style.left = `${randomX}px`;

    // Append the flower to the body
    document.body.appendChild(flower);

    // Remove the flower after it falls off the screen
    flower.addEventListener('animationend', () => {
        flower.remove();
        flowerCount--;
    });
}

// Create flowers periodically
setInterval(createFlower, 1500);

function openLink() {
    window.open('https://me.momo.vn/qr/ha-quoc-bi-Mqxk92vldo', '_blank');
}
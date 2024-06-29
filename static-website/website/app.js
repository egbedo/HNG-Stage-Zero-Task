// Get the picture element
const picture = document.querySelector('.picture');

// Add event listener for mouseover event
picture.addEventListener('mouseover', () => {
    // Move the picture
    picture.style.transform = 'translate(10px, 10px)';
});

// Add event listener for mouseout event
picture.addEventListener('mouseout', () => {
    // Reset the picture position
    picture.style.transform = 'translate(0, 0)';
});
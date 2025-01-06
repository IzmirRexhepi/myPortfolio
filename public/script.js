document.getElementById('viewWorkBtn').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('li-home-section').addEventListener('click', () => {
    document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('li-about-section').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('li-projects-section').addEventListener('click', () => {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('return-home').addEventListener('click', () => {
  document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' });
});


const slides = [
    '/imgs/project1.png',
    '/imgs/project2.png',
    '/imgs/cpp-console.png',
];

let currentSlide = 0;
const slideImage = document.getElementById('slide');

// Function to show a specific slide
function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length; // Handle wrap-around

    // Remove the 'active' class from the current image
    slideImage.classList.remove('active');

    // Change the slide image source
    slideImage.src = slides[currentSlide];

    // Add the 'active' class to the new image
    setTimeout(() => {
        slideImage.classList.add('active');
    }, 50); // Slight delay before adding active class for smooth transition
}

// Automatically cycle through slides
function startSlideshow() {
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 10000); // Change slide every 5 seconds
}

// Initialize and start slideshow
showSlide(currentSlide);
startSlideshow();
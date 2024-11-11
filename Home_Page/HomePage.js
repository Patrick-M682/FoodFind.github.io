const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 3000; // Duration for each slide in milliseconds

function showNextSlide() {
    // Remove 'active' class from the current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate the next slide index
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add 'active' class to the next slide
    slides[currentSlide].classList.add('active');
}

// Initialize the first slide
slides[currentSlide].classList.add('active');

// Set the interval to change slides
setInterval(showNextSlide, slideInterval);

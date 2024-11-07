const slides = document.querySelectorAll('.slide');
const timerBar = document.querySelector('.timer-bar');
let currentSlide = 0;
const slideInterval = 3000; // Duration for each slide in milliseconds

function showNextSlide() {
    // Reset the timer bar to 0 width, then trigger the width animation to 100%
    timerBar.style.transition = 'none'; // Disable transition temporarily for instant reset
    timerBar.style.width = '0';
    
    // Allow a brief delay to reset, then apply the transition to grow the bar
    setTimeout(() => {
        timerBar.style.transition = `width ${slideInterval}ms linear`; // Reapply transition
        timerBar.style.width = '100%'; // Grow bar to full width over slide interval
    }, 50);

    // Switch to the next slide
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Initialize the timer bar animation on the first load
timerBar.style.width = '100%';
timerBar.style.transition = `width ${slideInterval}ms linear`;

// Set the interval to change slides and reset the timer bar
setInterval(showNextSlide, slideInterval);

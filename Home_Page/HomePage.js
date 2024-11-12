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

// Function to check if the section is in view
// Function to check if the section is partially in view
function isInView(element) {
    const rect = element.getBoundingClientRect();
    const threshold = window.innerHeight * 0.100; // Show when 30% of section is in view
    return (
      rect.top < window.innerHeight - threshold &&
      rect.bottom > threshold
    );
  }
  
  // Trigger animations when the section comes into view
  const aboutSection = document.getElementById("about-section");
  window.addEventListener("scroll", function () {
    if (isInView(aboutSection)) {
      aboutSection.classList.add("in-view");
    }
  });
  
  // Check if an element is in view
function isInView(element, threshold = 0.3) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * (1 - threshold) &&
      rect.bottom >= 0
    );
  }
  
  // Trigger animations when feature cards are in view
  const featureCards = document.querySelectorAll('.feature-card');
  window.addEventListener('scroll', function () {
    featureCards.forEach(card => {
      if (isInView(card)) {
        card.classList.add('in-view');
      }
    });
  });
  
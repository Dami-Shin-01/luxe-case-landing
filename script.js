// Hero Slider
let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    // Wrap around
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Remove active class from all
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    resetSlideInterval();
}

function currentSlide(index) {
    showSlide(index);
    resetSlideInterval();
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Auto slide
slideInterval = setInterval(() => {
    changeSlide(1);
}, 5000);

// Scroll Animations
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Counter Animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Initialize counters when visible
let countersAnimated = false;

function handleCounterAnimation() {
    if (countersAnimated) return;
    
    const statsSection = document.querySelector('.stats');
    const statsSectionTop = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (statsSectionTop < windowHeight - 100) {
        countersAnimated = true;
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => animateCounter(counter));
    }
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
}

// Event Listeners
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    handleCounterAnimation();
    handleNavbarScroll();
});

// Initial check for elements already in view
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimation();
    handleCounterAnimation();
});

// Product Card Interactions
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        const productName = this.querySelector('h3').textContent;
        console.log(`Product clicked: ${productName}`);
        // You can add navigation or modal opening logic here
    });
});

// CTA Button
document.querySelector('.cta-button').addEventListener('click', function() {
    const productsSection = document.querySelector('#products');
    productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Add keyboard navigation for slider
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Pause slider on hover
const heroSlider = document.querySelector('.hero-slider');
heroSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

heroSlider.addEventListener('mouseleave', () => {
    resetSlideInterval();
});


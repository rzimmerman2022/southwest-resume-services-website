// Home page logic for Southwest Resume Services
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';
import { initHeroAnimations } from 'public/scripts/animations.js';

$w.onReady(function () {
    // Initialize page components
    initializeHeroSection();
    initializeMethodologySection();
    initializePricingSection();
    initializeTestimonials();
    setupAnalytics();
});

function initializeHeroSection() {
    // Animation for statistics
    animateStatistics();
    
    // CTA button handler
    $w('#heroCtaButton').onClick(() => {
        wixLocation.to('/contact');
    });
    
    // Initialize hero animations
    initHeroAnimations();
}

function animateStatistics() {
    // Animate the 72% statistic
    const targetValue = 72;
    let currentValue = 0;
    
    const interval = setInterval(() => {
        if (currentValue < targetValue) {
            currentValue += 1;
            $w('#atsRejectionStat').text = `${currentValue}%`;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

function initializeMethodologySection() {
    // Setup methodology cards hover effects
    const methodCards = ['#methodCard1', '#methodCard2', '#methodCard3'];
    
    methodCards.forEach((cardId) => {
        $w(cardId).onMouseIn(() => {
            $w(cardId).style.transform = 'translateY(-5px)';
            $w(cardId).style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        });
        
        $w(cardId).onMouseOut(() => {
            $w(cardId).style.transform = 'translateY(0)';
            $w(cardId).style.boxShadow = 'none';
        });
    });
}

function initializePricingSection() {
    // Pricing card click handlers
    $w('#pricingCard1').onClick(() => {
        selectPricingPackage('basic');
    });
    
    $w('#pricingCard2').onClick(() => {
        selectPricingPackage('premium');
    });
    
    $w('#pricingCard3').onClick(() => {
        selectPricingPackage('executive');
    });
}

function selectPricingPackage(packageType) {
    wixLocation.to(`/contact?package=${packageType}`);
}

function initializeTestimonials() {
    // Testimonial carousel functionality
    let currentTestimonial = 0;
    const testimonials = ['#testimonial1', '#testimonial2', '#testimonial3'];
    
    setInterval(() => {
        // Hide current testimonial
        $w(testimonials[currentTestimonial]).hide('fade');
        
        // Show next testimonial
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        $w(testimonials[currentTestimonial]).show('fade');
    }, 5000);
}

function setupAnalytics() {
    // Track page view
    wixWindow.trackEvent('page_view', {
        page: 'home',
        timestamp: new Date().toISOString()
    });
}
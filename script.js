// Smooth Scrolling
// Select all links that have smooth scrolling animation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Interactive Menu Filtering
const filterButtons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        items.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        // submit form logic
        console.log('Form submitted successfully!');
    } else {
        console.log('Please fill in all fields.');
    }
});

// Dynamic Pricing Card Animations
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animated');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('animated');
    });
});
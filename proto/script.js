// Smooth scrolling for navigation links
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

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
});

// Add scroll effect to navigation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(26, 0, 51, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(26, 0, 51, 0.5)';
    } else {
        nav.style.background = 'rgba(26, 0, 51, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(26, 0, 51, 0.4)';
    }
});

// Interactive name effect
const nameElement = document.querySelector('.hero-content h1');
let clickCount = 0;
let isTyping = false;
const originalText = nameElement.textContent;
const messages = [
    "Hello there! 👋",
    "Nice to meet you! 😊",
    "Thanks for visiting! ✨",
    "Let's connect! 🤝",
    "Data is awesome! 📊"
];

nameElement.addEventListener('click', function(event) {
    if (isTyping) return; // Prevent multiple clicks during typing
    
    isTyping = true;
    
    // Start typewriter effect
    typewriterEffect();
    
    // Add sparkle effect
    createSparkles(event.clientX, event.clientY);
});

function typewriterEffect() {
    const text = originalText;
    nameElement.textContent = '';
    nameElement.classList.add('typing'); // Add typing cursor
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            nameElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            isTyping = false;
            
            // Remove typing cursor after a delay
            setTimeout(() => {
                nameElement.classList.remove('typing');
            }, 1000);
        }
    }, 150); // Smooth typing speed
}


function createSparkles(x, y) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        
        // Generate random sparkle movement
        const sparkleX = Math.random() * 200 - 100;
        const sparkleY = Math.random() * 200 - 100;
        
        sparkle.style.cssText = `
            position: fixed;
            top: ${y}px;
            left: ${x}px;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 10000;
            animation: sparkle 1.5s ease-out forwards;
            --sparkle-x: ${sparkleX}px;
            --sparkle-y: ${sparkleY}px;
        `;
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}


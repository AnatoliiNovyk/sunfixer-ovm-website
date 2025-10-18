// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
    
    // Album card play button functionality
    const albumCards = document.querySelectorAll('.album-card');
    
    albumCards.forEach(card => {
        const playButton = card.querySelector('.play-button');
        
        playButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const albumTitle = card.querySelector('h3').textContent;
            
            if (this.textContent === '▶') {
                this.textContent = '⏸';
                this.style.color = '#00ffff';
                
                // Reset other play buttons
                albumCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        const otherButton = otherCard.querySelector('.play-button');
                        otherButton.textContent = '▶';
                        otherButton.style.color = '#ffffff';
                    }
                });
            } else {
                this.textContent = '▶';
                this.style.color = '#ffffff';
            }
        });
    });
    
    // Audio visualizer animation
    const bars = document.querySelectorAll('.bar');
    
    function animateBars() {
        bars.forEach((bar, index) => {
            const randomHeight = Math.random() * 40 + 20;
            bar.style.height = randomHeight + 'px';
        });
    }
    
    setInterval(animateBars, 200);
});
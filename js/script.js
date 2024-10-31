// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Streamlined Search Toggle
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.querySelector('.input');
    
    searchIcon?.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        searchBar.style.width = searchBar.classList.contains('active') ? '200px' : '0';
    });

    // Wishlist Logic
    function addToWishlist(productId) {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            showFeedback('Producto añadido a la lista de deseos');
        } else {
            showFeedback('El producto ya está en la lista de deseos');
        }
    }

    // Feedback Function
    function showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.className = 'feedback-message';
        feedback.textContent = message;
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 2000);
    }

    // Lazy Loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    lazyImages.forEach((img) => observer.observe(img));

    // Carousel
    document.querySelector('.carousel-next').addEventListener('click', () => {
        document.querySelector('.carousel').scrollBy({ left: 220, behavior: 'smooth' });
    });
    
    document.querySelector('.carousel-prev').addEventListener('click', () => {
        document.querySelector('.carousel').scrollBy({ left: -220, behavior: 'smooth' });
    });

    // Menu movil 
    const menuToggle = document.getElementById("mobile-toggle");
    const mainMenu = document.querySelector(".main-menu");

    menuToggle.addEventListener("click", () => {
        mainMenu.classList.toggle("active");
    });
    
});

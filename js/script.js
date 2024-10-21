// Obtener los elementos del DOM
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');

// Añadir el evento click para mostrar u ocultar la barra de búsqueda
searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active'); // Mostrar u ocultar la barra
});

// Opcional: cerrar la barra de búsqueda al hacer clic fuera de ella
document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBar.classList.remove('active');
    }
});

lazyImages.forEach(lazyLoad);

// Smooth search bar transitions
searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('active'); 
    if (searchBar.classList.contains('active')) {
        searchBar.style.width = '200px'; 
    } else {
        searchBar.style.width = '0'; 
    }
});


// Autoplay for carousel
const carousel = document.querySelector('.carousel-track');
let index = 0;
let interval = setInterval(autoplayCarousel, 5000); // 5 seconds interval

function autoplayCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    index = (index + 1) % items.length;
    carousel.style.transform = `translateX(-${index * 300}px)`; // Adjust based on item width
}

document.querySelector('.carousel-next').addEventListener('click', () => {
    clearInterval(interval);
    index = (index + 1) % document.querySelectorAll('.carousel-item').length;
    carousel.style.transform = `translateX(-${index * 300}px)`;
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    clearInterval(interval);
    index = (index - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
    carousel.style.transform = `translateX(-${index * 300}px)`;
});

// Touch swipe for mobile carousel navigation
carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xDown) return;
    let xUp = evt.touches[0].clientX;
    let xDiff = xDown - xUp;
    if (xDiff > 0) {
        // Deslizar a la izquierda
        document.querySelector('.carousel-next').click();
    } else {
        // Deslizar a la derecha
        document.querySelector('.carousel-prev').click();
    }
    xDown = null; // Resetear la posición
}

// Wishlist Handling with Local Storage
function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Producto añadido a la lista de deseos');
    } else {
        alert('El producto ya está en la lista de deseos');
    }
}

// Lazy loading images
const lazyImages = document.querySelectorAll('img.lazy');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded'); // Add loaded class once image is fully loaded
            observer.unobserve(img); // Stop observing after load
        }
    });
}, { rootMargin: '50px 0px', threshold: 0.01 });

const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const query = document.querySelector('#search-bar input').value;
    // Aquí puedes implementar la lógica para buscar productos
    alert(`Buscando: ${query}`);
});

function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.className = 'feedback-message';
    document.body.appendChild(feedback);

    setTimeout(() => {
        feedback.remove();
    }, 2000); // El mensaje se elimina después de 2 segundos
}

function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showFeedback('Producto añadido a la lista de deseos');
    } else {
        showFeedback('El producto ya está en la lista de deseos');
    }
}

lazyImages.forEach((img) => observer.observe(img));

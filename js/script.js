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

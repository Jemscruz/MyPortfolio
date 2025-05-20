const menuToggleBtn = document.getElementById('menu-toggle-btn');
const navLinks = document.querySelector('.nav-links');

menuToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    menuToggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && e.target !== menuToggleBtn) {
        navLinks.classList.remove('active');
        menuToggleBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggleBtn.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
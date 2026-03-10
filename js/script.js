// ── THEME TOGGLE ──
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Carga la preferencia guardada, por defecto dark
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    root.classList.add('light');
    themeToggle.textContent = '☀️';
} else {
    themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navMenu.classList.remove('open'))
);

// ── YEAR ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── GALLERY ──
const galleries = [
    ['img/proyecto1-1.png', 'img/proyecto1-2.png', 'img/proyecto1-3.png'],
    ['img/proyecto2-1.png', 'img/proyecto2-2.png', 'img/proyecto2-3.png']
];

let currentProject = 0;
let currentImage = 0;

function openGallery(projectIndex) {
    currentProject = projectIndex;
    currentImage = 0;
    document.getElementById('gallery').style.display = 'flex';
    document.getElementById('gallery-img').src = galleries[currentProject][currentImage];
}

function closeGallery() {
    document.getElementById('gallery').style.display = 'none';
}

function changeImage(direction) {
    currentImage = (currentImage + direction + galleries[currentProject].length) % galleries[currentProject].length;
    document.getElementById('gallery-img').src = galleries[currentProject][currentImage];
}

// Cerrar galería al hacer clic en el fondo
document.getElementById('gallery').addEventListener('click', function (e) {
    if (e.target === this) closeGallery();
});

// Navegación con teclado
document.addEventListener('keydown', e => {
    const gallery = document.getElementById('gallery');
    if (gallery.style.display === 'flex') {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
    }
});

// ── ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 80;
    sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.style.color = link.getAttribute('href') === '#' + section.id ? 'white' : '';
            });
        }
    });
});
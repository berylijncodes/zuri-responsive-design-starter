const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navUL = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    hamburger.classList.toggle('hide');
});

close.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('hide');
});
    


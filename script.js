const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navUL = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
    hamburger.classList.toggle('hide');
});

close.addEventListener('click', () => {
    navUL.classList.toggle('show');
    hamburger.classList.toggle('hide');
});
    


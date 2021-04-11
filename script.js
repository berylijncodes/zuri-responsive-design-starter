const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const navUL = document.getElementById('navLinks');




hamburger.addEventListener('click',()=>{
	hamburger.classList.toggle('hide');
	navUL.classList.toggle('show');
	close.classList.toggle('show');
})


close.addEventListener('click',()=>{
	hamburger.classList.remove('hide');
	navUL.classList.remove('show');
	close.classList.remove('show');
})

// hamburger.addEventListener('click', () => {
//     navUL.classList.toggle('show');
//     hamburger.classList.toggle('hide');
//     close.classList.toggle('show');
// });

// close.addEventListener('click', () => {
// 	close.classList.toggle('hide');
// 	hamburger.classList.remove('hide');
//     hamburger.classList.toggle('show');
//     navUL.classList.toggle('hide')
// });
    


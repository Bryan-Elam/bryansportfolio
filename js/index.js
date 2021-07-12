const navToggle = document.querySelector('.nav-toggle');
const navLink = document.querySelectorAll('.nav_link');

//spins hamburger to x and sets menu translateX to 0 
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-x');
});

//menu removed at link click
navLink.forEach(link => {
    link.addEventListener('click', () => {
         document.body.classList.remove('nav-x');   
    })
})
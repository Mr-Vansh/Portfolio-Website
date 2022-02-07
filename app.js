// Loader
let loader = document.getElementById("loader");
setTimeout(function myFunc(){
    loader.style.display="none";
},4500)

// OnClick --> ScrollY = top
function scrollFunc(){
    window.scrollTo(0,0);
}

const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');


    // CLICK EVENT ON HAMBURGER ICON
    hamburger.addEventListener('click' , ()=>{
        navLinks.classList.toggle('nav-active');

    // TOOGLING OF MENU ICON
    hamburger.classList.toggle('toggle')

    });
}
navSlide();

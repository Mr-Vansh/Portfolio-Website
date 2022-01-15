let loader = document.getElementById("loader");
    setTimeout(
        function myFunc()
        {
        loader.style.display="none";
        },2000
    )


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

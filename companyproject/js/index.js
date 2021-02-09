

function open() {

    let dropdown = document.querySelector('.home');
    let submenu  = document.querySelector('.submenu');
    let link = document.querySelectorAll('.submenu-link');
dropdown.addEventListener('click', () => {
        
    submenu.classList.toggle('nav_active');
    link.forEach((element ,index) =>{
        element.style.animation ? element.style.animation = ' ': animation(element , index) ;
    });

});
function animation(element , index) {
  element.style.animation = `move 0.5s ease forwards ${index / 6}s` ;
};
} ;
open() ;
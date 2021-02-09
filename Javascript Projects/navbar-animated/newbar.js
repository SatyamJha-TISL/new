function open () {
    const burger = document.querySelector('.burger');
    const navLink = document.querySelector('ul');
    const link = document.querySelectorAll('li');

    burger.addEventListener('click', () => {
        
            navLink.classList.toggle('nav_active');
            link.forEach((element ,index) =>{
                element.style.animation ? element.style.animation = ` ` : animation(element , index) ;
            });

        });
        function animation(element , index) {
          element.style.animation = `move 0.5s ease forwards ${index / 6}s` ;
        };
    } ;
open() ;
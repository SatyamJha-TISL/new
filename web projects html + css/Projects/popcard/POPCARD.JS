const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children) ;
const nextButton = document.querySelector ('.carousel_button--right') ;
const prevButton = document.querySelector ('.carousel_button--left') ;
let count = 0 ;


let moveToSlide = (track , currentSlide , targetSlide , count ) =>

{  
    track.style.transform = `translateX(-${targetSlide.width *count}px)` ;
    console.log(targetSlide.style.left);
    currentSlide.classList.remove('currentpic');
    targetSlide.classList.add('currentpic');
};

let moveToSlide2 = (track , currentSlide , targetSlide , count ) =>

{  
    track.style.transform = `translateX(${targetSlide.width *count}px)` ;
    console.log(targetSlide.style.left);
    currentSlide.classList.remove('currentpic');
    targetSlide.classList.add('currentpic');
};

  
// when i click left , the slide moves right//

prevButton.addEventListener('click' , () => {
    
    count-- ;
    console.log(count);
    const currentSlide = track.querySelector('.currentpic') ;
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide2(track , currentSlide , prevSlide, count);

});

// when i click right , the whole container moves to  the left//

nextButton.addEventListener('click' , () => 
{
    // find the current slide first //

    const currentSlide = track.querySelector('.currentpic') ;

    // move to the next slide//
    if(count ==2){

        return;
    }

    const nextSlide = currentSlide.nextElementSibling;
    count++ ;
  
     moveToSlide(track, currentSlide, nextSlide , count );
     

});





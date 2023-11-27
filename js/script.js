const navLinks = document.querySelector('.menu');
const links = Array.from(navLinks.children);

navLinks.addEventListener('click', e => {
    const targetLink = e.target.closest('a');
    const checkbox = document.getElementById('check');
    const menu = document.querySelector('.menu');

    if(!targetLink) return;

        checkbox.checked = false;
});


//Carousel <-- NO LLEGUÉ A TIEMPO CON EL RESPONSIVE Y DÓNDE POSICIONARLO DEBIDO A CAMBIOS DE ÚLTIMO MOMENTO
//             QUEDA EL CÓDIGO COMENTADO PARA NO PERDERLO.

// const track = document.querySelector('.carousel__track'); // ul
// const slides = Array.from(track.children); //ul children a.k.a the images on li
// const nextButton = document.querySelector('.carousel__button--right');
// const prevButton = document.querySelector('.carousel__button--left');
// const dotsNav = document.querySelector('.carousel__nav'); //nav
// const dots = Array.from(dotsNav.children); // each single dot

// const slideWidth = slides[0].getBoundingClientRect().width;

// //arrange the slides
// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index +'px'
// }
// slides.forEach(setSlidePosition);



// //functions

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'TranslateX(-' + targetSlide.style.left +')';
//     //change current slide status
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
// }

// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// }

// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0){
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }
// }




// //left button functionality
// prevButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slides => slides === prevSlide);

//     //move to the next slide
//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevButton, nextButton, prevIndex);
// });




// //right button functionality
// nextButton.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex(slides => slides === nextSlide);
//     //move to the next slide
//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevButton, nextButton, nextIndex);
// });




// //nav dots slide functionality
// dotsNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button'); //ignores the nav and only works when clicking the buttons inside

//     if(!targetDot) return; //stops the function if clicks outside the buttons

//     const currentSlide = track.querySelector('.current-slide'); //current slide
//     const currentDot = dotsNav.querySelector('.current-slide'); //current dot
//     const targetIndex = dots.findIndex(dot => dot === targetDot); //targetDot index (clicked dot)
//     const targetSlide = slides[targetIndex]; //matchs the slide index with the dot index

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevButton, nextButton, targetIndex);
    

// });
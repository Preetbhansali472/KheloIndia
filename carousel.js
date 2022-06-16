const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const previousButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;


//Arange the slides to next another
const setSlidePosition = (slide, index)=>{
    slide.style.left = slideWidth*index + 'px';
}
slides.forEach(setSlidePosition);


//Moves the slide in both the direction 
const moveSlide = (track, currentSlide, targetSlide)=>{
    // const amoutToMove = targetSlide.style.left;
    track.style.transform = 'translate(-'+targetSlide.style.left+')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

}


//Update dots to have darker color on the targeted dot
const updateDots = (currentDot, targetDot)=>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


const hideShowButton = (slides, previousButton, nextButton, targetIndex)=>{
    if(targetIndex===0){
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if(targetIndex===slides.length-1){
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else{
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


//When i click, move slides to the right
nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide=>slide===nextSlide)

    moveSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowButton(slides, previousButton, nextButton, nextIndex)
})


//When i click, move slides to the left
previousButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide=>slide===prevSlide)

    moveSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowButton(slides, previousButton, nextButton, prevIndex)

})


//When i click the nav indicators, move to that slide
dotsNav.addEventListener('click', e=>{
    //What indicator was clicked on?
    const targetDot = e.target.closest('button');
    if(!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot=>dot===targetDot)
    const targetSlide = slides[targetIndex];

    moveSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowButton(slides, previousButton, nextButton, targetIndex);
    
})  





//------------------------------------Quotes JS-------------------------------------------------


fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "3e89f35bf4mshb0b988a60c0788bp15b9b3jsn7056052de93c"
	}
})
.then(response => response.json())
.then(response => {
    // console.log(response.content);
    const content_str = '"'+response.content+'"';
    // console.log(content_str.length)
    if(content_str.length<=350){
        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    }else{
        document.getElementById('quote').innerHTML = "Communism doesn't work because people like to own stuff."
        document.getElementById('author').innerHTML = "- Johnny Deep -"
    }
})
.catch(err => {
	console.log(err);
});
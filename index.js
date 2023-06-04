const sliderContainer = document.querySelector('.slider-container');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const sliderRowWidth = sliderContainer.clientWidth;
let currpos = 0;

sliderPrev.addEventListener('click', () => {
  currpos -= sliderRowWidth;
  sliderContainer.style.transform = `translateX(${currpos}px)`;
  console.log(currpos);
  if (currpos < 0) {
    currpos = 0;
    
    sliderContainer.style.transform = `translateX(${currpos}px)`;
  }
});
sliderNext.addEventListener('click', () => {
  currpos += sliderRowWidth;
  sliderContainer.style.transform = `translateX(${currpos}px)`;
  console.log(currpos);
  if (currpos > 0) {
    currpos = -sliderContainer.offsetWidth;
    
    sliderContainer.style.transform = `translateX(${currpos}px)`;
  }
 
});
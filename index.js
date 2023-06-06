$(document).ready(function() {
  const sliderContainer = $('.slider-container');
  const sliderRow = $('.inner-slider');
  const sliderRowbot = $('.inner-slider-bottom');
  const sliderPrev = $('.prev');
  const sliderNext = $('.next');
  const imgTop = $('.rownum2 img')
  const images = $('.slider-row img');
  console.log(images.eq(4).width())
  let currentSlide = images.length - 1;
  let currentSlideUp = imgTop.length - 1;
  var slidewidth = 0;
  var slidewidthUp = 0;
  sliderPrev.on('click', () => {
    if(currentSlide === images.length - 1 ) return;
    currentSlide = (currentSlide === images.length - 1) ? images.length - 1 : currentSlide + 1;
    const translateY = imgTop.eq(currentSlideUp).width();
    const translateX = images.eq(currentSlide).width();
    slidewidth = slidewidth - translateX;
    slidewidthUp = slidewidthUp - translateY;
    console.log(slidewidth);
    sliderRow.css('transform', `translateX(${slidewidthUp-5}px)`);
    sliderRowbot.css('transform', `translateX(${slidewidth-22}px)`);
  });
  
  sliderNext.on('click', () => {
    if(currentSlide === 0  ) return;
  const translateX = images.eq(currentSlide).width();
  const translateY = imgTop.eq(currentSlideUp).width();
  console.log(currentSlide);
    currentSlide = (currentSlide === 0) ? 0 : currentSlide - 1;
    console.log(currentSlide);
     slidewidth = slidewidth + translateX;
     slidewidthUp = slidewidthUp + translateY;
     console.log(slidewidth);
    sliderRow.css('transform', `translateX(${slidewidthUp+15}px)`);
    sliderRowbot.css('transform', `translateX(${slidewidth+25}px)`);
    
  });
});

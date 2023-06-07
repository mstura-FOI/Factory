$(document).ready(function() {
  const sliderContainer = $('.slider-container');
  const sliderRow = $('.inner-slider');
  const sliderRowbot = $('.inner-slider-bottom');
  const sliderPrev = $('.prev');
  const sliderNext = $('.next');
  const imgTop = $('.rownum2 img')
  const images = $('.slider-row img');
  let currentSlide = images.length - 1;
  let currentSlideUp = imgTop.length - 1;

  var slidewidth = 0;
  var slidewidthUp = 0;
  var growth = 0;
  var negGrowth =35;
  sliderPrev.on('click', () => {
    if(currentSlide === images.length - 1 ) return;
    
    currentSlide = (currentSlide === images.length - 1) ? images.length - 1 : currentSlide + 1;
    currentSlideUp = (currentSlideUp === imgTop.length - 1) ? imgTop.length - 1 : currentSlideUp + 1;
    
    const translateY = imgTop.eq(currentSlideUp+1).width();
    const translateX = images.eq(currentSlide).width();
    slidewidth = slidewidth - translateX;
    slidewidthUp = slidewidthUp - translateY;
    growth = growth-5;
    console.log(translateY);
    sliderRow.css('transform', `translateX(${slidewidthUp+growth}px)`);
    sliderRowbot.css('transform', `translateX(${slidewidth+growth}px)`);
  });
  
  sliderNext.on('click', () => {
    if(currentSlide === 0  ) return;
    
  const translateX = images.eq(currentSlide).width();
  const translateY = imgTop.eq(currentSlideUp).width();
    currentSlide = (currentSlide === 0) ? 0 : currentSlide - 1;
    currentSlideUp = (currentSlide === 0) ? 0 : currentSlideUp - 1;
     slidewidth = slidewidth + translateX;
     slidewidthUp = slidewidthUp + translateY;
     growth = growth+5;
    sliderRow.css('transform', `translateX(${slidewidthUp+growth}px)`);
    sliderRowbot.css('transform', `translateX(${slidewidth+growth}px)`);
    
  });
});

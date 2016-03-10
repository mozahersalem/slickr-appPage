// init the ScrollMagic slides
$(function() {
  var controller,
    i,
    slides;
  controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });
  slides = document.querySelectorAll('section.panel');
  i = 0;
  while (i < slides.length) {
    new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
      .setPin(slides[i])
      // .addIndicators()
      .addTo(controller);
    i++;
  }
});

// easing the animation of transition to next slide
$(document).ready(function() {
  $('.btnNextSlide').localScroll({
    duration: 1500 //time for slider
  });
});

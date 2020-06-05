const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
//END SECTION
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
  
  .setPin(intro)
  .addTo(controller);



//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;

  video.currentTime = delay;
}, 33.3);

//smooth scroll

$('.navbar a, .carousel-item a').on('click', function(e){
  if (this.hash !== ''){
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
})

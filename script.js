const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav a", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })

      tl.from("#herofooter a, #herofooter #iconset", {
        y: -10,
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: -1.5,
        
      })
   
}
function circleChaptaKaro() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets){
xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

xprev=dets.clientX;
yprev=dets.clientY;

// console.log(xdiff,ydiff);
circleMouseFollower(xscale , yscale);

  });
}

circleChaptaKaro();

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        // console.log(dets);
             
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;  })
};

circleMouseFollower();

firstPageAnim();


function anime(){
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".elem").forEach(function (elem) {
      var rotate = 0;
      var diffrot = 0;
  
      // Mouse leave event
      elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: "power3.out",
          duration: 0.5,
        });
      });
  
      // Mouse move event
      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: "power3.out",
          duration: 0.5,
          top: diff,
          left: dets.clientX,
          rotation: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      });
    });
  });
  
  
};

anime();


  
 


//You will never know why this works!!!
let minicircle = document.querySelector("#minicircle");
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
// document.querySelectorAll(".elem").forEach(function(elem) {
//   let rotate = 0;
//   let diffro = 0;
//   elem.addEventListener("mousemove", function(dets) {
//     let diff =  dets.clientY - elem.getBoundingClientRect().top;
//     console.log (diff)
//     diffro = dets.clientX - rotate ;
//     rotate = dets.clientX ;
//     gsap.to (elem.querySelector ("img"),{
//       opacity : 1,
//       ease : Power1 ,
//       left: dets.clientX ,
//       top: diff
//     });
//   });
// });
let menu = document.querySelector("#menu");
let namera = document.querySelector("#nammera");
let credit = document.querySelector("#crediteddiv");
let list = document.querySelector("#menukilist");
let timeout;
menu.style.cursor = "pointer";
menu.addEventListener("click", function() {
  list.style.opacity = "1";
  list.style.transition = "all ease 0.7s";
  
  // menu.addEventListener("click", function(){
  //   list.style.opacity = "0" ;
  //   list.style.transition = "all ease 0.5s";
  // })
  setTimeout(() => {
    list.style.opacity = "0";
    list.style.transition = "all ease 0.5s";
  }, 10000)
  
});
namera.style.cursor = "default"
namera.addEventListener("mouseover", function() {
  credit.style.opacity = "1",
    credit.style.transition = "all ease 0.7s"
});
namera.addEventListener("mouseout", function() {
  credit.style.opacity = "0",
    credit.style.transition = "all ease 0.7s"
});
function firstPageAnim() {
  let tl = gsap.timeline();
  tl.from("#nav", {
    y: '-10',
    duration: 1.5,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: -0.3
  })
  tl.to(".boundingelem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 0.5,
    stagger: .2
  })
  tl.from("#herofooter", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    delay: -1
  })
}
function circleChaptaKaro() {
  let xscale = 1;
  let yscale = 1;
  let xprev = 0;
  let yprev = 0;
  window.addEventListener("mousemove", function(dets) {
    clearTimeout(timeout);
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
    xprev = dets.clientX;
    yprev = dets.clientY;
    circleMouseFollower(xscale, yscale);
    timeout = setTimeout(function() {
      minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100)
  });
}
function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function(dets) {
    minicircle.style.display = "block"
    minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleMouseFollower();
firstPageAnim();
circleChaptaKaro();

let timeeee = document.querySelector ("#timebtabsdk");
let timeee = new Date ;
let timeeehr = timeee.getHours();
let timeeemin = timeee.getMinutes();

timeeee.textContent = `${timeeehr}:${timeeemin}`  ;
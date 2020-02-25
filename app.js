const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");

const tl = new TimelineMax();

tl.fromTo(hero, 1.5, { height: "0%" }, { height: "100%" })
  .fromTo(hero, 1, { width: "100%" }, { width: "80%" })
  .fromTo(slider, 2.5, { x: "-100%" }, { x: "0%" }, "-=2.5")
  .fromTo(logo, 1, { opacity: 0, x: 50 }, { opacity: 1, x: 0 }, "-=1")
  .fromTo(button, 1, { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "-=1");

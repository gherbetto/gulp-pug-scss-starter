import mainSlider from "./modules/mainSlider.js";
import { animate, spring } from "animejs";

window.addEventListener("load", function () {
  mainSlider();

  animate(".js-animate-logo", {
    scale: [
      { to: 1.25, ease: "inOut(3)", duration: 200 },
      { to: 1, ease: spring({ bounce: 0.7 }) },
    ],
    loop: true,
    loopDelay: 250,
  });
});

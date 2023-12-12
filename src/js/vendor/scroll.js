import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function scroll(selector) {
  gsap.registerPlugin(ScrollTrigger);

  const scrollItem = new LocomotiveScroll({
    el: document.querySelector(selector),
    smooth: true,
    scrollFromAnywhere: false,
    getDirection: true,
    smartphone: {
      breakpoint: 640,
    },
    tablet: {
      breakpoint: 640,
    },
  });

  scrollItem.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(selector, {
    scrollTop(value) {
      return arguments.length
        ? scrollItem.scrollTo(value, { duration: 0, disableLerp: true })
        : scrollItem.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(selector).style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => scrollItem.update());
  ScrollTrigger.defaults({ scroller: selector });

  return scrollItem;
}

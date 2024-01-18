import "../css/style.css";
import { setAnims } from "./vendor/animations";
import { setForms } from "./vendor/forms";
import { setModals } from "./vendor/modals";
import { scroll } from "./vendor/scroll";
import { setSliders } from "./vendor/sliders";
import $ from "jquery";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    let mainScroll = null;
    if ($("[data-scroll-container]").length > 0) {
      mainScroll = scroll(".main-scroll");
    }
    setForms();
    setAnims(mainScroll);
    setSliders();
    setModals(mainScroll);
  },
  false
);

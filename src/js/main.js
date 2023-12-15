import "../css/style.css";
import { setAnims } from "./vendor/animations";
import { setForms } from "./vendor/forms";
import { setModals } from "./vendor/modals";
import { scroll } from "./vendor/scroll";
import { setSliders } from "./vendor/sliders";

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const mainScroll = scroll(".main-scroll");
    setForms();
    setAnims(mainScroll);
    setSliders();
    setModals();
  },
  false
);

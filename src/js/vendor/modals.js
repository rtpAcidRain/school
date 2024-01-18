import $ from "jquery";
import { setActiallySlider } from "./sliders";
import { setDrops } from "./animations";

export function setModals(mainScroll) {
  const modalOpenButs = $("[data-modal]");
  let page_loadCache;

  $(".modal").on("click", () => closeModals());
  $(".modal__close").on("click", () => closeModals());
  $(".modal__container").on("click", function (e) {
    e.stopPropagation();
  });

  const closeModals = (callBack, modal = ".modal") => {
    $(modal).removeClass("show");
    setTimeout(function () {
      $(modal).removeClass("opened");
      $("html").removeClass("isSomethinOpened");
      if (!!callBack) {
        callBack();
      }
    }, 800);
  };

  const openModals = (modal, page_load) => {
    $("html").addClass("isSomethinOpened");
    if (modal.attr("id") === "archOs") {
      const prod = modal.find("#productInner");
      if (page_loadCache !== page_load) {
        modal.addClass("loading");
        prod.empty();
        prod.load(
          page_load + " #productPageElem",
          function (response, status, xhr) {
            if (status === "success") {
              checkActualModals($("#productInner [data-modal]"));
              setActiallySlider($("#productInner .slider"));
              setDrops($("#productInner .drop-down"), mainScroll);
              modal.removeClass("loading");
            }
          }
        );
      }
      page_loadCache = page_load;
    }
    modal.addClass("opened");
    modal.addClass("show");
  };

  const checkActualModals = (els) => {
    els.each(function () {
      const $this = $(this);
      const modId = $this.data("modal");
      const modal = $(`${modId}`);
      const page_load = $this.data("page");
      $this.on("click", function (e) {
        e.preventDefault();
        if (!$("html").hasClass("isSomethinOpened")) {
          return openModals(modal, page_load);
        }
        closeModals(() => openModals(modal, page_load));
      });
    });
  };

  checkActualModals(modalOpenButs);

  // opened show
}

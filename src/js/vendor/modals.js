import $ from "jquery";

export function setModals() {
  const modalOpenButs = $("[data-modal]");

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

  const openModals = (modal) => {
    $("html").addClass("isSomethinOpened");
    modal.addClass("opened");
    modal.addClass("show");
  };

  $(".modal").on("click", () => closeModals());
  $(".modal__close").on("click", () => closeModals());
  $(".modal__container").on("click", function (e) {
    e.stopPropagation();
  });

  modalOpenButs.each(function () {
    const $this = $(this);
    const modId = $this.data("modal");
    const modal = $(`${modId}`);

    $this.on("click", function (e) {
      e.preventDefault();
      if (!$("html").hasClass("isSomethinOpened")) {
        return openModals(modal);
      }
      closeModals(() => openModals(modal));
    });
  });
  // opened show
}

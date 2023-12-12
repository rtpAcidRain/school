import Inputmask from "inputmask";

export function setForms() {
  if ($(".input").length > 0) {
    function inputOnClick(el) {
      el.addClass("active");
    }

    function setInputs(el) {
      if (el.find(".input__item").val().trim().length < 1) {
        el.removeClass("active");
      } else {
        inputOnClick(el);
      }
    }

    let inp = $(".input");

    inp.each(function () {
      const $this = $(this);
      setInputs($this);

      $this.find(".input__item").on("focus", function () {
        inputOnClick($this);
      });

      $this.find(".input__item").on("blur", function () {
        setInputs($this);
      });
    });

    if ($(".input").hasClass("input--phone")) {
      let sm = new Inputmask({
        mask: "+7(999)999-99-99",
        showMaskOnHover: false,
      });
      sm.mask($(".input.input--phone").children("input"));
    }
  }

  //   if ($("textarea").length > 0) {
  //     const textareas = $("textarea");

  //     textareas.each(function () {
  //       $(this).on("input", function () {
  //         if ($(this).val().trim().length < 1) {
  //           $(this).css(
  //             "height",
  //             "calc(calc(var(--scale-rem) * 0.95) + var(--plusheight))"
  //           );
  //         } else {
  //           $(this).css("height", $(this).get(0).scrollHeight + "px");
  //         }
  //       });
  //     });
  //   }

  //   if ($(".check__container").length > 0) {
  //     const checks = $(".check__container");

  //     checks.each(function () {
  //       const $this = $(this);
  //       $this.find('[type="submit"]').attr("disabled", "true");
  //       $this.find('[type="checkbox"]').removeAttr("checked");

  //       $this.find('[type="checkbox"]').change(function () {
  //         if ($(this).is(":checked")) {
  //           $this.find('[type="submit"]').removeAttr("disabled");
  //         } else {
  //           $this.find('[type="submit"]').attr("disabled", "true");
  //         }
  //       });
  //     });
  //   }

  //   if ($(".search-input").length > 0) {
  //     const search = $(".search-input");
  //     // const searchInput = search.find("input");

  //     // searchInput.on("focus", function () {
  //     //   search.addClass("active");
  //     // });

  //     // searchInput.on("blur", function () {
  //     //   if ($(this).val().trim().length < 1) {
  //     //     search.removeClass("active");
  //     //   }
  //     // });

  //     // searchInput.on("input", function () {
  //     //   if ($(this).val().trim().length < 1) {
  //     //     search.find(".search-input__reset").addClass("display-none");
  //     //   } else {
  //     //     search.find(".search-input__reset").removeClass("display-none");
  //     //   }
  //     // });

  //     $(".search-block__recomendation a").on("click", function (e) {
  //       e.preventDefault();

  //       search.val($(this).find("span").text());
  //     });
  //   }
}

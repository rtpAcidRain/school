import $ from "jquery";

function setPartners(scrollset) {
  if ($(".partners-carousel").length > 0) {
    if ($(".line-scroll__cont").length > 0) {
      var oQuotes = document.querySelectorAll(".line-scroll__cont");

      function fDoublingQuotes() {
        oQuotes.forEach((el) => {
          let nElem = el.children.length;

          for (let i = 0; i < nElem; i++) {
            el.appendChild(el.children[i].cloneNode(true));
          }
          el.style.animationDuration = 22 + "s";
        });
      }

      fDoublingQuotes();
    }

    function b(el, pos) {
      var elementTop = el.offset().top;
      var leftPosition = ((elementTop * elementTop) / elementTop) * 0.15;
      if (pos === "left") {
        el.find(".line-scroll__cont").css({ left: leftPosition });
      } else {
        el.find(".line-scroll__cont").css({ right: leftPosition });
      }
    }

    function a() {
      if (
        $(".partners-carousel").offset().top - $(window).height() <= 0 &&
        $(".partners-carousel").offset().top * -1 <
          $(".partners-carousel").height()
      ) {
        $(".line-scroll-left").each(function () {
          b($(this), "left");
        });

        $(".line-scroll-right").each(function () {
          b($(this), "right");
        });
      }
    }

    if (!!scrollset) {
      scrollset.on("scroll", ({}) => {
        a();
      });
    }

    $(window).on("load resize", function () {
      a();
    });
  }
}

function setTeachers(scrollset) {
  if ($(".teachers-slide").length > 0) {
    $(".teachers-slide").each(function () {
      const $this = $(this);

      $this.find(".teachers-slide__button").click((e) => {
        e.preventDefault();
        e.stopPropagation();
        $(".teachers-slide").not($this).removeClass("active");
        $this.toggleClass("active");
      });
    });

    $(".teachers-slide__info").click(function (e) {
      e.stopPropagation();
    });

    $("body").click(function () {
      $(".teachers-slide").removeClass("active");
    });
    if (!!scrollset) {
      $(".teachers-slide__info__desk").on("mouseenter", function () {
        scrollset.stop();
      });
      $(".teachers-slide__info__desk").on("mouseleave", function () {
        scrollset.start();
      });
    }
  }
}

function setDrops(scrollset) {
  $(".drop-down").each(function () {
    const $this = $(this);
    $this.find(".drop-down__open").on("click", function () {
      $(".drop-down").not($this).removeClass("active");
      $this.toggleClass("active");
      if (!!scrollset) {
        setTimeout(function () {
          scrollset.update();
        }, 550);
      }
    });
  });
}

function setHeader(scrollset) {
  let onScroll = false;
  let time;
  function hideHeader() {
    clearTimeout(time);
    $(".header").css("top", -$(".header").height() + "px");
    $(".header").css("transition", "top 0.4s ease");
    $(".header").css("top", "0px");
    time = setTimeout(function () {
      $(".header").css("transition", "");
    }, 400);
    $(".header").addClass("scroll hide-subnav");

    onScroll = true;
  }

  function showHeader() {
    clearTimeout(time);
    $(".header").css("transition", "");

    $(".header").removeClass("hide-subnav");
    $(".header").removeClass("scroll");
    onScroll = false;
  }
  // console.log($(window).offset())
  scrollset.on("scroll", ({ scroll, direction }) => {
    if (direction === "down") {
      if (scroll.y <= $(".header").height()) {
        $(".header").css("top", -scroll.y + "px");
      } else if (
        scroll.y <= $(window).height() - $(".header").height() &&
        !$(".header").hasClass("scroll hide-subnav")
      ) {
        $(".header").css("top", "-100%");
        showHeader();
      } else {
        if (!onScroll) {
          hideHeader();
        }
      }
    } else {
      if (scroll.y <= $(".header").height()) {
        if ($(".header").hasClass("scroll hide-subnav")) {
          $(".header").css("top", "0px");
          if (scroll.y === 0) {
            showHeader();
          }
        } else {
          $(".header").css("top", -scroll.y + "px");
        }
      }
    }
  });
}

export const setAnims = (scrollset) => {
  setPartners(scrollset);
  setTeachers(scrollset);
  setDrops(scrollset);
  if (!!scrollset) {
    setHeader(scrollset);
  }
};

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const setSliders = () => {
  $(".slider").each(function () {
    const slider = new Swiper(`#${$(this).attr("id")}`, {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 18,
      loop: true,
      pagination: {
        el: `#${$(this).attr("id")} .swiper-pagination`,
        clickable: true,
      },
      navigation: {
        nextEl: null,
        prevEl: null,
      },
    });

    if ($(this).hasClass("slider-width-text")) {
      const setActiveTextSlide = (ind) => {
        $(`.${$(this).data("text")}__slide`).removeClass("active");
        $(`.${$(this).data("text")}__slide`)
          .eq(ind)
          .addClass("active");
      };

      $(`.${$(this).data("text")} .slider-button-next`).click(() => {
        slider.slideNext();
        setActiveTextSlide(slider.realIndex);
      });

      $(`.${$(this).data("text")} .slider-button-prev`).click(() => {
        slider.slidePrev();
        $(`.${$(this).data("text")}__slide`).removeClass("active");
        setActiveTextSlide(slider.realIndex);
      });
    }
  });

  $(".slider--v2").each(function () {
    let pcSlides = 3;
    if ($(this).hasClass("swiper--auto-slides")) {
      pcSlides = "auto";
    }

    const slider = new Swiper(`#${$(this).attr("id")} .swiper`, {
      modules: [Pagination, Navigation],
      slidesPerView: "auto",
      spaceBetween: 18,
      pagination: {
        el: `#${$(this).attr("id")} .swiper-pagination`,
      },
      navigation: {
        nextEl: `#${$(this).attr("id")} .slider-button-next`,
        prevEl: `#${$(this).attr("id")} .slider-button-prev`,
      },

      breakpoints: {
        640: {
          slidesPerView: pcSlides,
        },
      },
    });
  });
};

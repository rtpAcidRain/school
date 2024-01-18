import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import $ from "jquery";

export const setActiallySlider = (els) => {
  els.each(function () {
    const $this = $(this);
    const sliderId = $this.attr("id");
    const $textSlider = $this.parents(".slider-width-text").prev();
    const $textChild = $($textSlider).find(`.${$this.data("text")}__slide`);
    const autoplay = $(this).hasClass("reels") ? { delay: 3000 } : false;

    const slider = new Swiper(`#${sliderId}`, {
      modules: [Pagination, Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 18,
      loop: !$(this).hasClass("reels"),
      pagination: {
        el: `#${sliderId} .swiper-pagination`,
        clickable: !$(this).hasClass("reels"),
      },
      autoplay: autoplay,
      navigation: {
        nextEl: null,
        prevEl: null,
      },
    });

    if ($this.hasClass("slider-width-text")) {
      if ($this.hasClass("text-slider-active")) {
        slider.on("transitionStart", () => {
          $textChild.removeClass("active");
          $textChild.eq(slider.realIndex).addClass("active");
        });
      }

      $($(`.${$this.data("text")} .slider-button-prev`)).on("click", () => {
        slider.slidePrev();
      });

      $($(`.${$this.data("text")} .slider-button-next`)).on("click", () => {
        slider.slideNext();
      });
    }
  });
};

export const setSliders = () => {
  setActiallySlider($(".slider"));
  $(".slider--v2").each(function () {
    const $this = $(this);
    const sliderId = $this.attr("id");
    const pcSlides = $this.hasClass("swiper--auto-slides") ? "auto" : 3;

    new Swiper(`#${sliderId} .swiper`, {
      modules: [Pagination, Navigation],
      slidesPerView: "auto",
      spaceBetween: 18,
      pagination: {
        el: `#${sliderId} .swiper-pagination`,
      },
      navigation: {
        nextEl: `#${sliderId} .slider-button-next`,
        prevEl: `#${sliderId} .slider-button-prev`,
      },
      breakpoints: {
        640: {
          slidesPerView: pcSlides,
        },
      },
    });
  });
};

// export const setSliders = () => {
//   $(".slider").each(function () {
//     const $this = $(this);

//     const slider = new Swiper(`#${$(this).attr("id")}`, {
//       modules: [Pagination],
//       slidesPerView: 1,
//       spaceBetween: 18,
//       loop: true,
//       pagination: {
//         el: `#${$(this).attr("id")} .swiper-pagination`,
//         clickable: true,
//       },
//       navigation: {
//         nextEl: null,
//         prevEl: null,
//       },
//     });

//     if ($this.hasClass("slider-width-text")) {
//       if ($this.hasClass("text-slider-active")) {
//         const $textChild = $this
//           .parent()
//           .prev()
//           .find(`.${$this.data("text")}__slide`);
//         slider.on("transitionStart", function () {
//           $textChild.removeClass("active");
//           $textChild.eq(slider.realIndex).addClass("active");
//         });
//       }

//       $(`.${$this.data("text")} .slider-button-next`).on("click", () => {
//         slider.slideNext();
//       });

//       $(`.${$this.data("text")} .slider-button-prev`).on("click", () => {
//         slider.slidePrev();
//       });
//     }
//   });

//   $(".slider--v2").each(function () {
//     const $this = $(this);

//     let pcSlides = 3;
//     if ($this.hasClass("swiper--auto-slides")) {
//       pcSlides = "auto";
//     }

//     const slider = new Swiper(`#${$this.attr("id")} .swiper`, {
//       modules: [Pagination, Navigation],
//       slidesPerView: "auto",
//       spaceBetween: 18,
//       pagination: {
//         el: `#${$this.attr("id")} .swiper-pagination`,
//       },
//       navigation: {
//         nextEl: `#${$this.attr("id")} .slider-button-next`,
//         prevEl: `#${$this.attr("id")} .slider-button-prev`,
//       },

//       breakpoints: {
//         640: {
//           slidesPerView: pcSlides,
//         },
//       },
//     });
//   });
// };

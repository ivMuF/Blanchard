const partnersSlider = new Swiper(".js-partners-slider", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },

  spaceBetween: 20,
  pagination: {
    el: ".js-partners-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".js-partners-next",
    prevEl: ".js-partners-prev",
    disabledClass: "nav-btn--disabled"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    971: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    1421: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
});

const eventsSlider = new Swiper(".js-event-slider", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },

  spaceBetween: 20,
  pagination: {
    el: ".js-event-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".js-event-next",
    prevEl: ".js-event-prev",
    disabledClass: "nav-btn--disabled"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    971: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1421: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
});

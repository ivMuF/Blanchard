const galleryChoicesSelect = document.querySelector('.js-gallery-choices');
const galleryChoices = new Choices(galleryChoicesSelect, {
  shouldSort: false,
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',

  classNames: {
    containerOuter: 'filter-choices gallery__choices',
    containerInner: 'filter-choices__inner',
    input: 'filter-choices__input',
    inputCloned: 'filter-choices__input--cloned',
    list: 'filter-choices__list',
    listItems: 'filter-choices__list--multiple',
    listSingle: 'filter-choices__list--single',
    listDropdown: 'filter-choices__list--dropdown',
    item: 'filter-choices__item',
    itemSelectable: 'filter-choices__item--selectable',
    itemDisabled: 'filter-choices__item--disabled',
    itemChoice: 'filter-choices__item--choice',
    placeholder: 'filter-choices__placeholder',
    group: 'filter-choices__group',
    groupHeading: 'filter-choices__heading',
    button: 'filter-choices__button',
    activeState: 'is-active',
    focusState: 'is-focused',
    openState: 'is-open',
    disabledState: 'is-disabled',
    highlightedState: 'is-highlighted',
    selectedState: 'is-selected',
    flippedState: 'is-flipped',
    loadingState: 'is-loading',
    noResults: 'has-no-results',
    noChoices: 'has-no-choices'
  },
});

let gallerySlider = new Swiper(".js-gallery-slide", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery__swiper .gallery-pagination",
    type: "fraction"
    },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
    disabledClass: "nav-btn--disabled"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    1281: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

});

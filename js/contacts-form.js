var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-99-99-99");

im.mask(selector);

new JustValidate('.js-contacts', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 12,
      strength: {
        default: true,
        custom: '^[а-яА-ЯёЁa-zA-Z]+$'
      }
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: {
      required: 'Обязательно нужно заполнить',
      minLength: 'Слишком коротке имя',
      maxLength: 'Слишком длинное имя',
      strength: 'Недопустимый формат'
    },
    tel: {
      required: 'Обязательно нужно заполнить'
    },
  },
});

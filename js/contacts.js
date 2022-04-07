var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) - 99 - 99 - 99");

im.mask(selector);

new JustValidate('.contacts-js', {

  rules: {

    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.Inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
    },
  },

  messages: {
    name: {
      minLength: 'Слишком коротке имя',
      maxLength: 'Слишком длинное имя',
      required: 'Обязательно нужно заполнить'
    },

    tel: {
      required: 'Обязательно нужно заполнить'
    },
  },

});

// MAP

ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14,
        controls: []
    });

    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
          bottom: '380px',
          right: '20px'
      }
    });

    myMap.controls.add('geolocationControl', {
      position: {
          bottom: '320px',
          right: '20px'
      }
    })

   var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts-point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);

    var myMap = new ymaps.Map("mapTable", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: []
    });

    var myPlacemarkTable = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts-point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemarkTable);

    var myMap = new ymaps.Map("mapMobile", {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: []
    });

    var myPlacemarkMobile = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/contacts-point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemarkMobile);

};

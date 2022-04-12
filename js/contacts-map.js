
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

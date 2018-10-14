  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          center: [59.938631, 30.323055],
          controls:['fullscreenControl', 'zoomControl', 'geolocationControl'],
          zoom: 16
      }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8, офис 101'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map-pin.svg',
        iconImageSize: [67, 100],
        iconImageOffset: [-38, -95]
    });

myMap.geoObjects
    .add(myPlacemark);
  }

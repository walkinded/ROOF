ymaps.ready(function () {
  var myMap = new ymaps.Map('contacts__map', {
          center: [44.940386, 34.075193],
          zoom: 18,
          controls: ['zoomControl']
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark1 = new ymaps.Placemark([44.940386, 34.075193],
        {
          hintContent: 'г. Симферополь <br> ул. Генерала Васильева, 30 з',
          balloonContent: 'г. Симферополь <br> ул. Генерала Васильева, 30 з'
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/icons/placeholder.svg',
          // Размеры метки.
          iconImageSize: [30, 30],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -25]
        }),
      myPlacemark2 = new ymaps.Placemark([44.616495, 33.525135],
        {
          hintContent: 'г. Севастополь <br> ул. Генерала Васильева, 30 з',
          balloonContent: 'г. Севастополь <br> ул. Генерала Васильева, 30 з'
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/icons/placeholder.svg',
          // Размеры метки.
          iconImageSize: [30, 30],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-15, -25]
        }),
      myPlacemark3 = new ymaps.Placemark([45.026654, 35.383911],
      {
        hintContent: 'г. Феодосия <br> ул. Генерала Васильева, 30 з',
        balloonContent: 'г. Феодосия <br> ул. Генерала Васильева, 30 з'
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/icons/placeholder.svg',
        // Размеры метки.
        iconImageSize: [30, 30],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-15, -25]
      });


  myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3);
  myMap.behaviors.disable('scrollZoom');

  const setSimferopol = document.querySelector('#setSimferopol'),
        setSevastopol = document.querySelector('#setSevastopol'),
        setFeodosoya = document.querySelector('#setFeodosoya');

  setSimferopol.addEventListener('click', () => {
    myMap.setCenter([44.940386, 34.075193]);
  });

  setSevastopol.addEventListener('click', () => {
    myMap.setCenter([44.616495, 33.525135]);
  });

  setFeodosoya.addEventListener('click', () => {
    myMap.setCenter([45.026654, 35.383911]);
  });
  
});


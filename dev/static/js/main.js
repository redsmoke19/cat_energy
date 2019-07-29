$(document).ready(function () {
    svg4everybody({});

  var mainNav = document.querySelector('.main-nav');
  mainNav.classList.remove('main-nav--nojs');

  var sandwich = function () {
      $(document).on('click', '.sandwich', function () {
          $(this).toggleClass('sandwich--active');
          $('.main-nav').toggleClass('main-nav--active');
      });
  };

  function initMap() {
    var coordinates = {lat: 59.938808, lng: 30.323026},
        map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 14
        });
  }

  sandwich();
  initMap();

});
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

  sandwich();

});
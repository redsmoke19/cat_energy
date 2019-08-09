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

  var slickBefore = document.querySelector('.comparions__buttons--before');
  var slickAfter = document.querySelector('.comparions__buttons--after');
  var slick = document.querySelector('.comparions__slick');
  var imageBefore = document.querySelector('.comparions__image--before');
  var imageAfter = document.querySelector('.comparions__image--after');

  slickBefore.addEventListener('click', function (evt) {
    evt.preventDefault();
    slick.classList.remove('comparions__slick--after');
    slick.classList.add('comparions__slick--before');
    imageBefore.style.display = "";
    imageAfter.style.display = "";
  });

  slickAfter.addEventListener('click', function (evt) {
    evt.preventDefault();
    slick.classList.remove('comparions__slick--before');
    slick.classList.add('comparions__slick--after');
    imageBefore.style.display = "none";
    imageAfter.style.display = "block";
  })

});
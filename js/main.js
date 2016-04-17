var navButton = document.querySelector('.menu-btn');

navButton.addEventListener('click', function() {
  console.log('menu click!');
  document
    .querySelector('.nav-menu')
    .classList
    .toggle('on-click');
});

var navButton1 = document.querySelector('.fa-coffee');

navButton1.addEventListener('click', function() {
  console.log('amenity click!');
  document
    .querySelector('.fa-coffee')
    .classList
    .toggle('on-click');
});

var navButton2 = document.querySelector('.fa-fire');

navButton2.addEventListener('click', function() {
  console.log('amenity click!');
  document
    .querySelector('.fa-fire')
    .classList
    .toggle('on-click');
});

var navButton3 = document.querySelector('.fa-glass');

navButton3.addEventListener('click', function() {
  console.log('amenity click!');
  document
    .querySelector('.fa-glass')
    .classList
    .toggle('on-click');
});
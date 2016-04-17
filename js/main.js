var navButton = document.querySelector('.menu-btn');

navButton.addEventListener('click', function() {
  console.log('menu click!');
  document
    .querySelector('.nav-menu')
    .classList
    .toggle('on-click');
});
'use strict';

var TABLET_WIDTH = 768;
var navigationButton = document.querySelector('.navigation__toggle');
var navigationPane = document.querySelector('.nav-list');

if (navigationButton.classList.contains('navigation__toggle--close')) {
  navigationButton.classList.remove('navigation__toggle--close');
  navigationButton.classList.add('navigation__toggle--open');
}

if (window.innerWidth <= TABLET_WIDTH) {
  navigationPane.classList.add('nav-list--close');
}

navigationButton.addEventListener('click', function () {
  if (navigationButton.classList.contains('navigation__toggle--open')) {
    navigationButton.classList.remove('navigation__toggle--open');
    navigationButton.classList.add('navigation__toggle--close');
    navigationPane.classList.remove('nav-list--close');
  } else {
    navigationButton.classList.remove('navigation__toggle--close');
    navigationButton.classList.add('navigation__toggle--open');
    navigationPane.classList.add('nav-list--close');
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth > TABLET_WIDTH) {
    if (navigationPane.classList.contains('nav-list--close')) {
      navigationPane.classList.remove('nav-list--close');
      navigationButton.classList.remove('navigation__toggle--close');
      navigationButton.classList.add('navigation__toggle--open');
    } else {
      navigationButton.classList.remove('navigation__toggle--open');
      navigationButton.classList.add('navigation__toggle--close');
    }
  }
});


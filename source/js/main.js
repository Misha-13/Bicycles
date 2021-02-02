'use strict';

(function () {
  var TABLET_WIDTH = 768;
  var navigationButton = document.querySelector('.navigation__toggle');
  var navigationPane = document.querySelector('.nav-list');

  var setNavToggleClose = function () {
    navigationButton.classList.remove('navigation__toggle--open');
    navigationButton.classList.add('navigation__toggle--close');
  };

  var setNavToggleOpen = function () {
    navigationButton.classList.remove('navigation__toggle--close');
    navigationButton.classList.add('navigation__toggle--open');
  };

  var setDefaultNav = function () {
    if (navigationButton.classList.contains('navigation__toggle--close')) {
      setNavToggleOpen();
    }

    if (window.innerWidth <= TABLET_WIDTH) {
      navigationPane.classList.add('nav-list--close');
    }
  };

  var addNavEvents = function () {
    navigationButton.addEventListener('click', function () {
      if (navigationButton.classList.contains('navigation__toggle--open')) {
        setNavToggleClose();
        navigationPane.classList.remove('nav-list--close');
      } else {
        setNavToggleOpen();
        navigationPane.classList.add('nav-list--close');
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > TABLET_WIDTH) {
        if (navigationPane.classList.contains('nav-list--close')) {
          navigationPane.classList.remove('nav-list--close');
          setNavToggleOpen();
        } else {
          setNavToggleClose();
        }
      }
    });
  };

  window.nav = {
    setNav: function () {
      if (navigationButton && navigationPane) {
        setDefaultNav();
        addNavEvents();
      }
    }
  };

})();

window.nav.setNav();

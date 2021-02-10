'use strict';

(function () {
  var TABLET_WIDTH = 768;
  var body = document.querySelector('.page-body');
  var navigationBlock = document.querySelector('.navigation');
  var navigationButton = document.querySelector('.navigation__toggle');
  var navigationPane = document.querySelector('.nav-list');
  var navigationLink = document.querySelectorAll('.nav-list__element');

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
      navigationButton.classList.remove('navigation__toggle--hide');
      navigationPane.classList.remove('nav-list--no-js');
      setNavToggleOpen();
    }

    if (window.innerWidth <= TABLET_WIDTH) {
      navigationPane.classList.add('nav-list--close');
    }
  };

  var hideMobileNav = function () {
    navigationPane.classList.remove('nav-list--open');
    body.classList.remove('page-body--hiden');
    navigationBlock.classList.remove('navigation--open');
  };

  var addNavEvents = function () {
    navigationButton.addEventListener('click', function () {
      if (navigationButton.classList.contains('navigation__toggle--open')) {
        setNavToggleClose();
        navigationPane.classList.remove('nav-list--close');
        navigationPane.classList.add('nav-list--open');
        body.classList.add('page-body--hiden');
        navigationBlock.classList.add('navigation--open');
      } else {
        setNavToggleOpen();
        navigationPane.classList.add('nav-list--close');
        /* navigationPane.classList.remove('nav-list--open');
        body.classList.remove('page-body--hiden');
        navigationBlock.classList.remove('navigation--open'); */
        hideMobileNav();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > TABLET_WIDTH) {
        setNavToggleOpen();
        if (navigationPane.classList.contains('nav-list--close')) {
          navigationPane.classList.remove('nav-list--close');
        } else {
          /* navigationPane.classList.remove('nav-list--open');
          body.classList.remove('page-body--hiden');
          navigationBlock.classList.remove('navigation--open'); */
          hideMobileNav();
        }
      }
    });

    for (var i = 0; i < navigationLink.length; i++) {
      navigationLink[i].addEventListener('click', function () {
        setNavToggleOpen();
        /* navigationPane.classList.remove('nav-list--open');
        body.classList.remove('page-body--hiden');
        navigationBlock.classList.remove('navigation--open'); */
        hideMobileNav();
      });
    }
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

(function ($) {
  'use strict';
  $(document).ready(function () {
    // Hamburger menu icon
    $('.hamburger-menu').click(function () {
      $(this).toggleClass('is-active');
    });

    // Scroll to anchor
    $(function () {
      $('a.get-link').on('click', function (event) {
        var $anchor = $(this);
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr('href')).offset().top - 30,
            },
            1000,
            'easeInOutExpo'
          );
        event.preventDefault();
      });

      if (window.location.hash) {
        $('html,body').animate(
          {
            scrollTop: $(window.location.hash).offset().top - 80,
          },
          1000,
          'swing'
        );
      }
    });

    // Close navbar, after click on link
    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').toggleClass('show');
      $('.hamburger-menu').toggleClass('is-active');
    });

    // Nav
    $(window).scroll(function () {
      if ($(window).scrollTop() > 35) {
        $('.navmenu').addClass('blurred-nav-fixed');
      } else {
        $('.navmenu').removeClass('blurred-nav-fixed');
      }

      // Change navbar logo (after scroll)
      if ($(this).scrollTop() > 35) {
        $('.logo-nav').attr('src', '/img/logo.svg');
      }
      if ($(this).scrollTop() < 35) {
        $('.logo-nav').attr('src', '/img/logo-white.svg');
      }
    });

    // Horizontal Scroll timeline
    const slider = document.querySelector('.roadmap');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    });
  });
})(jQuery);

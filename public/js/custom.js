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

    // Contact form
    $('#contactForm')
      .validator()
      .on('submit', function (event) {
        if (event.isDefaultPrevented()) {
          formError();
          submitMSG(false, 'Please fill in all fields!');
        } else {
          event.preventDefault();
          submitForm();
        }
      });

    function submitForm() {
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      $.ajax({
        type: 'POST',
        url: '/contactform/send.php',
        data: '&name=' + name + '&email=' + email + '&message=' + message,
        success: function (text) {
          if (text == 'success') {
            formSuccess();
          } else {
            formError();
            submitMSG(false, text);
          }
        },
      });
    }

    function formSuccess() {
      $('#contactForm')[0].reset();
      submitMSG(true, 'Your message has been sent!');
    }

    function formError() {
      $('#contactForm')
        .removeClass()
        .addClass('shake animated')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
      if (valid) {
        var msgClasses = 'text-center tada animated form-success';
      } else {
        var msgClasses = 'text-center form-error';
      }
      $('#msgSubmit').removeClass().addClass(msgClasses).text(msg);
    }

    // // Page loader
    // var pageLoaderComponent = document.querySelector('.page-loader');
    // pageLoaderComponent.style.opacity = 0;
    // setTimeout(function () {
    //   pageLoaderComponent.style.display = 'none';
    // }, 1000);
  });
})(jQuery);

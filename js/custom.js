
/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function () {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  /*  smoothscroll
  ----------------------------------------------*/
  $(function () {
    $('#home a, .navbar-default a').bind('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });



  /* home slideshow section
  -----------------------------------------------*/
  $(function () {
    jQuery(document).ready(function () {
      $('#home').backstretch([
        "images/glasspartition.jpg",
        "images/glassdoor.jpg",
        "images/fabricmesh.jpeg",
      ], { duration: 2000, fade: 750 });
    });
  })


  /* Flexslider
   -----------------------------------------------*/
  $(window).load(function () {
    $('.flexslider').flexslider({
      animation: "slide"
    });
  });


  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#about').parallax("100%", 0.1);
    $('#feature').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.1);
    $('#myCarousel').parallax("100%", 0.3);
    $('#clients').parallax("100%", 0.3);
    $('#footer').parallax("100%", 0.2);
  }
  initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#gallery .col-md-4 a').nivoLightbox({
    effect: 'fadeScale',
  });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

});



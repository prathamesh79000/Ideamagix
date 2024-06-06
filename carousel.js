$(document).ready(function () {
  // Initialize Owl Carousel for hospital section
  $(".hospital-cards-2").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true, // Enable dots navigation
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Initialize Owl Carousel for patient stories section
  $(".patient-stories-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true, // Enable dots navigation
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Initialize Owl Carousel for doctors section
  $(".doc-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true, // Enable dots navigation
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Smooth scrolling for navigation
  $("#owl-nav a").on("click", function (e) {
    e.preventDefault(); // Prevent default behavior of anchor links
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
    window.location.hash = target;
  });

  // Smooth scrolling on page load if there's a hash in the URL
  if (window.location.hash) {
    var target = window.location.hash;
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      800
    );
  }
});

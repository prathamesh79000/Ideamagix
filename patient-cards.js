$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
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

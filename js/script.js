let menuToggle = document.getElementById("js-menu-toggle");
let primaryMenu = document.getElementById("js-open-menu-toggle");

menuToggle.addEventListener('click', function() {
  primaryMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

//slick function

$(".autoplay").slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 8000,
});

$(".multiple-items").slick({
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

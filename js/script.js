// declaração das variáveis do menu mobile
const menuToggle = document.getElementById("js-menu-toggle");
const primaryMenu = document.getElementById("js-open-menu-toggle");
const accessibilityMenu = document.getElementById("js-accessibility-menu-open");

// função que adiciona ou remove a classe active dos elementos
menuToggle.addEventListener('click', function() {
  primaryMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
  accessibilityMenu.classList.toggle('active');
});

// função que obriga o menu mobile fechar caso a tela seja maior que 1200px
document.body.onresize = function () {
  if (document.body.clientWidth >= 1200) {
    primaryMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    accessibilityMenu.classList.remove("active");
  }
};

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
        centerPadding: "60px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 870,
      settings: {
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 1,
      }
    }
  ],
});

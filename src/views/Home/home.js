import $ from "jquery";
import * as bootstrap from "bootstrap";

window.bootstrap = bootstrap;

window.onload = () => {
  let multipleCardCarousel = document.getElementById("carouselExampleControls");
  // console.log("element", multipleCardCarousel);
  if (window.matchMedia("(min-width: 0px)").matches) {
    // eslint-disable-next-line no-unused-vars
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    const carouselWidth = $(".carousel-inner")[0].scrollWidth;
    const cardWidth = $(".carousel-item").width();
    let scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on(
      "click",
      function () {
        if (scrollPosition < carouselWidth - cardWidth * 1) {
          scrollPosition += cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      }
    );
    $("#carouselExampleControls .carousel-control-prev").on(
      "click",
      function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        }
      }
    );
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
};

window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop < 250
  ) {
    document.getElementById("scrolltotop").classList.add("d-none");
  } else {
    document.getElementById("scrolltotop").classList.remove("d-none");
  }
}

export default {
  data() {
    return {
      totalPartners: null,
      benefitContent: "JNE",
      activeAccordionId: null,
    };
  },
  methods: {
    openWindow(url) {
      window.open(url);
    },
    benefitTabs(value) {
      this.benefitContent = value;
    },
    activate(event) {
      this.activeAccordionId = event.currentTarget.id;
    },
    handleDaftar() {
      window.fbq('track', 'ViewContent');
    }
  },
};

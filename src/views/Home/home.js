window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop < 750
    ) {
      document.getElementById("scrolltotop").classList.add("d-none");
    } else {
      document.getElementById("scrolltotop").classList.remove("d-none");
    }
  }
  export default {
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        document.getElementById("scrolltotop").classList.add("d-none");
      },
    },
  };
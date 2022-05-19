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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.getElementById("scrolltotop").classList.add("d-none");
    },
    openWindow(url) {
      window.open(url);
    },
    benefitTabs(value) {
      this.benefitContent = value;
    },
    activate(event) {
      this.activeAccordionId = event.currentTarget.id;
    },
  },
};

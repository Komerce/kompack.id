import Vue from "vue";
import { Carousel, Slide } from "vue-carousel";

Vue.use(Carousel, Slide);

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
  components: {
    'carousel': Carousel,
    'slide': Slide
  },
  data() {
    return {
      totalPartners: null,
      benefitContent: "JNE",
      activeAccordionId: null,
      alur_items: [
        {
          id: 1,
          image: require("../../assets/icon/alur-1.svg"),
          title: "Melakukan Registrasi",
        },
        {
          id: 2,
          image: require("../../assets/icon/alur-2.svg"),
          title: "Penentuan biaya dan persetujuan surat perjanjian",
        },
        {
          id: 3,
          image: require("../../assets/icon/alur-3.svg"),
          title: "Mengirim barang ke gudang",
        },
        {
          id: 4,
          image: require("../../assets/icon/alur-4.svg"),
          title: "Mitra gudang menyimpan barangmu",
        },
        {
          id: 5,
          image: require("../../assets/icon/alur-5.svg"),
          title: "Mengirim data order ke mitra gudang",
        },
        {
          id: 6,
          image: require("../../assets/icon/alur-6.svg"),
          title: "Mitra gudang menyiapkan orderan customer",
        },
        {
          id: 7,
          image: require("../../assets/icon/alur-7.svg"),
          title: "Partner membayar invoice per bulan",
        },
      ],
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
  mounted() {
    console.log('current',this.$refs.carousel.$el.lastElementChild.classList)
  }
};

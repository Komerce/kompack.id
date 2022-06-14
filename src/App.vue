<template>
  <div id="app">
    <div v-if="$route.path == '/register'">
      <router-view></router-view>
    </div>
    <div v-else>
      <Header />
      <router-view> </router-view>
      <div class="scrolltotop" id="scrolltotop">
        <button class="button__to__top" @click="scrollToTop">
          <i class="material-icons top">expand_less</i>
        </button>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
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
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@1,900&display=swap");

#app {
  font-family: "Poppins", "public sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  margin-top: 0px;
  max-width: 100%;
  background-color: #ffffff;
}

h1,
h2,
h3,
h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
}

/* scrolltotop */
.scrolltotop button {
  width: 60px;
  background-color: #4285F4;
  margin-bottom: 20px;
  padding-bottom: 50px;
  padding-top: 10px;
  border: none;
  color: #ffffff;
  border-radius: 10px;
  text-align-last: center;
}

.scrolltotop {
  text-align-last: end;
  margin-right: 10px;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  position: fixed;
}
</style>

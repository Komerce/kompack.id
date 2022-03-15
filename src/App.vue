<template>
  <div id="app">
    <Header/>
    <Beranda />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Beranda from './views/Beranda.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Beranda,
    Footer
  }
}
</script>

<style>

</style>

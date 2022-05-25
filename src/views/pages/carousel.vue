<template>
  <div class="carousel">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item">
          <div class="card card-alur">
            <div class="icon-card">
              <img src="../../assets/icon/alur-1.svg" />
            </div>
            <div class="content-card">
              <p>Melakukan Registrasi</p>
              <p></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card card-alur">
            <div class="icon-card">
              <img src="../../assets/icon/alur-2.svg" />
            </div>
            <div class="content-card">
              <p style="font-size: 15px">
                Penentuan biaya dan persetujuan surat perjanjian
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card card-alur">
            <div class="icon-card">
              <img src="../../assets/icon/alur-3.svg" />
            </div>
            <div class="content-card">
              <p>Mengirim barang ke gudang</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card card-alur">
            <div class="icon-card">
              <img src="../../assets/icon/alur-4.svg" />
            </div>
            <div class="content-card">
              <p>Mitra gudang menyimpan barangmu</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card card-alur">
            <div class="icon-card">
              <img src="../../assets/icon/alur-5.svg" />
            </div>
            <div class="content-card">
              <p>Mengirim data order ke mitra gudang</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="card card-alur">
            <div class="icon-card">
              <img src="../../assets/icon/alur-6.svg" />
            </div>
            <div class="content-card">
              <p>Mitra gudang menyiapkan orderan customer</p>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <div class="card card-alur">
            <div class="icon-card">
              <img src="../../assets/icon/alur-7.svg" />
            </div>
            <div class="content-card">
              <p>Partner membayar invoice per bulan</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <i
          class="material-icons"
          style="
            font-size: 34px;
            background-color: #ed5f07;
            color: #ffffff;
            border-radius: 16px;
          "
          >keyboard_arrow_left</i
        >
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <i
          class="material-icons"
          style="
            font-size: 34px;
            background-color: #ed5f07;
            color: #ffffff;
            border-radius: 16px;
          "
          >keyboard_arrow_right</i
        >
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import * as bootstrap from "bootstrap";

window.bootstrap = bootstrap;

window.onload = () => {
  let multipleCardCarousel = document.getElementById("carouselExampleControls");
  console.log("element", multipleCardCarousel);
  if (window.matchMedia("(min-width: 768px)").matches) {
    // eslint-disable-next-line no-unused-vars
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on(
      "click",
      function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
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
export default {};
</script>

<style scoped>
.carousel-inner {
  padding: 1em;
}
.card {
  margin: 0 0.5em;
  box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
  border: none;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #e1e1e1;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@media (min-width: 768px) {
  .carousel-item {
    margin-right: 0;
    flex: 0 0 33.333333%;
    display: block;
  }
  .carousel-inner {
    display: flex;
  }
}
.card .img-wrapper {
  max-width: 100%;
  height: 13em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card img {
  max-height: 100%;
}
@media (max-width: 767px) {
  .card .img-wrapper {
    height: 17em;
  }
}
</style>
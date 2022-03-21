<template>
  <div class="home">
    <section id="section_1" class="section_1">
      <div class="row justify-content-center row_home">
        <div class="col-xl-5 col-lg-5 col-md-6 col-11 colom-pertama">
          <div class="komponen-pertama">
            <span class="judul-komponen">
              Jasa Pergudangan Terpercaya untuk Bisnis Online Kamu
            </span>
            <p class="ket-komponen">
              Kompack adalah solusi untuk masalah pergudangan, management, dan
              pengemasan barang.
            </p>
            <div class="button-komponen">
              <button type="button" class="btn btn-1 btn-outline-danger">
                <span class="text-btn">DAFTAR SEKARANG</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-5 col-10 kolom-kedua">
          <div class="model-img">
            <img class="img-dekstop" src="@/assets/hero.png" alt="" />
            <img class="img-mobile" src="@/assets/hero-mobile.png" alt="" />
          </div>
        </div>

        <div class="container section-2">
          <div class="row sect-2">
            <div class="col-xl-12">
              <div class="head-sect2">
                <span><sb>Apakah kamu mengalami masalah ini?</sb></span>
              </div>
              <div class="row">
                <div class="col-lg-2 col-md-2 model-sect2">
                  <img src="../../assets/model-2.png" alt="model-sect2" />
                </div>
                <div class="col-lg-1 col-md-1 col-3 icon-sect2">
                  <img src="../../assets/icon-1.png" alt="" />
                </div>
                <div class="col-lg-3 col-md-4 col-7 subhead-sect2">
                  <span
                    >Keterbatasan tempat dan biaya dalam menyediakan fasilitas
                    gudang sendiri</span
                  >
                </div>
                <div class="col-lg-1 col-md-1 col-3 icon-sect2">
                  <img src="../../assets/icon-2.png" alt="" />
                </div>
                <div class="col-lg-3 col-md-4 col-6 subhead-sect2">
                  <span
                    >Tidak cukup waktu dalam mengurus penyimpanan hingga
                    pengemasan barang</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-3" class="container">
      <div class="row justify-content-center">
        <div class="col-xl-5 col-lg-5 col-md-5 hero-sect3">
          <img src="../../assets/hero-sect3.png" alt="hero-sect3">
        </div>
        <div class="col-xl-7 col-lg-7 col-md-7 col-12">
          <div class="head-sect3">
            <span>Mengapa Kompack Menjadi Pilihan Tepat untuk Bisnismu?</span>
          </div>
          <div class="list-sect3">
            <li><i class="material-icons">check</i>PRAKTIS karena semua urusan pergudanganmu, kami yang tangani.</li>
            <li><i class="material-icons">check</i>HEMAT karena semua biaya sudah jadi satu paket dan dibebankan hanya pada setiap pengiriman.</li>
            <li><i class="material-icons">check</i>MUDAH DIJANGKAU karena gudang kami berada di lokasi strategis.</li>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@1,900&display=swap");
* {
  padding: 0%;
  margin: 0%;
}
img {
  max-width: 100%;
}

/* <-- section_1 --> */
.home {
  margin-top: 5%;
  margin-bottom: 5%;
}
.row_home {
  height: 700px;
  background-image: url("../../assets/bg-hero.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100%;
}
.judul-komponen {
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fff;
}
.colom-pertama {
  align-self: center;
}
.ket-komponen {
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fff;
  padding-top: 2%;
}
.button-komponen {
  padding-top: 3%;
}
.btn-1 {
  padding: 10px;
  border-radius: 14px;
  background-color: #d33c0d;
  color: #fff;
}
.btn-1:hover {
  background-color: transparent;
  color: #fff;
}
.ket-btn {
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  text-align: center;
}
.img-model {
  padding-top: 50px;
}

/* <-- container 2 --> */
.sect-2 {
  background-color: #fff;
  width: 80%;
  border-radius: 20px;
}
.section-2 {
  text-align: -webkit-center;
}
.head-sect2 {
  padding-top: 20px;
  font-weight: 600;
  color: #ed5f07;
}
.icon-sect2 {
  align-self: center;
}
.subhead-sect2 {
  align-self: center;
  text-align: left;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.5px;
  padding-bottom: 20px;
  border-bottom: solid 1px #ed5f07;
}

/* <-- section_3 --> */
#section-3 {
  margin-top: 15%;
}
li {
  list-style: none;
}
.material-icons {
  border: solid 1.5px #FF9D00;
  border-radius: 15px;
  padding: 3px;
}
/* <-- section_4 --> */
/* <-- section_5 --> */
/* <-- section_6 --> */
/* <-- section_7 --> */
/* <-- section_8 --> */

@media (max-width: 600px) {
  /* <-- section_1 --> */
  .home {
    padding-top: 12%;
  }
  .komponen-pertama {
    margin-top: 5%;
  }
  .judul-komponen {
    font-size: 24px;
    line-height: 36px;
  }
  .ket-komponen {
    font-size: 14px;
  }
  .img-dekstop {
    display: none;
  }
  .row_home {
    background-image: url("../../assets/bg-mobile.png");
  }

  /* <-- section_2 --> */
  .sect-2 {
  width: 100%;
  padding-bottom: 5%;
}
  .model-sect2 {
    display: none;
  }
  .head-sect2 {
    padding-top: 20px;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 20px;
  }
  .subhead-sect2 {
    font-size: 16px;
  }
  /* <-- section_3 --> */

/* <-- section_4 --> */
/* <-- section_5 --> */
/* <-- section_6 --> */
/* <-- section_7 --> */
/* <-- section_8 --> */
}
@media (min-width: 601px) {
  /* <-- section_1 --> */
  .judul-komponen {
    font-size: 32px;
    line-height: 38px;
  }
  .ket-komponen {
    font-size: 14px;
  }
  .img-mobile {
    display: none;
  }
  /* section2 */
  .head-sect2 {
    padding-top: 20px;
    font-size: 28px;
    line-height: 38px;
  }
  .subhead-sect2 {
    font-size: 13px;
  }
  /* <-- section_3 --> */

/* <-- section_4 --> */
/* <-- section_5 --> */
/* <-- section_6 --> */
/* <-- section_7 --> */
/* <-- section_8 --> */
}
@media (min-width: 900px) {
  /* section1 */
  .judul-komponen {
    font-size: 42px;
    line-height: 54px;
  }
  .ket-komponen {
    font-size: 16px;
  }
  /* section2 */
  .head-sect2 {
    padding-top: 20px;
    font-size: 36px;
    line-height: 52px;
  }
  .model-sect2 img {
    width: 66%;
  }
  .subhead-sect2 {
    font-size: 16px;
    width: 250px;
  }
  /* <-- section_3 --> */

/* <-- section_4 --> */
/* <-- section_5 --> */
/* <-- section_6 --> */
/* <-- section_7 --> */
/* <-- section_8 --> */
}
@media (min-width: 1200px) {
  /* section1 */
  .judul-komponen {
    font-size: 56px;
    line-height: 78px;
  }
  .head-sect2 {
    font-size: 40px;
  }
  /* section2 */
  .head-sect2 {
    padding-top: 20px;
    font-size: 40px;
    line-height: 56px;
  }
  .model-sect2 img {
    width: 66%;
  }
  /* <-- section_3 --> */

/* <-- section_4 --> */
/* <-- section_5 --> */
/* <-- section_6 --> */
/* <-- section_7 --> */
/* <-- section_8 --> */
}
</style>

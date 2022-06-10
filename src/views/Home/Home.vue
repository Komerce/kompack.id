<template>
  <div class="home">
    <section id="section_1" class="section_1">
      <div class="row container row_home">
        <div
          class="col-xl-5 col-lg-5 col-md-5 col-10 colom-pertama"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div class="komponen-pertama">
            <h2 class="judul-komponen">
              <span style="color: #4285F4">Jasa Pergudangan</span> Terpercaya
              untuk Bisnis Online Kamu
            </h2>
            <p class="ket-komponen">
              Kompack adalah solusi untuk masalah pergudangan, management, dan
              pengemasan barang
            </p>
            <div class="button-komponen">
              <router-link to="/register">
                <button type="button" class="btn btn-1 btn-outline-primary">
                  Mulai Sekarang
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="col-xl-5 col-lg-6 col-md-6 col-10 mb-5 kolom-kedua"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <div class="model-img">
            <img class="img-dekstop" src="@/assets/partials/hero-new.svg" alt="" />
          </div>
        </div>
        <div class="img-mobile">
          <img
            class="img-mobile rounded float-end"
            src="@/assets/partials/hero-mobile-new.svg"
            alt=""
          />
        </div>
      </div>
    </section>
    <section id="section_2" class="section_2" data-aos="fade-up">
      <div class="row justify-content-center">
        <div class="container">
          <div class="row sect-2 row_sect2">
            <div class="col-xl-12">
              <div class="head-sect2 col-md-10 col-6 mt-n5">
                <h2>Apakah kamu mengalami masalah ini?</h2>
              </div>
              <div class="row mt-3 justify-content-center">
                <div
                  class="row justify-content-center mb-4 content-sect2"
                  style="margin-right: 2vw"
                >
                  <div class="col-lg-2 col-md-2 col-3 icon-sect2">
                    <img src="../../assets/home.png" alt="" />
                  </div>
                  <div class="col-lg-8 col-md-8 col-8 subhead-sect2">
                    <p>
                      Keterbatasan tempat dan biaya dalam menyediakan fasilitas
                      gudang sendiri
                    </p>
                  </div>
                </div>
                <div class="row justify-content-center content-sect2">
                  <div class="col-lg-2 col-md-2 col-3 icon-sect2">
                    <img src="../../assets/jam.png" alt="" />
                  </div>
                  <div class="col-lg-8 col-md-8 col-8 subhead-sect2">
                    <p>
                      Tidak cukup waktu dalam mengurus penyimpanan hingga
                      pengemasan barang
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-3">
      <div class="head-sect3" data-aos="fade-up">
        <h2>Mengapa Harus Kompack?</h2>
      </div>
      <div class="row justify-content-center row-sect3">
        <div class="col-xl-3 col-lg-3 col-md-4 col-12" data-aos="fade-right">
          <div class="content-sect3 pt-3 pb-3">
            <img src="../../assets/icon/practis.svg" alt="" />
            <h4 class="pt-3">Praktis</h4>
            <p class="desc-sect3">
              PRAKTIS karena semua urusan pergudanganmu, kami yang tangani
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12" data-aos="fade-up">
          <div class="content-sect3 pt-3 pb-3">
            <img src="../../assets/icon/hemat.svg" alt="" />
            <h4 class="pt-3">Hemat</h4>
            <p class="desc-sect3">
              HEMAT karena semua biaya sudah jadi satu paket dan dibebankan
              hanya pada setiap pengiriman
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12" data-aos="fade-left">
          <div class="content-sect3 pt-5 pb-3">
            <img src="../../assets/icon/mudah.svg" alt="" />
            <h4 class="pt-3">Mudah</h4>
            <p class="desc-sect3">
              MUDAH DIJANGKAU karena gudang kami berada di lokasi strategis
            </p>
          </div>
        </div>
      </div>
      <div
        class="row justify-content-center row-mobile-sect3"
        id="row-mobile-sect3"
      >
        <div class="col-xl-3 col-lg-3 col-md-4 col-12">
          <div
            class="row justify-content-between content-mobile-sect3 pt-3 pb-4"
          >
            <div class="col-5">
              <img src="../../assets/icon/practis.svg" alt="" />
            </div>
            <div class="col-5">
              <span><h5 class="pt-3" style="font-size: 18px">Praktis</h5></span>
            </div>
            <div class="row justify-content-center pt-2">
              <p class="col-10 desc-mobile-sect3" style="font-size: 12px">
                PRAKTIS karena semua urusan pergudanganmu, kami yang tangani
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12 mt-3">
          <div
            class="row justify-content-between content-mobile-sect3 pt-3 pb-4"
          >
            <div class="col-5">
              <span><h5 class="pt-3" style="font-size: 18px">Hemat</h5></span>
            </div>
            <div class="col-5">
              <img src="../../assets/icon/hemat.svg" alt="" />
            </div>
            <div class="row justify-content-center pt-2">
              <p class="col-10 desc-mobile-sect3" style="font-size: 12px">
                HEMAT karena semua biaya sudah jadi satu paket dan dibebankan
                hanya pada setiap pengiriman
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12 mt-3">
          <div
            class="row justify-content-between content-mobile-sect3 pt-3 pb-4"
          >
            <div class="col-5">
              <img src="../../assets/icon/mudah.svg" alt="" />
            </div>
            <div class="col-5">
              <span><h5 class="pt-3" style="font-size: 18px">Mudah</h5></span>
            </div>
            <div class="row justify-content-center pt-2">
              <p class="col-10 desc-mobile-sect3" style="font-size: 12px">
                MUDAH DIJANGKAU karena gudang kami berada di lokasi strategis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-4">
      <div class="container section-4" data-aos="zoom-in">
        <div class="head-sect4">
          <h4>Apa kelebihan Kompack?</h4>
        </div>
        <div class="row justify-content-between row-sect4">
          <div class="col-xl-4 col-lg-4 col-md-5 col-12">
            <div class="row justify-content-center content-sect4-1">
              <div class="col-lg-2 col-md-2 col-2" style="align-self: center">
                <img src="../../assets/icon/group-1.png" alt="" />
              </div>
              <div class="col-lg-9 col-md-6 col-7" style="align-self: center">
                <p>Jaminan barang disimpan di gudang yang terpercaya</p>
              </div>
            </div>
            <div class="row justify-content-center content-sect4-2">
              <div class="col-lg-2 col-md-2 col-2" style="align-self: center">
                <img src="../../assets/icon/group-2.png" alt="" />
              </div>
              <div class="col-lg-9 col-md-6 col-7" style="align-self: center">
                <p>
                  Adanya SOP untuk mendukung keamanan dan kelancaran proses
                  fulfillment
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-5 col-12 content-sect4-22">
            <div class="row justify-content-center content-sect4-3">
              <div class="col-lg-2 col-md-2 col-2" style="align-self: center">
                <img src="../../assets/icon/group-3.png" alt="" />
              </div>
              <div class="col-lg-10 col-md-6 col-7" style="align-self: center">
                <p>Harga layanan terjangkau</p>
              </div>
            </div>
            <div class="row justify-content-center content-sect4-4">
              <div class="col-lg-2 col-md-2 col-2" style="align-self: center">
                <img src="../../assets/icon/group-4.png" alt="" />
              </div>
              <div class="col-lg-10 col-md-6 col-7" style="align-self: center">
                <p>Bisa kirim barang ke gudang kapanpun</p>
              </div>
            </div>
            <div class="row justify-content-center content-sect4-5">
              <div class="col-lg-2 col-md-2 col-2" style="align-self: center">
                <img src="../../assets/icon/group-5.png" alt="" />
              </div>
              <div class="col-lg-10 col-md-6 col-7" style="align-self: center">
                <p>Tim yang memiliki keterampilan pergudangan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-7" data-aos="zoom-in-up">
      <div class="row justify-content-center row-sect7">
        <div class="col-xl-6 col-lg-6 col-md-5 col-12 col1-sect7">
          <div class="head-sect7">
            <h2>Pakai Kompack Lebih</h2>
            <h2>Hemat dan Terjangkau</h2>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-7 col-12 col2-sect7">
          <div class="subhead-sect7">
            <p>
              Nikmati layanan Kompack dengan biaya mulai dari
              <span class="bold-sect7">Rp2.000/ barang yang terjual</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="section-komship" class="container section-komship">
      <div class="head-sect5">
        <h2>Makin hemat atur pengiriman</h2>
        <h2>
          paket orderan dengan
          <img src="@/assets/logo/komship-logo-new.svg" alt="" />
        </h2>
      </div>
      <section class="benefit">
        <div
          class="card benefit-head"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-lg-6 content">
                <p>
                  Kami telah bekerjasama dengan Ekspedisi ternama yang mendukung
                  pengiriman
                </p>
                <div class="COD">COD dan Non-COD</div>
              </div>
              <div class="col-lg-6 d-flex justify-between">
                <img
                  class="logo"
                  :src="require('../../assets/logo/logo_jne.png')"
                />
                <img
                  class="logo"
                  :src="require('../../assets/logo/logo_sicepat.png')"
                />
                <img
                  class="logo"
                  :src="require('../../assets/logo/logo_idexpress.png')"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="benefit-table-desktop">
          <h2
            class="d-block text-center mb-4"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Rekomendasi untuk Kamu
          </h2>
          <div class="row" data-aos="fade-right" data-aos-duration="1500">
            <div class="col-md-3 p-4 head">Benefit</div>
            <div class="col-md-3 p-4 subhead">JNE</div>
            <div class="col-md-3 p-4 subhead">SiCepat</div>
            <div class="col-md-3 p-4 subhead">IDExpress</div>
          </div>
          <div class="row" data-aos="fade-right" data-aos-duration="1500">
            <div class="col-md-3 p-4 head">Diskon Ongkir</div>
            <div class="col-md-3 p-4"><p>Reg 25%</p></div>
            <div class="col-md-3 p-4">
              <li class="list-benefit">Reg 30%</li>
              <li class="list-benefit">
                Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
              </li>
            </div>
            <div class="col-md-3 p-4">
              <li class="list-benefit">Reg 25% (>1/2 kg)</li>
              <li class="list-benefit">
                &lt;1/2 Kg bayar 1/2-nya * + diskon 15%
              </li>
            </div>
          </div>
          <div class="row" data-aos="fade-right" data-aos-duration="1500">
            <div class="col-md-3 p-4 head">Biaya COD</div>
            <div class="col-md-3 p-4">
              <p>2.8%</p>
              <div><p>(PPN ditanggung Komship)</p></div>
            </div>
            <div class="col-md-3 p-4">
              <p>2.8%</p>
              <div><p>(PPN ditanggung Komship)</p></div>
            </div>
            <div class="col-md-3 p-4">
              <p>2.8%</p>
              <div><p>(PPN ditanggung Komship)</p></div>
            </div>
          </div>
          <div class="row" data-aos="fade-right" data-aos-duration="1500">
            <div class="col-md-3 p-4 head">Biaya Retur</div>
            <div class="col-md-3 p-4"><p>Gratis se-lndonesia*</p></div>
            <div class="col-md-3 p-4"><p>Gratis se-lndonesia*</p></div>
            <div class="col-md-3 p-4"><p>Gratis se-lndonesia*</p></div>
          </div>
        </div>
        <div class="benefit-table-mobile">
          <div
            class="mt-4 mb-2"
            style="text-align: left !important"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <button
              :class="benefitContent === 'JNE' ? 'active' : ''"
              class="btn btn-sm btn-menu"
              @click="benefitTabs('JNE')"
            >
              JNE
            </button>
            <button
              :class="benefitContent === 'SICEPAT' ? 'active' : ''"
              class="btn btn-sm btn-menu"
              @click="benefitTabs('SICEPAT')"
            >
              SiCepat
            </button>
            <button
              :class="benefitContent === 'IDEXPRESS' ? 'active' : ''"
              class="btn btn-sm btn-menu"
              @click="benefitTabs('IDEXPRESS')"
            >
              IDExpress
            </button>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-duration="1500">
            <div class="col-5 align-self-center head">Benefit</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 subhead">
              <img
                class="logo"
                style="width: 45px"
                :src="require('../../assets/logo/logo_jne.png')"
              />
            </div>
            <div v-if="benefitContent === 'SICEPAT'" class="col-6 subhead">
              <img
                class="logo"
                :src="require('../../assets/logo/logo_sicepat.png')"
              />
            </div>
            <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 subhead">
              <img
                class="logo"
                :src="require('../../assets/logo/logo_idexpress.png')"
              />
            </div>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-duration="1500">
            <div class="col-5 pt-4 head">Diskon Ongkir</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 content">
              <p>Reg 25%</p>
            </div>
            <div v-if="benefitContent === 'SICEPAT'" class="col-6 content">
              <li class="list-benefit">Reg 30%</li>
              <li class="list-benefit">
                Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)
              </li>
            </div>
            <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 content">
              <li class="list-benefit">Reg 25% (>1/2 kg)</li>
              <li class="list-benefit">
                &lt;1/2 Kg bayar 1/2-nya * + diskon 15%
              </li>
            </div>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-duration="1500">
            <div class="col-5 head">Biaya COD</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 content">
              <p>2.8%</p>
              <div><p>(PPN ditanggung Komship)</p></div>
            </div>
            <div v-if="benefitContent === 'SICEPAT'" class="col-6 content">
              <p>2.8%</p>
              <div><p>(PPN ditanggung Komship)</p></div>
            </div>
            <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 content">
              <p>2.8%</p>
              <div><p>(PPN ditanggung Komship)</p></div>
            </div>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-duration="1500">
            <div class="col-5 head">Biaya Retur</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 content">
              <p>Gratis se-lndonesia*</p>
            </div>
            <div v-if="benefitContent === 'SICEPAT'" class="col-6 content">
              <p>Gratis se-lndonesia*</p>
            </div>
            <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 content">
              <p>Gratis se-lndonesia*</p>
            </div>
          </div>
        </div>
      </section>
      <section class="recommend mt-5">
        <div class="container">
          <div class="row justify-content-evenly">
            <div
              class="col-md-3"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <div class="card">
                <div class="image">
                  <img src="../../assets/partials/jne-counter.png" />
                </div>
                <span class="content">
                  Makin tenang kirim orderan dengan
                  <span style="color: #f95031">
                    gerai terbanyak dan cakupan terluas
                  </span>
                  di Indonesia
                </span>
              </div>
            </div>
            <div
              class="col-md-3"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <div class="card">
                <div class="image">
                  <img src="../../assets/partials/sicepat-counter.png" />
                </div>
                <span class="content">
                  Makin <span style="color: #f95031">untung</span> dan
                  <span style="color: #f95031">hemat</span> kirim orderan bahkan
                  ke pelosok Indonesia. Kirim pakai
                  <span style="color: #f95031">Cargo</span> gak kalah
                  <span style="color: #f95031">hemat</span>nya!
                </span>
              </div>
            </div>
            <div
              class="col-md-3"
              data-aos="zoom-in-right"
              data-aos-duration="1500"
            >
              <div class="card">
                <div class="image">
                  <img src="../../assets/partials/idexpress-counter.png" />
                </div>
                <span class="content">
                  <span style="color: #f95031"
                    >Cocok bagi pebisnis dengan paket ringan.</span
                  >
                  Kirim orderan makin hemat dan mantap
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section id="layanan" class="layanan">
      <div data-aos="fade-up" data-aos-duration="3000">
        <div
          class="row accordion accordion-flush justify-content-between"
          id="accordionFlushExample"
        >
          <div class="col-xl-6 col-lg-6 col-md-6 col-12 p-4 mobile-layanan">
            <div class="col-lg-7 col-md-7 col-7 head-layanan">
              <h2>Layanan Kami</h2>
            </div>
            <div class="row accordion-item row-layanan">
              <div
                class="col-lg-11 col-11 accordion-header subhead-layanan"
                id="flush-headingOne"
              >
                <div
                  class="row accordion-button collapsed justify-content-between custom__class"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="true"
                  aria-controls="flush-collapseOne"
                >
                  <div class="col-md-6 col-10">
                    <div style="padding-left: 20px">Penyimpanan</div>
                  </div>
                </div>
              </div>
              <div
                id="flush-collapseOne"
                class="col-lg-11 col-11 content-layanan accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <p class="accordion-body">
                  Kami menerapkan SOP untuk menyimpan dan menjamin keamanan
                  barangmu
                </p>
              </div>
            </div>
            <div class="row accordion-item row-layanan">
              <div
                class="col-lg-11 col-11 accordion-header subhead-layanan"
                id="flush-headingTwo"
              >
                <div
                  class="row accordion-button justify-content-between custom__class"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <div class="col-md-10 col-10">
                    <div style="padding-left: 20px">Management Stock</div>
                  </div>
                </div>
              </div>
              <div
                id="flush-collapseTwo"
                class="col-lg-11 col-11 content-layanan accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <p class="accordion-body">
                  Pemantauan jumlah barang lebih mudah dengan laporan yang
                  selalu kami update
                </p>
              </div>
            </div>
            <div class="row accordion-item row-layanan">
              <div
                class="col-lg-11 col-11 accordion-header subhead-layanan"
                id="flush-headingThree"
              >
                <div
                  class="row accordion-button collapsed justify-content-between custom__class"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <div class="col-md-10 col-10">
                    <div style="padding-left: 20px">
                      Pengemasan dan pengiriman
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="flush-collapseThree"
                class="col-lg-11 col-11 content-layanan accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <p class="accordion-body">
                  Kami bantu kemas dan kirimkan barang melalui ekspedisi sesuai
                  pilihanmu
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-xl-6 col-lg-6 col-md-6 p-4 img-layanan"
            style="width: 45%; padding-top: 10vh"
          >
            <img
              class="accordion-collapse collapse show"
              id="flush-collapseOne"
              src="../../assets/partials/penyimpanan.png"
              alt="layanan"
            />
            <img
              class="accordion-collapse collapse"
              id="flush-collapseTwo"
              src="../../assets/partials/stock.png"
              alt="stock"
            />
            <img
              class="accordion-collapse collapse"
              id="flush-collapseThree"
              src="../../assets/partials/packing.png"
              alt="packing"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      id="alur"
      class="carousel-desktop"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 class="mb-5">Alur Partner Kompack</h2>
      <div class="row">
        <div class="carousel">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item ci-right">
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
              <div class="carousel-item ci-left">
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
              <span class="carousel-control-prev-icon" aria-hidden="true"
                ><i class="material-icons custom__material-icons"
                  >keyboard_arrow_left</i
                ></span
              >
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"
                ><i class="material-icons custom__material-icons"
                  >keyboard_arrow_right</i
                ></span
              >
            </button>
          </div>
        </div>
      </div>
    </section>
    <div class="row row-lokasi-gudang justify--content-center">
      <h1>Lokasi Gudang</h1>
    </div>
    <section id="section-8" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div class="row justify-content-center sect-8">        
        <div class="isi-sect8">
          <div class="row row_sect-8 justify-content-center">
            <div class="col col-tangerang">
              <div class="icon-lokasi">
                <img src="../../assets/lokasi.png" alt="">
              </div>
              <div class="text-tangerang">
                <p>Gudang Tangerang</p>
              </div>
              <div class="content-lokasi d-flex">
                <div class="col-2">
                  <img src="@/assets/clock.png" alt="">
                </div>
                <div class="col-10">
                  <p>
                    Jam operasional gudang 24 jam
                  </p>
                </div>
              </div>
              <div class="content-lokasi d-flex">
                <div class="col-2">
                  <img src="@/assets/truck.png" alt="">
                </div>
                <div class="col-10">
                  <p>
                    Mendukung berbagai penggunaan ekspedisi untuk pengiriman
                  </p>
                </div>
              </div>
            </div>
            <div class="col col-bekasi">
              <div class="icon-lokasi">
                <img src="../../assets/lokasi.png" alt="">
              </div>
              <div class="text-bekasi">
                <p>Gudang Bekasi</p>
              </div>
              <div class="content-lokasi d-flex">
                <div class="col-2">
                  <img src="@/assets/clock.png" alt="">
                </div>
                <div class="col-10">
                  <p>
                    Jam operasional gudang jam 08.00 - 17.00 WIB
                  </p>
                </div>
              </div>
              <div class="content-lokasi d-flex">
                <div class="col-2">
                  <img src="@/assets/truck.png" alt="">
                </div>
                <div class="col-10">
                  <p>
                    Mendukung berbagai penggunaan ekspedisi untuk pengiriman
                  </p>
                </div>
              </div>
              <div class="row-bawah-lokasi d-flex">
                <div class="col-2">
                  <img src="../../assets/ceklist.png" alt="">
                </div>
                <div class="col-10">
                  <p>
                    Tersedia penyimpanan pendingin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="section-9"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div class="sect9">
        <div class="head-sect9 row justify-content-center">
          <h2 class="col-lg-11 col-md-12 col-10">
            Percayakan Layanan Pergudangan Bisnismu pada Kompack
          </h2>
        </div>
        <div class="subhead-sect9">
          <p>Rasakan kemudahannya! Hubungi kami untuk informasi lebih lanjut</p>
        </div>
        <div class="button">
          <router-link to="/register">
            <button class="btn btn-primary">DAFTAR SEKARANG</button>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" src="./home.js"></script>
<style src="./home.css" scoped></style>

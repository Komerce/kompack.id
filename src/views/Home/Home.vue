<template>
  <div class="home">
    <section id="section_1" class="section_1 container">
      <div class="row row_home">
        <div class="col-xl-5 col-lg-5 col-md-5 col-12 colom-pertama">
          <div class="komponen-pertama">
            <h2 class="judul-komponen">
              <span style="color: #ed5f07">Jasa Pergudangan</span> Terpercaya
              untuk Bisnis Online Kamu
            </h2>
            <p class="ket-komponen">
              Kompack adalah solusi untuk masalah pergudangan, management, dan
              pengemasan barang
            </p>
            <div class="button-komponen">
              <router-link to="/register">
                <button type="button" class="btn btn-1 btn-outline-danger">
                  Mulai Sekarang
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-6 col-10 mb-5 kolom-kedua">
          <div class="model-img">
            <img class="img-dekstop" src="@/assets/partials/hero.svg" alt="" />
          </div>
        </div>
      </div>
      <span class="img-mobile">
        <img class="img-mobile" src="@/assets/partials/hero-mobile.svg" alt=""
      /></span>
    </section>
    <section id="section_2" class="section_2">
      <div class="row justify-content-center">
        <div class="container">
          <div class="row sect-2 row_sect2">
            <div class="col-xl-12">
              <div class="head-sect2 col-8">
                <h2>Apakah kamu mengalami masalah ini?</h2>
              </div>
              <div class="row mt-3 justify-content-center">
                <div
                  class="row justify-content-center mb-4 content-sect2"
                  style="margin-right: 2vw"
                >
                  <div class="col-lg-2 col-md-1 col-3 icon-sect2">
                    <img src="../../assets/icon-1.png" alt="" />
                  </div>
                  <div class="col-lg-8 col-md-4 col-8 subhead-sect2">
                    <span
                      >Keterbatasan tempat dan biaya dalam menyediakan fasilitas
                      gudang sendiri</span
                    >
                  </div>
                </div>
                <div class="row justify-content-center content-sect2">
                  <div class="col-lg-2 col-md-1 col-3 icon-sect2">
                    <img src="../../assets/icon-2.png" alt="" />
                  </div>
                  <div class="col-lg-8 col-md-4 col-8 subhead-sect2">
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
      </div>
    </section>
    <section id="section-3">
      <div class="head-sect3">
        <h2>Mengapa Harus Kompack?</h2>
      </div>
      <div class="row justify-content-center row-sect3">
        <div class="col-xl-3 col-lg-3 col-md-4 col-12">
          <div class="content-sect3 pt-3 pb-3">
            <img src="../../assets/icon/practis.svg" alt="" />
            <h4 class="pt-3">Praktis</h4>
            <p class="desc-sect3">
              PRAKTIS karena semua urusan pergudanganmu, kami yang tangani
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12">
          <div class="content-sect3 pt-3 pb-3">
            <img src="../../assets/icon/hemat.svg" alt="" />
            <h4 class="pt-3">Hemat</h4>
            <p class="desc-sect3">
              HEMAT karena semua biaya sudah jadi satu paket dan dibebankan
              hanya pada setiap pengiriman
            </p>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-12">
          <div class="content-sect3 pt-5 pb-3">
            <img src="../../assets/icon/mudah.svg" alt="" />
            <h4 class="pt-3">Mudah</h4>
            <p class="desc-sect3">
              MUDAH DIJANGKAU karena gudang kami berada di lokasi strategis
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center row-mobile-sect3">
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
      <div class="container section-4">
        <div class="head-sect4">
          <h4>Apa kelebihan Kompack?</h4>
        </div>
        <div class="row justify-content-between row-sect4">
          <div class="col-xl-4 col-lg-4 col-md-5 col-12">
            <div class="row justify-content-center content-sect4-1">
              <div class="col-lg-2 col-md-3 col-2" style="align-self: center">
                <img src="../../assets/icon/group-1.png" alt="" />
              </div>
              <div class="col-lg-9 col-md-8 col-7" style="align-self: center">
                <p>Jaminan barang disimpan di gudang yang terpercaya</p>
              </div>
            </div>
            <div class="row justify-content-center content-sect4-2">
              <div class="col-lg-2 col-md-3 col-2" style="align-self: center">
                <img src="../../assets/icon/group-2.png" alt="" />
              </div>
              <div class="col-lg-9 col-md-8 col-7" style="align-self: center">
                <p>
                  Adanya SOP untuk mendukung keamanan dan kelancaran proses
                  fullfilment
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-5 col-12"
            style="padding-left: 2vw"
          >
            <div class="row justify-content-center content-sect4-3">
              <div class="col-lg-2 col-md-3 col-2" style="align-self: center">
                <img src="../../assets/icon/group-3.png" alt="" />
              </div>
              <div class="col-lg-8 col-md-8 col-7" style="align-self: center">
                <p>Harga layanan terjangkau</p>
              </div>
            </div>
            <div class="row justify-content-center content-sect4-4">
              <div class="col-lg-2 col-md-3 col-2" style="align-self: center">
                <img src="../../assets/icon/group-4.png" alt="" />
              </div>
              <div class="col-lg-8 col-md-8 col-7" style="align-self: center">
                <p>Bisa kirim barang ke gudang kapanpun</p>
              </div>
            </div>
            <div class="row justify-content-center content-sect4-5">
              <div class="col-lg-2 col-md-3 col-2" style="align-self: center">
                <img src="../../assets/icon/group-5.png" alt="" />
              </div>
              <div class="col-lg-8 col-md-8 col-7" style="align-self: center">
                <p>Tim yang memiliki keterampilan pergudangan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="section-7">
      <div class="row justify-content-center row-sect7">
        <div class="col-xl-5 col-lg-6 col-md-5 col-12 col1-sect7">
          <div class="head-sect7">
            <h2>Pakai Kompack Lebih Hemat dan Terjangkau</h2>
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
          <img src="../../assets/logo/komship-logo.svg" alt="" />
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
            <div class="col-md-3 p-4">Reg 25%</div>
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
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div class="col-md-3 p-4">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div class="col-md-3 p-4">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row" data-aos="fade-right" data-aos-duration="1500">
            <div class="col-md-3 p-4 head">Biaya Retur</div>
            <div class="col-md-3 p-4">Gratis se-lndonesia*</div>
            <div class="col-md-3 p-4">Gratis se-lndonesia*</div>
            <div class="col-md-3 p-4">Gratis se-lndonesia*</div>
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
            <div class="col-5 head">Benefit</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 subhead">
              <img
                class="logo"
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
              Reg 25%
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
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div v-if="benefitContent === 'SICEPAT'" class="col-6 content">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
            <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 content">
              2.8%
              <div>(PPN ditanggung Komship)</div>
            </div>
          </div>
          <div class="row" data-aos="zoom-in" data-aos-duration="1500">
            <div class="col-5 head">Biaya Retur</div>
            <div v-if="benefitContent === 'JNE'" class="col-6 content">
              Gratis se-lndonesia*
            </div>
            <div v-if="benefitContent === 'SICEPAT'" class="col-6 content">
              Gratis se-lndonesia*
            </div>
            <div v-if="benefitContent === 'IDEXPRESS'" class="col-6 content">
              Gratis se-lndonesia*
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
    <section id="layanan" class="container layanan">
      <div class="row justify-content-between">
        <div class="col-xl-6 col-lg-6 col-md-6 col-12 mobile-layanan">
          <div class="col-lg-5 col-7 head-layanan">
            <h2>Layanan Kami</h2>
          </div>
          <div class="row row-layanan">
            <div class="col-lg-11 col-11 subhead-layanan">
              <div
                :active="this.activeAccordionId == 'collapseExample'"
                v-on:click="activate"
                class="row justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="true"
                aria-controls="collapseExample"
              >
                <div class="col-md-6 col-5">
                  <div style="padding-left: 20px">Penyimpanan</div>
                </div>
                <div class="col-md-2 col-2">
                  <img
                    class=""
                    src="../../assets/vector/bottom-arrow.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-lg-11 col-11 collapse content-layanan collapse show"
              id="collapseExample"
            >
              <p>
                Kami menerapkan SOP untuk menyimpan dan menjamin keamanan
                barangmu
              </p>
            </div>
          </div>
          <div class="row row-layanan">
            <div class="col-lg-11 col-11 subhead-layanan">
              <div
              :active="this.activeAccordionId == 'collapseExample1'"
                v-on:click="activate"
                class="row justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                <div class="col-md-6 col-8">
                  <div style="padding-left: 20px">Management Stock</div>
                </div>
                <div class="col-md-2 col-2">
                  <img
                    class=""
                    src="../../assets/vector/bottom-arrow.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-lg-11 col-11 collapse content-layanan"
              id="collapseExample1"
            >
              <p>
                Pemantauan jumlah barang lebih mudah dengan laporan yang selalu
                kami update
              </p>
            </div>
          </div>
          <div class="row row-layanan">
            <div class="col-11 col-11 subhead-layanan">
              <div
              :active="this.activeAccordionId == 'collapseExample2'"
                v-on:click="activate"
                class="row justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                <div class="col-md-6 col-10">
                  <div style="padding-left: 20px">
                    Pengemasan dan pengiriman
                  </div>
                </div>
                <div class="col-md-2 col-2">
                  <img
                    class=""
                    src="../../assets/vector/bottom-arrow.svg"
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div
              class="col-lg-11 col-11 collapse content-layanan"
              id="collapseExample2"
            >
              <p>
                Kami bantu kemas dan kirimkan barang melalui ekspedisi sesuai
                pilihanmu
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 collapse img-layanan collapse show"
          id="collapseExample"
        >
          <img src="../../assets/partials/penyimpanan.svg" alt="layanan" />
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 collapse img-layanan"
          id="collapseExample1"
        >
          <img src="../../assets/partials/stock.svg" alt="stock" />
        </div>
        <div
          class="col-xl-6 col-lg-6 col-md-6 collapse img-layanan"
          id="collapseExample2"
        >
          <img src="../../assets/partials/packing.svg" alt="packing" />
        </div>
      </div>
    </section>
    <section id="alur">
      <div class="row">
        <carousel :per-page="4" :autoplay="true" :autoplay-interval="3000">
          <slide v-for="item in alur_items" :key="item.id">
            <div class="card card-alur">
              <div class="icon-card">
                <img :src="item.image" />
              </div>
              <div class="content-card">
                <p>{{ item.title }}</p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </section>
    <section id="section-8">
      <div class="row justify-content-center sect-8">
        <div class="isi-sect8">
          <div class="judul-sect8">
            <div class="head-sect8">
              <h2>Lokasi Gudang</h2>
            </div>
          </div>
          <div class="row row-sect8">
            <div class="col-1 icon-sect8">
              <img src="../../assets/house-2.png" alt="" />
            </div>
            <div class="col-9 subhead-sect8">
              <p class="gudang">Gudang Tangerang</p>
            </div>
          </div>
          <div class="row row-sect8">
            <div class="col-1 icon-sect8">
              <img src="../../assets/clock.png" alt="" />
            </div>
            <div class="col-9 subhead-sect8">
              <p>Jam operasioanal gudang 24 jam</p>
            </div>
          </div>
          <div class="row row-sect8">
            <div class="col-1 icon-sect8">
              <img src="../../assets/truck.png" alt="" />
            </div>
            <div class="col-9 bottom-sect8 subhead-sect8">
              <p>Mendukung berbagai penggunaan ekspedisi untuk pengiriman</p>
            </div>
          </div>
        </div>
      </div>
      <div class="kardus">
        <img
          class="kardus-sect8"
          src="../../assets/partials/kardus-sect8.svg"
          alt=""
        />
      </div>
    </section>
    <section id="section-9">
      <div class="sect9">
        <div class="head-sect9">
          <h2>Percayakan Layanan Pergudangan Bisnismu pada Kompack</h2>
        </div>
        <div class="subhead-sect9">
          <p>Rasakan kemudahannya! Hubungi kami untuk informasi lebih lanjut</p>
        </div>
        <div class="button">
          <router-link to="/register">
            <button class="btn btn-danger">DAFTAR SEKARANG</button>
          </router-link>
        </div>
      </div>
    </section>
    <div class="scrolltotop" id="scrolltotop">
      <button class="button__to__top" @click="scrollToTop">
        <i class="material-icons top">expand_less</i>
      </button>
    </div>
  </div>
</template>

<script src="./home.js"></script>
<style src="./home.css" scoped></style>

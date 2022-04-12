<template>
  <div class="footer">
    <div class="icon"></div>
      <div class="row row_footer-1">
        <div class="container cntr_footer-1 d-flex justify-content-center">
          <div class="col-lg-5 col-md-6 col-12">
            <div class="logo-location">
              <div class="image-footer">
                <img
                  src="../assets/logo-kompack-white.png"
                  width="150px"
                  alt=""
                />
              </div>
              <div class="row bawah-logo-white pt-3 d-flex">
                <div class="col-1 lokasi">
                  <div class=""><img src="../assets/lokasi.png" alt="" /></div>
                </div>
                <div class="col-9">
                  <span class="ket-loc">
                    Head Office Komerce <br />
                    Jln. Sawah Tengah No. 3 Desa Tunjungmuli Kecamatan
                    Karangmoncol Kabupaten Purbalingga (53355)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 tiga-dua">
            <div class="perusahaan">
              <div class=""><span class="title-footer">Perusahaan</span></div>
              <div class="row text-title pt-3">
                <div class="ul">
                  <router-link class="ket-text link" to="/tentang" aria-current="page"
                  @click.native="movePage"
                    ><span class="text-ket">Tentang Kami</span></router-link
                  >
                  <router-link class="ket-text link" to="/syarat" aria-current="page"
                  @click.native="movePage"
                    ><span class="text-ket"
                      >Syarat dan Ketentuan</span
                    ></router-link
                  >
                  <router-link class="ket-text link" to="/kebijakan" aria-current="page"
                  @click.native="movePage"
                    ><span class="text-ket"
                      >Kebijakan Privasi</span
                    ></router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 tiga-tiga">
            <div class="kontak">
              <div class=""><span>Kontak</span></div>
              <div class="row bawah-kontak pt-3">
                <div class="col-satu d-flex">
                  <div class="col-2 col_img">
                    <img src="../assets/sms.png" alt="" />
                  </div>
                  <div class="col-10">
                    <span class="col_text">bd@kompack.id</span>
                  </div>
                </div>
                <div class="col-dua pt-2 d-flex">
                  <div class="col-2 col_img">
                    <img src="../assets/call.png" alt="" />
                  </div>
                  <div class="col-10">
                    <span class="col_text">0813-2801-2118</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <!-- <-- -- Mobile -->
    <div class="row row_footer-2">
      <div class="container cntr_footer-2 justify-content-center">
        <div class="col-lg-5">
          <div class="logo-location">
            <div class="image-footer">
              <img
                src="../assets/logo-kompack-white.png"
                width="150px"
                alt=""
              />
            </div>
            <div class="row bawah-logo-white pt-3 d-flex">
              <div class="col-1 lokasi">
                <img class="" src="../assets/lokasi.png" alt="" />
              </div>
              <div class="col-9">
                <span class="ket-loc">
                  Head Office Komerce <br />
                  Jln. Sawah Tengah No. 3 Desa Tunjungmuli Kecamatan
                  Karangmoncol Kabupaten Purbalingga (53355)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 tiga-dua">
          <div class="perusahaan">
            <div class=""><span class="title-footer">Perusahaan</span></div>
            <div class="row justify-content-left text-title pt-3">
              <div class="col-9">
                <router-link class="ket-text link" to="/tentang" aria-current="page"
                  @click.native="movePage"
                  ><div class="text-ket">Tentang Kami</div></router-link
                >
                <router-link class="ket-text link" to="/syarat" aria-current="page"
                  @click.native="movePage"
                  ><div class="text-ket"
                    >Syarat dan Ketentuan</div
                  ></router-link
                >
                <router-link class="ket-text link" to="/kebijakan" aria-current="page"
                  @click.native="movePage"
                  ><div class="text-ket">Kebijakan Privasi</div></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 tiga-tiga">
          <div class="kontak">
            <div class=""><span>Kontak</span></div>
            <div class="row bawah-kontak pt-3">
              <div class="col-satu d-flex">
                <div class="col-2 col_img">
                  <img src="../assets/sms.png" alt="" />
                </div>
                <div class="col-10">
                  <span class="col_text">bd@kompack.id</span>
                </div>
              </div>
              <div class="col-dua pt-2 d-flex">
                <div class="col-2 col_img">
                  <img src="../assets/call.png" alt="" />
                </div>
                <div class="col-10">
                  <span class="col_text">0813-2801-2118</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row row_footer-3">
      <footer>
        <span>Copyright 2022 kompack.id. All rights reserved.</span>
      </footer>
    </div>
     <div class="icon-mobile"></div>
  </div>
</template>

<script>
export default {
  methods: {
    movePage() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@1,900&display=swap");
* {
  padding: 0%;
  margin: 0%;
  max-width: 100%;
}
img {
  max-width: 100%;
}
.footer {
  background-color: #ed5f07;
  width: 100%;
  padding-bottom: 93px;
  padding-bottom: 24px;
  padding-left: 0%;
  padding-right: 0%;
  z-index: 2000;
}
.ket-loc {
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fff;
}
.tiga-dua {
  padding-left: 5%;
  padding-top: 1%;
}
ul {
  padding: 0;
  list-style: none;
  text-align: left;
}
.link {
  color: #fff;
  text-decoration: none;
  display: inline-block;
}
.link:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.link:hover:after {
  width: 100%;
  left: 0;
}
.title-footer {
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fff;
}
.ket-text {
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.5px;
  text-align: left;
}
.kontak {
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fff;
  padding-top: 3%;
}
.col_text {
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #fff;
}
.row_footer-3 {
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #fff;
}
.col-2,
.col-9,
.col-10 {
  padding-left: 0%;
  padding-right: 0%;
}
.lokasi {
  text-align: center;
  padding-left: 0%;
  padding-right: 0%;
}
.text-ket {
  color: #fff;
}
.icon {
  background-image: url(../assets/icon-footer.png);
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 13%;
  height: 150px;
  z-index: 500px;
  margin-bottom: -80px;
}

@media (max-width: 429px) {
  .row_footer-1 {
    display: none;
  }
  .icon {
    display: none;
  }
  .image-footer {
    display: none;
  }
  .footer {
    text-align: left;
    padding: 0%;
  }
  .kontak {
    padding-left: 15%;
    margin-top: 6%;
  }
  .perusahaan {
    padding-left: 10%;
    margin-top: 10%;
  }

  .bawah-logo-white {
    padding-left: 6%;
    margin-top: 10%;
  }
  .row_footer-3 {
    text-align: left;

    padding: 9%;
    margin-left: 0%;
    margin-right: 0%;
  }
  .icon-mobile {
  background-image: url(../assets/icon-footer.png);
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 25%;
  margin-right: 50px;
  z-index: 500px;
  height: 100px;
  margin-top: -50px;
}
}
@media (min-width: 430px) and (max-width: 768px) {
  .row_footer-2 {
    display: none;
  }
  footer {
    text-align: center;
  }
  .tiga-dua {
    padding-left: 0%;
    padding-top: 1%;
  }
  .bawah-logo-white {
    margin-left: 0%;
    margin-right: 0%;
  }
  .icon {
    background-size: 13%;
  }
}
@media (min-width: 769px) {
  .cntr_footer-2 {
    display: none;
  }
  footer {
    text-align: center;
    padding-top: 93px;
  }
  .icon {
    background-size: 10%;
  }
}
</style>
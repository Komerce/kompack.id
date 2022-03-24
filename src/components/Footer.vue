<template>
  <div class="footer">
    <div class="row row_footer-1"> 
      <div class="container cntr_footer-1 d-flex justify-content-center">
        <div class="col-lg-5 col-md-6 col-12">
          <div class="logo-location">
            <div class="image-footer">
              <img src="../assets/logo-kompack-white.png" width="150px" alt="">
            </div>
            <div class="row bawah-logo-white pt-3 d-flex">
              <div class="col-1 lokasi"><div class=""><img src="../assets/lokasi.png" alt=""></div></div>
              <div class="col-9">
                <span class="ket-loc">
                  Head Office Komerce <br> Jln. Sawah Tengah No. 1 Desa Tunjungmuli Kecamatan Karangmoncol Kabupaten Purbalingga (53355)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 tiga-dua">
          <div class="perusahaan">
              <div class=""><span class="title-footer">Perusahaan</span></div>
              <div class="row text-title pt-3">
                <ul>
                  <li class="ket-text"><a class="link" href="https://kompack.id/tentang-kami/"><span class="text-ket">Tentang Kami</span></a></li>
                  <li class="ket-text"><a class="link" href="https://kompack.id/syarat-ketentuan/"><span class="text-ket">Syarat dan Ketentuan</span></a></li>
                  <li class="ket-text"><a class="link" href="https://kompack.id/kebijakan-privasi/"><span class="text-ket">Kebijakan Privasi</span></a></li>
                </ul>
              </div>
          </div>
        </div>
        <div class="col-lg-3 tiga-tiga">
          <div class="kontak">
            <div class=""><span>Kontak</span></div>
            <div class="row bawah-kontak pt-3">
              <div class="col-satu d-flex">
                <div class="col-2 col_img"><img src="../assets/sms.png" alt=""></div>
                <div class="col-10"><span class="col_text">bd@kompack.id</span></div>
              </div>
              <div class="col-dua pt-2 d-flex">
                <div class="col-2 col_img"><img src="../assets/call.png" alt=""></div>
                <div class="col-10"><span class="col_text">0813-2801-2118</span></div>
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
              <img src="../assets/logo-kompack-white.png" width="150px" alt="">
            </div>
            <div class="row bawah-logo-white pt-3 d-flex">
              <div class="col-1 lokasi"><img class="" src="../assets/lokasi.png" alt=""></div>
              <div class="col-9">
                <span class="ket-loc">
                  Head Office Komerce <br> Jln. Sawah Tengah No. 1 Desa Tunjungmuli Kecamatan Karangmoncol Kabupaten Purbalingga (53355)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 tiga-dua">
          <div class="perusahaan">
              <div class=""><span class="title-footer">Perusahaan</span></div>
              <div class="row justify-content-center text-title pt-3">
                <ul>
                  <li class="ket-text"><a class="link" href="https://kompack.id/tentang-kami/"><span class="text-ket">Tentang Kami</span></a></li>
                  <li class="ket-text"><a class="link" href="https://kompack.id/syarat-ketentuan/"><span class="text-ket">Syarat dan Ketentuan</span></a></li>
                  <li class="ket-text"><a class="link" href="https://kompack.id/kebijakan-privasi/"><span class="text-ket">Kebijakan Privasi</span></a></li>
                </ul>
              </div>
          </div>
        </div>
        <div class="col-lg-3 tiga-tiga">
          <div class="kontak">
            <div class=""><span>Kontak</span></div>
            <div class="row bawah-kontak pt-3">
              <div class="col-satu d-flex">
                <div class="col-2 col_img"><img src="../assets/sms.png" alt=""></div>
                <div class="col-10"><span class="col_text">bd@kompack.id</span></div>
              </div>
              <div class="col-dua pt-2 d-flex">
                <div class="col-2 col_img"><img src="../assets/call.png" alt=""></div>
                <div class="col-10"><span class="col_text">0813-2801-2118</span></div>
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
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@1,900&display=swap');
* {
  padding: 0%;
  margin: 0%;
  max-width: 100%;
}
img {
  max-width: 100%;
}
  .footer {
    background-color:#ED5F07;
    width: 100%;
    padding: 5%;
    padding-bottom: 1%;
    padding-left: 0%;
    padding-right: 0%;
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
.col-2, .col-9, .col-10 {
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
@media (max-width: 429px) {
  .row_footer-1 {
    display: none;
  }
  .image-footer {
    display: none;
  }
  .footer {
    text-align: left;
    padding: 0%;
    padding-bottom: 15%;
  }
  .kontak {
    padding-left: 13%;
  }
  .perusahaan,
  .bawah-logo-white {
    padding-left: 10%;
  }
  .row_footer-3 {
    text-align: left;

    padding: 9%;
    margin-left: 0%;
    margin-right: 0%;
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
}
@media (min-width: 769px) {
.cntr_footer-2 {
  display: none;
}
footer {
  text-align: center;
  padding-top: 5%;
}
}
</style>
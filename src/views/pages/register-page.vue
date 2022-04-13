<template>
  <div class="register-page">
    <div class="head_register text-center">
      <div class="logo-white">
        <img src="@/assets/logo_kompack_white.png" alt="" />
      </div>
      <div class="head">
        <h2>Registrasi Partner Kompack</h2>
      </div>
      <div class="subhead">
        <h4>Hallo, sobat kompack!!</h4>
      </div>
    </div>
    <form method="post" class="form-register container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Masukan nama lengkap kamu"
              required
            />
          </div>
          <div class="form-group">
            <label for="phonenum">Nomor HP (Whatsapp)</label>
            <input
              type="tel"
              class="form-control"
              id="phonenum"
              placeholder="xxxx-xxxx-xxxx"
              pattern="^\d{4}-\d{4}-\d{4}$"
              required
            />
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-5">
          <div class="form-group">
            <label for="kota">Kota</label>
            <input
              type="text"
              class="form-control"
              id="kota"
              placeholder="Masukan nama kotamu"
              required
            />
          </div>
          <div class="">
            <label>Email</label>
            <input type="email" name="" class="form-control" placeholder="Masukan email kamu" />
            <div class="message success">Email Benar!</div>
            <div class="message error">Email Salah! tambahkan @ dan dot (.)</div>
          </div>
        </div>
        <div class="col-lg-11">
          <div class="form-group">
            <label for="produk">Jenis Produk</label>
            <input
              type="text"
              class="form-control"
              id="produk"
              placeholder="Masukan jenis produk kamu"
              required
            />
          </div>
          <div class="form-group">
            <label for="url-type-input">Toko Online atau Landing Page</label>
            <input
              type="url"
              class="form-control"
              id="url-type-input"
              placeholder="Masukan link tokomu atau landingpagemu"
            />
          </div>
        </div>
        <div class="button">
        <router-link to="" class="tombol">Kembali</router-link>
        <input class="tombol" type="submit" value="Daftar">
      </div>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";

$(function () {
  // var regExp = /^\w*(\.\w*)?@\w*\.[a-z]+(\.[a-z]+)?$/;
  var regExp = /^([\w\\.\\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

  $('[type="email"]').on("keyup", function () {
    $(".message").hide();
    regExp.test($(this).val())
      ? $(".message.success").show()
      : $(".message.error").show();
  });
});
export default {};
</script>

<style scoped>
* {
  padding: 0%;
  margin: 0%;
  max-width: 100%;
}
img {
  max-width: 100%;
}



input[type="tel"] {
  border: 1px solid #ddd;
  padding: 4px 8px;
}
input[type="tel"]:focus {
  border: 1px solid #000;
}



.message {
  font: 14px;;
  display: none;
  padding: 5px;
  color: #fff;
}
.error {
  background: red;
}
.success {
  background: green;
}



.register-page {
  background-image: url("../../assets/bg-formregister.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  text-align: -webkit-center;
  padding-top: 28px;
}
.head_register {
  color: #ffffff;
}
.head {
  margin-top: 32px;
  margin-bottom: 24px;
  font-weight: 600;
}
.subhead {
  font-weight: 400;
  margin-bottom: 24px;
}
.form-register {
  background-color: #ffffff;
  padding: 0px 40px 40px 40px;
  width: 80%;
  text-align: left;
}
.form-control {
  height: 45px;
  border-radius: 10px;
  padding-left: 10px;
}
.button {
  text-align: right;
  margin-right: 60px;
  margin-top: 40px;
}
.tombol {
  text-decoration: none;
  font-weight: 600;
  color: #f95031;
  margin-left: 10px;
  padding: 16px;
  border-radius: 10px;
}
input[type="submit"] {
    font-weight: 600;
    padding: 16px;
    border: none;
    background: none;
    color: #f95031;
}
.tombol:hover {
  border: solid 1px #f95031;
}
label {
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 10px;
}
</style>
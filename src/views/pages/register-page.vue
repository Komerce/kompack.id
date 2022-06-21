<template>
  <div class="register-page">
    <div class="head_register text-center py-3">
      <div class="logo-white pb-3">
        <img src="@/assets/kompack-new-white.png" width="250px" alt="" />
      </div>
    </div>
      <div class="con-form">
        <form
          id="formRegister"
          action="https://aplikasi.kirim.email/form/form-lp-komship-8Uh75HX7"
          method="post"
          class="form-register container"
        >
          <div class="text-reg text-center pt-3" style="color:#626262">
            <div class="head">
              <h2>Registrasi Partner Kompack</h2>
            </div>
            <div class="subhead">
              <h4>Hallo, sobat kompack!!</h4>
            </div>
          </div>
          <div class="row justify-content-center row-form" style="color:#626262">
            <div class="col-lg-5">
              <div class="form-group">
                <label for="name">Nama Lengkap</label>
                <input
                  v-model="name"
                  name="full_name"
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
                  v-model="phone"
                  name="subscriber_field_values_16909"
                  type="number"
                  class="form-control"
                  id="phonenum"
                  placeholder="Masukan nomor hp kamu"
                  maxlength="13"
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  required
                />
              </div>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-5">
              <div class="form-group">
                <label for="kota">Kota</label>
                <input
                  v-model="city"
                  name="subscriber_field_values_17305"
                  type="text"
                  class="form-control"
                  id="kota"
                  placeholder="Masukan nama kotamu"
                  required
                />
              </div>
              <div class="">
                <label>Email</label>
                <input
                  v-model="email"
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="Masukan email kamu"
                />
                <div class="message success">Email Benar!</div>
                <div class="message error">
                  Email Salah! tambahkan @ dan dot (.)
                </div>
              </div>
            </div>
            <div class="col-lg-11">
              <div class="form-group">
                <label for="produk">Kategori Produk</label>
                <input
                  v-model="product"
                  name="subscriber_field_values_19477"
                  type="text"
                  class="form-control"
                  id="produk"
                  placeholder="Masukan kategori produk kamu"
                  required
                />
              </div>
            </div>
            <div class="button">
              <router-link
                to="/"
                class="tombol"
                aria-current="page"
                @click.native="movePage"
                >Kembali</router-link
              >
              <input class="tombol" type="submit" value="Daftar" />
            </div>
          </div>
        </form>
      </div>
      <div class="row justify-content">
        <div class="image">
          <img src="../../assets/kurir-1.png" alt="">
        </div>
      </div>
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
export default {
  methods: {
    movePage() {
      window.scrollTo(0, 0);
    },
  },
};
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

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input[type="tel"] {
  border: 1px solid #ddd;
  padding: 4px 8px;
}
input[type="tel"]:focus {
  border: 1px solid #000;
}

.message {
  font: 14px;
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
  background-color: #4285F4;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 900px;
  text-align: -webkit-center;
  padding-top: 28px;
}
.con-form {
  background-image: url("../../assets/bg-new.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 730px;
  border-radius: 0px;
  padding-top: 85px;
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
  background-color: #F6F6F9;
  padding: 0px 40px 40px 40px;
  max-width: 68%;
  border-radius: 10px;
  text-align: left;
}

.form-control {
  height: 45px;
  border-radius: 10px;
  padding-left: 10px;
}
.row-form .button {
  text-align: right;
  margin-right: 60px;
  margin-top: 40px;
}
.tombol {
  text-decoration: none;
  font-weight: 600;
  color: #4285F4;
  margin-left: 20px;
  height: 56px;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
}
input[type="submit"] {
  font-weight: 600;
  padding: 16px;
  border: none;
  background: #4285F4;
  color: #ffff;
}
input[type="submit"]:hover {
  background: transparent;
  color: #4285F4;
  border: 1px #4285F4 solid;
}
.tombol:hover {
  border: solid 1px #4285F4;
  height: 56px;
  width: 150px;
  padding: 10px;
  border-radius: 10px;
}
label {
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 10px;
}
.image {
  padding-top: 25px;
  width: 280px;
  height: 391px;
}
.justify-content {
  margin-top: -290px;
  justify-content: flex-end;
}
 /* media query  */
@media (min-width: 1281px) {
  .con-form {
    background-image: url("../../assets/bg-new.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    border-radius: 0px;
    padding-top: 85px;
  }
}

@media (min-width: 1200px) and (max-width: 1280px) {
  .con-form {
    background-image: url("../../assets/bg-new.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 730px;
    border-radius: 0px;
    padding-top: 85px;
  }
  .register-page {
  background-color: #4285F4;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 900px;
  text-align: -webkit-center;
  padding-top: 28px;
}
}

@media (min-width: 1025px) and (max-width: 1199px) {
  .con-form {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    height: 730px;
    border-radius: 0px;
    padding-top: 85px;
  }
  .register-page {
  background-color: #4285F4;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 900px;
  text-align: -webkit-center;
  padding-top: 28px;
}
.image {
  padding-top: 25px;
  width: 250px;
  height: 391px;
}
}

@media (min-width: 992px) and (max-width: 1024px) {
  .con-form {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    border-radius: 0px;
    padding-top: 45px;
  }
  .image {
  padding-top: 55px;
  width: 250px;
  height: 391px;
}
}

@media (min-width: 768px) and (max-width: 991px) {
   .con-form {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
    border-radius: 0px;
    padding-top: 45px;
  }
  .image img {
  display: none;
}
  .row-form .button[data-v-c46d2978] {
    text-align: right;
    margin-right: 0px;
    margin-top: 40px;
}
}

@media (min-width: 481px) and (max-width: 767px) {
  .form-register[data-v-c46d2978] {
    background-color: #F6F6F9;
    padding: 0px 20px 20px 20px;
    max-width: 90%;
    border-radius: 10px;
    text-align: left;
}
.con-form {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
    border-radius: 0px;
    padding-top: 15px;
  }
  .image img {
  display: none;
}
  .row-form .button[data-v-c46d2978] {
    text-align: right;
    margin-right: 0px;
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
}

}

@media (min-width: 400px) and (max-width: 480px) {
  .row-form .button {
    text-align: right;
    margin-right: 0px;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
}
 .form-register[data-v-c46d2978] {
    background-color: #F6F6F9;
    padding: 0px 15px 15px 15px;
    max-width: 100%;
    border-radius: 10px;
    text-align: left;
}
.con-form {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
    border-radius: 0px;
    padding-top: 5px;
  }
  .image img {
  display: none;
}
.text-reg .head h2 {
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}
.text-reg .subhead h4 {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
}
.form-group label {
font-family: Poppins;
font-size: 16px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0.5px;
text-align: left;

margin-top: 20px;
}

}
@media (min-width: 240px) and (max-width: 399px) {
  .form-register[data-v-c46d2978][data-v-c46d2978] {
    background-color: #F6F6F9;
    padding: 0px 15px 15px 15px;
    max-width: 100%;
    border-radius: 10px;
    text-align: left;
}
.con-form[data-v-c46d2978] {
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
    border-radius: 0px;
    padding-top: 5px;
    margin-left: 0px;
}
.text-reg .head h2 {
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
}
.text-reg .subhead h4 {
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
}
.image img {
  display: none;
}
.row-form .button[data-v-c46d2978] {
    text-align: right;
    margin-right: 0px;
    margin-top: 40px;
    display: flex;
}
}
  
</style>
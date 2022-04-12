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
            <label for="whatsapp">Nomor HP (Whatsapp)</label>
            <input
              type="number"
              class="form-control"
              id="whatsapp"
              placeholder="Masukan nomor hp kamu"
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
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Masukan email kamu"
              required
            />
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
            <label for="landingpage">Toko Online atau Landing Page</label>
            <input
              type="link"
              class="form-control"
              id="landingpage"
              placeholder="Masukan link tokomu atau landingpagemu"
            />
          </div>
        </div>
      </div>
      <div class="button">
        <router-link to="" class="tombol">Kembali</router-link>
        <router-link to="" class="tombol">Daftar</router-link>
      </div>
      <p id="message"></p>
    </form>
  </div>
</template>

<script>

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

.register-page {
    background-image: url("../../assets/bg-formregister.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
    text-align: -webkit-center;
    padding-top: 28px;
}
.head_register {
    color: #FFFFFF;
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
  background-color: #FFFFFF;
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
    color: #F95031;
    margin-left: 10px;
    padding: 16px;
    border-radius: 10px;
}
.tombol:hover {
    border: solid 1px #F95031;
}
label {
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 10px;
}
</style>
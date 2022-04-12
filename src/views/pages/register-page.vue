<template>
  <div class="register-page">
    <div class="text-center">
      <div class="logo-white">
        <img src="@/assets/logo-kompack-white.png" alt="" />
      </div>
      <div class="head">
        <h2>Registrasi Partner Kompack</h2>
      </div>
      <div class="subhead">
        <h4>Hallo, sobat kompack!!</h4>
      </div>
    </div>
    <form class="form-register container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="form-group">
            <label for="name">Nama Lengkap</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Masukan nama lengkap kamu"
            />
          </div>
          <div class="form-group">
            <label for="whatsapp">Nomor HP (Whatsapp)</label>
            <input
              type="number"
              class="form-control"
              id="whatsapp"
              placeholder="Masukan nomor hp kamu"
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
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Masukan email kamu"
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
        <router-link to="/"><button>Kembali</button></router-link>
        <router-link to="/"><button>Daftar</button></router-link>
      </div>
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
}
.form-register {
  background-color: #FFFFFF;
  padding: 60px 60px 40px 40px;
  width: 80%;
  text-align: left;
}
.button {
    text-align: right;
    margin-right: 60px;
}
label {
    font-weight: 600;
    margin-top: 50px;
}
</style>
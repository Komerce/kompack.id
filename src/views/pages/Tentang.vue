<template>
  <div class="Tentang">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-10 col-md-10 col-10">
        <h1 class="head-about">Tentang Kami</h1>
        <div class="subhead1-about">
          <p>
            <span class="kompack">Kompack</span> merupakan platform pelayanan
            pengelolaan gudang untuk memudahkan pengguna dalam mengelola urusan
            pergudangan mulai dari proses inbound (penambahan stok), management
            stok, pengemasan, dan pengiriman. Kompack bekerja sama dengan
            pemilik properti sebagai mitra gudang yang sekaligus berperan dalam
            membawahi karyawan atau operator gudang.
          </p>
        </div>
        <div class="subhead2-about">
          <p>
            Rasakan pengalaman layanan fulfillment yang mudah, hemat, dan
            beragam manfaat lainnya dari Kompack. Kami juga berkomitment untuk
            terus mendukung perekonomian dalam negeri dengan memberikan
            kemudahan dalam menjalankan bisnis bagi UMKM dan pebisnis online.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@1,900&display=swap");

* {
  padding: 0%;
  margin: 0%;
  max-width: 100%;
}
img {
  max-width: 100%;
}

.Tentang {
  margin-top: 10%;
  margin-bottom: 5%;
  text-align: -webkit-center;
}
.head-about {
  font-size: 2rem;
  font-weight: 700;
  line-height: 44.8px;
  letter-spacing: 0.5px;
  color: #222222;
  margin-bottom: 7%;
}
.subhead1-about {
  font-size: 1rem;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.5px;
  color: #222222;
  text-align: left;
  margin-bottom: 2%;
}
.subhead2-about {
  font-size: 1rem;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0.5px;
  color: #222222;
  text-align: left;
}
.kompack {
  font-size: 1rem;
  font-weight: 600;
  line-height: 22.4px;
  letter-spacing: 0.5px;
  color: #222222;
}

@media (max-width: 450px) {
  .Tentang {
    margin-top: 10%;
    margin-bottom: 10%;;
  }
  .head-about {
    margin-bottom: 10%;
    font-size: 20px;
    line-height: 30px;
  }
    .subhead1-about, .subhead2-about {
        line-height: 25.6px;
    }
    .subhead1-about {
        margin-bottom: 7%;
    }
}
</style>
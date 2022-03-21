<template>
  <div class="header">
    <div class="row row_header">
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container cntr_header">
          <a class="navbar-brand" ><img src="../assets/logo-kompack.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="/" class="nav-link" aria-current="page" ><span class="title-nav">Beranda</span></a>
              </li>
              <li class="nav-item">
                <span class="nav-ink"></span>
              </li>
              <li class="nav-item">
                <a href="https://kompack.id/tentang-kami/" class="nav-link" aria-current="page" ><span class="title-nav">Tentang Kami</span></a>
              </li>
              <li class="nav-item">
                <span class="nav-ink"></span>
              </li>
              <li class="nav-item">
                <a href="https://kompack.id/syarat-ketentuan/" class="nav-link" aria-current="page" ><span class="title-nav">Syarat dan Ketentuan</span></a>
              </li>
              <li class="nav-item">
                <span class="nav-ink"></span>
              </li>
              <li class="nav-item">
                <a href="https://kompack.id/kebijakan-privasi/" class="nav-link" aria-current="page" ><span class="title-nav">Kebijakan Privasi</span></a>
              </li>
              <li class="nav-item">
                <span class="nav-ink"></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
  .header, .navbar {
    max-width: 100%;
  }
  .navbar-collapse {
    justify-content: flex-end;
  }
  .navbar-nav {
    margin-right: 0%;
  }
ul { 
padding: 0; 
list-style: none; 
text-align: left;
}
.nav-link {
color: #828282;
text-decoration: none;
display: inline-block;
}
.nav-link:after {    
background: none repeat scroll 0 0 transparent;
bottom: 0;
content: "";
display: block;
height: 2px;
left: 50%;
background:#FF6A3A;
transition: width 0.3s ease 0s, left 0.3s ease 0s;
width: 0;
}
.nav-link:hover:after { 
width: 100%; 
left: 0; 
}
  .title-nav {
    font-family: 'Poppins';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #828282;
  }
  .title-nav:hover {
    color: #FF6A3A;
  }
</style>
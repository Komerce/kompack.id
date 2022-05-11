<template>
  <div class="header container" id="header">
    <div class="row row_header ">
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container cntr_header">
          <a class="navbar-brand"
            ><img src="../assets/logo-kompack.png" alt=""
          /></a>
          <div
            class="navbar"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="humburgers">
              <input id="menu-toggle" type="checkbox" />
              <label class="menu-button-container" for="menu-toggle">
                <div class="menu-button"></div
              ></label>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link" aria-current="page"
                  ><span class="title-nav">Beranda</span></router-link
                >
              </li>
              <li class="nav-item">
                <span class="nav-ink"></span>
              </li>
              <li class="nav-item">
                <router-link
                  to="/tentang"
                  class="nav-link"
                  aria-current="page"
                  @click.native="movePage"
                  ><span class="title-nav">Tentang Kami</span></router-link
                >
              </li>
              <li class="nav-item">
                <span class="nav-ink"></span>
              </li>
              <li class="nav-item">
                <router-link
                  to="/syarat"
                  class="nav-link"
                  aria-current="page"
                  @click.native="movePage"
                  ><span class="title-nav"
                    >Syarat dan Ketentuan</span
                  ></router-link
                >
              </li>
              <li class="nav-item">
                <span class="nav-ink"></span>
              </li>
              <li class="nav-item">
                <router-link
                  to="/kebijakan"
                  class="nav-link"
                  aria-current="page"
                  @click.native="movePage"
                  ><span class="title-nav">Kebijakan Privasi</span></router-link
                >
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

/* animated humberger menu */

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #ff6a3a;
  position: absolute;
  height: 3px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

/* animated humberger menu end */

.navbar-brand {
  /* margin-left: 50px; */
}
.row_header > * {
  padding-right: 0px;
  padding-left: 0px;
  
}
.row {
  --bs-gutter-x: 0rem;
}
.header,
.navbar {
  max-width: 100%;
  padding-top: 0rem;
  padding-bottom: 0rem;
}

.navbar-collapse {
  justify-content: flex-end;
  /* padding-right: 50px; */
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
.nav-item {
  margin-left: 10px;
}
.nav-link:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  background: #ff6a3a;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
  right: 0;
}
.nav-link:hover:after {
  width: 100%;
  left: 0;
}
.title-nav {
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #828282;
}
.title-nav:hover {
  color: #ff6a3a;
}
.title-nav:hover:after {
  color: #ff6a3a;
}
.container-fluid {
  padding: 0%;
}

@media (max-width: 900px) {
  .humburgers {
    border: solid 0.5px #ff6a3a;
    margin-right: 40px;
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 6px;
  }
  .title-nav {
    color: #ffffff;
  }
  .title-nav:hover {
    color: #ffffff;
  }
  .nav-link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    background: #ffffff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    right: 0;
  }
  .menu-button-container {
    display: flex;
  }

  .menu {
    position: absolute;
    top: 0;
    margin-top: 50px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .navbar-collapse {
    background-color: #ff6a3a;
  }
}
@media (max-width: 450px) {
  .humburgers {
    margin-right: 10px;
  }
  .navbar-brand {
    margin-left: 10px;
  }
}
</style>
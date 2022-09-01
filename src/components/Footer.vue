<template>
  <!-- Footer -->
  <div id="footer">
    <div class="container d-flex justify-content-between">
      <p class="footer text-light">© 2022 Anime-Poll</p>
      <ul class="icons mt-4 d-flex">
        <li class="ms-5 text-light">
          <a href="#">
            <i class="fa-brands fa-facebook-square FaceBook"></i>
          </a>
        </li>

        <li class="ms-5 text-light">
          <a href="#">
            <i class="fa-brands fa-instagram Instagram"></i>
          </a>
        </li>

        <li class="ms-5 text-light">
          <a href="#">
            <i class="fa-brands fa-twitter Twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Footer Done -->
</template>
<script>
export default {};
</script>
<style scoped>
div#footer {
  margin-top: -78px;
  background-color: rgba(0, 0, 0, 0.367);
  width: 100%;
}

p.footer.text-light {
  margin-top: 2%;
}

ul.icons.mt-4.d-flex {
  list-style-type: none;
  padding: 0;
  font-size: 25px;
  align-items: center;
}

p.footer.text-light.mt-5 {
  font-size: 19px;
  margin-top: 0;
  margin-bottom: 2rem;
}

a {
  color: #f9fafb;
  text-decoration: none;
}

/* Links */
.FaceBook:hover {
  color: #3b5998;
  background-image: linear-gradient(
    to bottom,
    transparent 20%,
    white 20%,
    white 93%,
    transparent 93%
  );
  background-size: 55%;
  background-position: 70% 0;
  background-repeat: no-repeat;
}

.Instagram:hover {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;

  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: white;
}

.Twitter:hover {
  color: #1da1f2;
}
/* Links done */

a {
  width: 35%;
}

@media only screen and (max-width: 376px) {
  p.footer.text-light.mt-5 {
    font-size: 12px;
    margin-top: 31px;
    margin-bottom: 0rem;
  }
  div#footer {
    margin-top: -23%;
  }
  .Form_Holder {
    padding-bottom: 20%;
  }
}
@media only screen and (max-width: 322px) {
  div#footer {
    margin-top: -93px;
    background-color: rgba(0, 0, 0, 0.367);
    width: 100%;
  }
}
</style>

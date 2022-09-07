<template>
  <div id="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div class="container">
      <div class="row">
        <!-- Image On Home Page -->
        <div class="col-lg-6 img-land">
          <img
            alt="Bookdom logo"
            src="https://github.com/AbuBakrKhan24/e-com-front-end/blob/main/public/gohan.png?raw=true"
            class="img-fluid home_img"
          />
        </div>
        <!-- Image On Home Page Done -->
        <div class="col-lg-6 details">
          <!-- These are the Details on the home page -->
          <header>
            <h1>Hello there and welcome to Anime-Poll.</h1>
            <h4>
              We are an online e-voting or as some call it an e-polling website
            </h4>
            <p class="text-light mt-2">
              join our community with many users on our platform and cast your
              home for your favourite Anime, Manga, Korean Manhwa and Chinese
              Manhua and lets see what is the highest homed for this year.
            </p>
          </header>
          <!-- These are the Details on the home page Done -->

          <!-- These are the buttons on the home page -->
          <buttons>
            <div class="buttons mt-5 mb-5">
              <router-link to="/login"
                ><button
                  type="button"
                  class="read btn btn-lg text-light rounded-pill"
                >
                  Login
                </button></router-link
              >
              <router-link to="/signup">
                <button
                  type="button"
                  class="write btn btn-lg text-light rounded-pill"
                >
                  Sign Up
                </button>
              </router-link>
            </div>
          </buttons>
          <!-- These are the buttons on the home page Done -->
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Varela&display=swap");
body {
  font-family: "Varela", sans-serif;
}

a {
  width: 35%;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 600;
  font-size: 50px;
  color: white;
}

h4 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-top: 27px;
  color: white;
}



#hello {
  height: 100%;
  /* padding-top: 155px; */
  /* padding-bottom: 14%; */
  background-image: radial-gradient(
    circle,
    #3d2f67,
    #34255f,
    #2a1c56,
    #21124e,
    #170846
  );
}

img {
  height: 50vh;
  border-radius: 10%;
}

.img-land {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons.mt-5.mb-5 {
  display: flex;
  justify-content: center;
}
button {
  width: 75%;
}
button.read {
  background-color: rgba(255, 152, 104);
}

button.read:hover {
  background-color: rgba(81, 153, 252);
}

button.write {
  background-color: rgba(255, 80, 104);
}

button.write:hover {
  background-color: rgba(81, 153, 252);
}

@media only screen and (max-width: 992px) {
  .col {
    margin-top: 40px;
  }

  .read {
    margin-bottom: 10px;
    width: 200px;
  }

  .write {
    width: 200px;
  }

  .row {
    display: flex;
    flex-direction: column;
  }

  .img-fluid {
    margin-bottom: 20px;
  }
}

p {
  font-size: 19px;
  margin-top: 0;
  margin-bottom: 2rem;
}

a {
  color: #f9fafb;
  text-decoration: underline;
}

/* Media Queries */
@media only screen and (max-width: 376px) {
  #hello {
    padding-top: 10%;
    padding-bottom: 28%;
  }
  h1 {
    font-size: 40px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    margin-left: -40px;
  }
}
@media only screen and (max-width: 340px) {
  img {
    height: 35vh;
  }
}
</style>

<template>
  <div class="box">
    <div class="Form_Holder">
      <div class="card" style="width: fit-content">
        <form @submit.prevent="login">
          <h1 class="head">Log in to Anime-Poll</h1>
          <img
            class="img-fluid"
            src="https://github.com/AbuBakrKhan24/e-com-animeStore_front-end/blob/main/my%20resources/da1dj4y-d6317c71-6968-4d1a-aca8-cbe1cc1b7048.gif?raw=true"
          />
          <fieldset>
            <!-- Username -->
            <label
              >Enter Email
              <input type="text" name="user-name" required v-model="email"
            /></label>
            <!-- Username done -->
            <!-- Password -->
            <label
              >Enter Password
              <input
                id="myInput"
                type="password"
                name="password"
                required
                v-model="password"
              />
              <input type="checkbox" @click="myFunction()" />Show Password
              <!-- An element to toggle between password visibility -->
            </label>
            <!-- Password done -->
          </fieldset>
          <!-- Button to submit  -->
          <input type="submit" value="Login" />
          <!-- <button type="submit">login</button> -->
          <!-- Button to submit done -->
        </form>
        <div v-if="user">Welcome {{ user.username }}</div>
        <!-- <div v-else class="error">Error Credentials Does Not Match!</div> -->
        <footer>
          Don't have an account?
          <router-link to="/signup">Sign Up</router-link>
        </footer>
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
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    myFunction() {
      let show = document.getElementById("myInput");
      if (show.type === "password") {
        show.type = "text";
      } else {
        show.type = "password";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.head {
  margin-top: 1rem;
}

.img-fluid {
  max-width: 15%;
  height: auto;
}
@keyframes load {
  33% {
    transform: rotate(10deg);
  }

  66% {
    transform: rotate(-10deg);
  }
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 56rem;
  height: 100vh;
  background-image: radial-gradient(
    circle,
    #3d2f67,
    #34255f,
    #2a1c56,
    #21124e,
    #170846
  );
}
// box done
.pokeballAnimation {
  transform-origin: center bottom;
  animation: load 1s infinite alternate;
}

@keyframes load {
  33% {
    transform: rotate(10deg);
  }

  66% {
    transform: rotate(-10deg);
  }
}
// Form_Holder
.Form_Holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  // padding-bottom: 5%;
}
// Form_Holder done

form {
  width: 60vw;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding-bottom: 2em;
}

// Headeing
p {
  // margin-top: 3rem;
  margin-bottom: 1rem;

  font-size: 24px;
  font-weight: 700;
}
// Headeing done

fieldset {
  border: none;
  padding: 2rem 30px;
}

label {
  display: block;
  margin: 0.5rem 0;
}

input,
textarea,
select {
  margin: 10px 0 0 0;
  width: 100%;
  min-height: 2em;
}

input,
textarea {
  background-color: #ffffff;
  border: 1px solid #0a0a23;
  color: #0a0a23;
}

.inline {
  width: unset;
  margin: 0 0.5em 0 0;
  vertical-align: middle;
}

input[type="submit"] {
  display: block;
  width: 60%;
  margin: 1em auto;
  height: 2em;
  font-size: 1.1rem;
  // background-color: #3b3b4f;
  // /* border-color: white; */
  // min-width: 300px;
}

input[type="submit"]:focus {
  background-color: #0a0a23;
  color: white;
}

input[type="file"] {
  padding: 1px 2px;
}

a {
  color: #0a0a23;
}

.error {
  color: red;
}

footer {
  margin-bottom: 10%;
}

@media only screen and (max-width: 376px) {
  .box {
    min-height: 160vh;
    padding-bottom: 20%;
  }
  div#footer {
    margin-top: -26%;
  }
}
</style>

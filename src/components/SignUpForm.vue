<template>
  <div class="box">
    <div class="Form_Holder">
      <div class="card" style="width: fit-content">
        <div class="card-body">
          <h1>Sign Up Form</h1>
          <p>Please fill out this form with the required information</p>
          <form @submit.prevent="register">
            <!-- Form details -->
            <fieldset>
              <!-- Username -->
              <label
                >Add Username
                <input v-model="username" type="text" name="user-name" required
              /></label>
              <!-- email -->
              <label
                >Enter Your Email:
                <input v-model="email" type="email" name="email" required
              /></label>
              <!-- password -->
              <label
                >Create a New Password:
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  pattern="[a-z0-5]{8,}"
                  required
              /></label>
            </fieldset>
            <!-- Bio -->
            <fieldset>
              <label
                >Provide a bio:
                <textarea
                  name="bio"
                  v-model="about"
                  rows="3"
                  cols="30"
                  placeholder="I like writing on the beach..."
                ></textarea>
              </label>
            </fieldset>
            <!-- Avatar -->
            <fieldset>
              <div class="image_holder">
                <img
                  v-if="avatar"
                  :src="avatar"
                  class="shadow-4"
                  style="width: 150px"
                  alt="Avatar"
                />
              </div>
              <label
                >Choose your avatar:
                <select v-model="avatar" multiple>
                  <!-- 1 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Aot/Armin.png?raw=true"
                  >
                    1
                  </option>
                  <!-- 2 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Aot/Armin_2.png?raw=true"
                  >
                    2
                  </option>
                  <!-- 3 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Aot/Eren.png?raw=true"
                  >
                    3
                  </option>
                  <!-- 4 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Aot/Mikasa.png?raw=true"
                  >
                    4
                  </option>
                  <!-- 5 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Aot/Sasha.png?raw=true"
                  >
                    5
                  </option>
                  <!-- 6 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Aot/levi.png?raw=true"
                  >
                    6
                  </option>
                  <!-- 7 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Bleach/Izuru%20Kira.png?raw=true"
                  >
                    7
                  </option>
                  <!-- 8 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Nezeko.jpg?raw=true"
                  >
                    8
                  </option>
                  <!-- 9 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Tanjiro.jpg?raw=true"
                  >
                    9
                  </option>
                  <!-- 10 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Tanjiro_2.jpg?raw=true"
                  >
                    10
                  </option>
                  <!-- 11 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Zenitsu.jpg?raw=true"
                  >
                    11
                  </option>
                  <!-- 12 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/DragonBall/Android%2017%23.png?raw=true"
                  >
                    12
                  </option>
                  <!-- 13 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/DragonBall/Baby.png?raw=true"
                  >
                    13
                  </option>
                  <!-- 14 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/DragonBall/Vegete.png?raw=true"
                  >
                    14
                  </option>
                  <!-- 15 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/DragonBall/dragonball.png?raw=true"
                  >
                    15
                  </option>
                  <!-- 16 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/DragonBall/goku.png?raw=true"
                  >
                    16
                  </option>
                  <!-- 17 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/MHA/all%20might.png?raw=true"
                  >
                    17
                  </option>
                  <!-- 18 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/MHA/midoriya.png?raw=true"
                  >
                    18
                  </option>
                  <!-- 19 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/MHA/todoroki.png?raw=true"
                  >
                    19
                  </option>
                  <!-- 20 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/MHA/toga.png?raw=true"
                  >
                    20
                  </option>
                  <!-- 21 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Naruto/Sasuke.png?raw=true"
                  >
                    21
                  </option>
                  <!-- 22 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Naruto/gaara.png?raw=true"
                  >
                    22
                  </option>
                  <!-- 23 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Naruto/naruto_2.png?raw=true"
                  >
                    23
                  </option>
                  <!-- 24 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/One%20Punch%20Man/saitama.png?raw=true"
                  >
                    24
                  </option>
                  <!-- 25 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Pokemon/jolteon.png?raw=true"
                  >
                    25
                  </option>
                  <!-- 26 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Pokemon/pikachu.png?raw=true"
                  >
                    26
                  </option>
                  <!-- 27 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/Pokemon/umbreon.png?raw=true"
                  >
                    27
                  </option>
                  <!-- 28 -->
                  <option
                    value="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/Avatar%20images/SOA/SOA.png?raw=true"
                  >
                    28
                  </option>
                </select>
                Some images may take longer to load than others so please be
                patient:)
              </label>
            </fieldset>
            <!-- Terms and conditions -->
            <label>
              <input type="checkbox" name="terms" class="inline" required /> I
              accept the
              <a href="https://www.freecodecamp.org/news/terms-of-service/"
                >terms and conditions</a
              >
            </label>
            <!-- Submit button -->
            <input type="submit" value="Sign Up" />
          </form>
          <div v-if="user">
            Welcome {{ user.username }} Your Sign Up was an success!
          </div>
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
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    const user_type = "user";
    return {
      username: "",
      email: "",
      password: "",
      avatar: "",
      user_type: "",
      about: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        username: this.username,
        email: this.email,
        password: this.password,
        avatar: this.avatar,
        user_type: this.user_type,
        about: this.about,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box {
  background-image: radial-gradient(
    circle,
    #3d2f67,
    #34255f,
    #2a1c56,
    #21124e,
    #170846
  );
}
// Form_Holder
.Form_Holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 10%;
  padding-top: 5%;
}
// Form_Holder done

/* Book Icon animation */

body {
  background-color: #f5f5f1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1,
p {
  margin: 1em auto;
  text-align: center;
}

form {
  width: 60vw;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding-bottom: 2em;
}

fieldset {
  border: none;
  padding: 2rem 0;
}

fieldset:not(:last-of-type) {
  border-bottom: 3px solid #3b3b4f;
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
  min-width: 300px;
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

@media only screen and (max-width: 376px) {
  .box {
    min-height: 100vh;
    padding-top: 20%;
    padding-bottom: 50%;
  }
  .Form_Holder[data-v-2cb23e4c] {
    padding-right: 5%;
    padding-left: 5%;
  }
  div#footer[data-v-40ab164b][data-v-40ab164b] {
    margin-top: -23%;
  }
}
</style>

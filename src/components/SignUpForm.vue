<template>
  <div class="box">
    <div class="Form_Holder">
      <div class="card" style="width: fit-content">
        <div class="card-body">
          <h1 class="head">Sign Up Form</h1>
          <img
            class="img-fluid"
            src="https://github.com/AbuBakrKhan24/e-com-animeStore_front-end/blob/main/my%20resources/join%20us.gif?raw=true"
          />
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
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Aot/Armin.webp"
                  >
                    Armin
                  </option>
                  <!-- 2 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Aot/Armin_2.webp"
                  >
                    Armin(2)
                  </option>
                  <!-- 3 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Aot/Eren-Jaeger.webp"
                  >
                    ErenS4
                  </option>
                  <!-- 4 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Aot/Eren.webp"
                  >
                    ErenS4(2)
                  </option>
                  <!-- 5 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Aot/Mikasa.webp"
                  >
                    Mikasa
                  </option>
                  <!-- Sasha -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Aot/Sasha.webp"
                  >
                    Sasha
                  </option>
                  <!-- Levi -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Aot/levi.webp"
                  >
                    Levi
                  </option>
                  <!-- Aizen Sousuke -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Bleach/Aizen%20Sousuke%20Chibi!.webp"
                  >
                    Aizen Sousuke
                  </option>
                  <!-- Byakuya -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Bleach/Bleach%20Anime%20Fan%20Art_%20Chibi%20Byakuya.webp"
                  >
                    Byakuya
                  </option>
                  <!-- Grimmjow -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Bleach/Bleach%20Anime%20Fan%20Art_%20Chibi%20Grimmjow.webp"
                  >
                    Grimmjow
                  </option>
                  <!-- Gin -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Bleach/Gin%20at%20peak%20fashion!.webp"
                  >
                    Gin
                  </option>
                  <!-- Kurosaki Ichigo -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Bleach/Kurosaki%20Ichigo%20Photo_%20Ichigo.webp"
                  >
                    Kurosaki Ichigo
                  </option>
                  <!-- Rukia -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Bleach/rukia.webp"
                  >
                    Rukia
                  </option>
                  <!-- Nezuko -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Nezeko.webp"
                  >
                    Nezuko
                  </option>
                  <!-- Tanjiro -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Tanjiro.webp"
                  >
                    Tanjiro
                  </option>
                  <!-- Tanjiro_2 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Tanjiro_2.webp"
                  >
                    Tanjiro_2
                  </option>
                  <!-- Zenitsu -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Demon%20Slayer/Zenitsu.webp"
                  >
                    Zenitsu
                  </option>
                  <!-- Baby Vegeta -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/DragonBall/Baby.webp"
                  >
                    Baby Vegeta
                  </option>
                  <!-- Chibi Gohan -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/DragonBall/Chibi%20Gohan.webp"
                  >
                    Chibi Gohan
                  </option>
                  <!-- Gogeta SSJ4 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/DragonBall/Gogeta%20SSayanjin4.webp"
                  >
                    Gogeta SSJ4
                  </option>
                  <!-- Margin Vegeta -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/DragonBall/Vegeta.webp"
                  >
                    Margin Vegeta
                  </option>
                  <!-- DragonBall -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/DragonBall/dragonball.webp"
                  >
                    DragonBall
                  </option>
                  <!-- Gogeta SSJB -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/DragonBall/gogeta%20ssjb.webp"
                  >
                    Gogeta SSJB
                  </option>
                  <!-- Kid Goku SSJB  -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/DragonBall/goku.webp"
                  >
                    Kid Goku SSJB
                  </option>
                  <!-- Chibi Itadori -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Jujutsu%20Kaisen/Chibi%20Jujutsu%20Kaisen%20Itadori.webp"
                  >
                    Chibi Itadori
                  </option>
                  <!-- Megumi -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Jujutsu%20Kaisen/Jujutsu%20Kaisen%20-%20Megumi%20Eating%20(5_14)%20Sticker%20by%20Suncelia.webp"
                  >
                    Megumi
                  </option>
                  <!-- Nanami And Gojo -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Jujutsu%20Kaisen/Jujutsu%20Kaisen%20-%20Nanami%20and%20Gojo%20(6_14)%20Sticker%20by%20Suncelia.webp"
                  >
                    Nanami And Gojo
                  </option>
                  <!-- Gojo -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Jujutsu%20Kaisen/gojo.webp"
                  >
                    Gojo
                  </option>
                  <!-- All Might -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/MHA/all%20might.webp"
                  >
                    All Might
                  </option>
                  <!-- Todoroki -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/MHA/todoroki.webp"
                  >
                    Todoroki
                  </option>
                  <!-- Toga -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/MHA/toga.webp"
                  >
                    Toga
                  </option>
                  <!-- Itachi Dressed -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Naruto/Anime%20and%20Anime%20Art%20News_%20Content%20and%20Giveaways.webp"
                  >
                    Itachi Dressed
                  </option>
                  <!-- Itachi -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Naruto/Chibi%20Uchiha%20Itachi%20by%20Ento-Lee%20on%20DeviantArt.webp"
                  >
                    Itachi
                  </option>
                  <!-- Sasuke -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Naruto/Sasuke.webp"
                  >
                    Sasuke
                  </option>
                  <!-- Garaa -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Naruto/gaara.webp"
                  >
                    Garaa
                  </option>
                  <!-- Naruto -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Naruto/naruto.webp"
                  >
                    Itachi
                  </option>
                  <!-- Naruto_2 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Naruto/naruto_2.webp"
                  >
                    Naruto_2
                  </option>
                  <!-- Chibi Garou -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/One%20Punch%20Man/Chibi%20Garou%20_%20_r_OnePunchMan%20_%20One-Punch%20Man.webp"
                  >
                    Chibi Garou
                  </option>
                  <!--  Sonic -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/One%20Punch%20Man/One%20Punch%20Man%20-%20Sonic.webp"
                  >
                    Chibi Sound o Sonic
                  </option>
                  <!-- Pikachu -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Pokemon/pikachu.webp"
                  >
                    Pikachu
                  </option>
                  <!-- Asuna -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/SOA/asuna.webp"
                  >
                    Asuna
                  </option>
                  <!-- Kirito -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/SOA/chibi%20Kirito%20from%20sword%20art%20online.webp"
                  >
                    Kirito
                  </option>
                  <!-- Kirito_2 -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/SOA/kkirito.webp"
                  >
                    Kirito_2
                  </option>
                  <!-- Solo-Leveling -->
                  <option
                    value="https://raw.githubusercontent.com/AbuBakrKhan24/Database/main/Images/Anime-Poll/Avatar%20images/Solo%20Leveling/The%20author%20of%20SL%2C%20we%20need%20more%20chibi!.webp"
                  >
                    Sung JinWoo
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
              <router-link to="/TLCs">terms and conditions</router-link>
            </label>
            <!-- Submit button -->
            <input type="submit" value="Sign Up" />
            <div class="bg-dark text-light" v-if="user">
              Welcome {{ user.username }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "../components/Footer.vue";
import router from "@/router";
export default {
  components: {
    Footer,
  },

  data() {
    return {
      username: "",
      email: "",
      password: "",
      avatar: "",
      user_type: "user",
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
    computed: {
      user() {
        console.log(this.$store.state.user);
        return this.$store.state.user;
      },
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

// .head {
//   margin: 1em auto;
//   text-align: center;
//   font-size: 24px;
//   font-weight: 700;
// }
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
  .Form_Holder {
    padding-right: 5%;
    padding-left: 5%;
  }
  div#footer {
    margin-top: -23%;
  }
}
</style>

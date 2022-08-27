<template>
  <div class="go" v-if="user">
    <!-- Image and user details -->
    <div class="display text-center">
      <div class="users_PP">
        <img class="profilepicture" alt="profilepicture" :src="user.avatar" />
      </div>
      <div class="Users_details">
        <h4 class="user text-light">{{ user.username }}</h4>
        <p class="email text-light">{{ user.email }}</p>
      </div>

      <!-- Image and user details Done -->
    </div>
    <!-- Where about is divided -->
    <div class="topbar">
      <button
        type="button"
        class="editmodal btn btn-outline-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fa-solid fa-gear"></i>
      </button>
      <h3>About</h3>
      <!-- Where about is divided done -->
      <!-- Where about is -->
      <div class="about-topbar">
        <!-- Modal to edit your profile details -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit your Profile
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="Form_Holder">
                  <div class="card" style="width: fit-content">
                    <div class="card-body">
                      <h1>Edit your profile</h1>
                      <p>Change your profile details here below</p>
                      <form @submit.prevent="updateUserInfo">
                        <!-- Form details -->
                        <fieldset>
                          <!-- Username -->
                          <label
                            >Change you username
                            <input
                              v-model="username"
                              type="text"
                              name="user-name"
                              required
                          /></label>
                          <!-- email -->
                          <label
                            >Change your email:
                            <input
                              v-model="email"
                              type="email"
                              name="email"
                              required
                          /></label>
                          <!-- password -->
                          <label
                            >Change your password:
                            <input
                              v-model="password"
                              type="password"
                              name="password"
                              pattern="[a-z0-5]{8,}"
                              required
                          /></label>
                        </fieldset>
                        <!-- About -->
                        <fieldset>
                          <label
                            >Change your about:
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
                            <p>
                              Some images may take longer to load than others so
                              please be patient:)
                            </p>
                          </label>
                        </fieldset>
                        <!-- Save button -->
                        <button
                          type="submit"
                          class="update mt-4 btn btn-outline-secondary"
                        >
                          Save
                        </button>
                      </form>
                      <div v-if="user">Changes you made was an success!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal to edit your profile details done -->
      </div>
    </div>
    <!-- Where about is divided done -->

    <!-- About Section -->
    <div class="about_container">
      <div class="row">
        <!-- About informaiton -->
        <div class="col-lg-6 col-sm-12 details">
          <div class="card">
            <div class="card-header">Your About</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>{{ user.about }}</p>
                <footer class="blockquote-footer">
                  From <cite title="Source Title">{{ user.username }}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <!-- About informaiton done -->

        <!-- Voting holder -->
        <div class="col-lg-6 col-md-12 details">
          <h4 class="head">YOUR Votes</h4>
          <VotingBox v-for="book in readingList" :key="book.id" :book="book" />
        </div>
        <!-- Voting holder done -->
      </div>
    </div>
  </div>
  <!-- About Section done -->
  <div class="Go" v-else>
    <PageNotFound></PageNotFound>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
import VotingBox from "../components/VotingBox.vue";
import PageNotFound from "../components/404PageNotFound.vue";
export default {
  components: { VotingBox, Footer, PageNotFound },
  computed: {
    readingList() {
      return this.$store.state.user.readingList;
    },
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    deleteReadingListItem(id) {
      this.$store.dispatch("removeReadingList", id);
    },
    updateUserInfo() {
      this.$store.dispatch("updateUserInfo", this.user);
    },
  },
};
</script>
<style scoped>
/* Form_Holder */
.Form_Holder {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5%;
  padding-top: 5%;
}
/* Form_Holder done */

/* Form styles */
h1,
p {
  margin: 1em auto;
  text-align: center;
}

form {
  width: 100%;
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
  background-color: #3b3b4f;
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
/* Form styles done */

.card {
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  width: max-content;
}

/* Holder of users credentials and image */
.display {
  height: auto;
  margin-bottom: 0;
  background-color: rgb(56, 52, 52);
}
/* User's image */
.profilepicture {
  width: 25%;
  border-radius: 10px;
}
.users_PP {
  padding-top: 50px;
  padding-bottom: 10px;
}
/* User's image done */
/* Holder of users credentials and image done */

/* Where About divides screen */
.topbar {
  display: flex;
  height: 80px;
  background-color: white;
  border-bottom: solid 2px black;
  flex-direction: row-reverse;
  align-items: center;
}
h3 {
  position: absolute;
  left: 4%;
}
/* Where About divides screen done */

/* Modal edit Button */
button.editmodal.btn.btn-outline-secondary {
  margin-right: 10px;
}
/* Modal edit Button Done */

/* Header for homes */
h4.head {
  margin-bottom: 5%;
}
/* Header for homes done*/

.about-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
}

a {
  text-decoration: none;
  color: black;
}

.Users_details {
  padding-bottom: 20px;
}
/* MQ */
/* @media only screen and (max-width: 600px) {
} */

.col-8 {
  height: fit-content;
  width: fit-content;
  margin-bottom: 20px;
}

i.col-lg-6.fa-solid.fa-location-dot.pb-2 {
  font-size: 30px;
}
i.col-lg-6.fa-solid.fa-user.pb-2 {
  font-size: 30px;
}

p.col-lg-6.mt-2.text-dark {
  font-weight: 600;
}

h4 {
  font-weight: 600;
  font-size: 30px;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: 0;
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

.about_container {
  min-height: 450px;
}

.details[data-v-ced23842] {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>

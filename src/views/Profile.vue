<template>
  <div class="profile_page" v-if="user.user_type === 'user'">
    <!-- Image and user details -->
    <div class="display text-center bg-dark">
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
            <div class="modal-content bg-dark text-light">
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
              <div class="modal-body text-dark">
                <div class="Form_Holder">
                  <div class="card" style="width: fit-content">
                    <div class="card-body">
                      <h1>Edit your profile</h1>
                      <p>Change your profile details here below</p>
                      <form @submit.prevent="updateUserInfo()">
                        <!-- Form details -->
                        <fieldset>
                          <!-- Username -->
                          <label
                            >Add Username
                            <input
                              v-model="username"
                              type="text"
                              name="user-name"
                              required
                          /></label>
                          <!-- email -->
                          <label
                            >Enter Your Email:
                            <input
                              v-model="email"
                              type="email"
                              name="email"
                              required
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
                            <input type="checkbox" @click="myFunction()" />Show
                            Password
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
                            <select v-model="avatar" @change="avatar" multiple>
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
                          </label>
                        </fieldset>
                        <!-- Submit button -->
                        <input type="submit" value="Update Info" />
                      </form>
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
          <div class="card">
            <div class="card-header">Your Controls</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <div class="modes">
                  <button class="delete" @click="deleteUser(user.id)">
                    Delete Account
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <!-- Voting holder done -->
      </div>
    </div>
  </div>
  <!-- About Section done -->

  <!-- Admin_User2 -->
  <div class="profile_page" v-else-if="user.user_type === 'user2'">
    <!-- Image and user details -->
    <div class="display text-center bg-dark">
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
            <div class="modal-content bg-dark text-light">
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
              <div class="modal-body text-dark">
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
                            >Add Username
                            <input
                              v-model="username"
                              type="text"
                              name="user-name"
                              required
                          /></label>
                          <!-- email -->
                          <label
                            >Enter Your Email:
                            <input
                              v-model="email"
                              type="email"
                              name="email"
                              required
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
                            <input type="checkbox" @click="myFunction()" />Show
                            Password
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
                            Some images may take longer to load than others so
                            please be patient:)
                          </label>
                        </fieldset>
                        <!-- Submit button -->
                        <input type="submit" value="Sign Up" />
                      </form>
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
          <div class="card">
            <div class="card-header">Your Controls</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <div class="modes">
                  <button class="user_mode" @click="userMode()">User</button>
                  <button class="admin_mode" @click="adminMode()">Admin</button>
                  <button class="delete" @click="deleteUser(user.id)">
                    Delete Account
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <!-- Voting holder done -->
      </div>
    </div>
  </div>
  <div
    class="profile_page bg-dark text-light"
    v-else-if="user.user_type === 'admin'"
  >
    <h1>Welcome Your Adminess</h1>
    <!-- Image and user details -->
    <div class="display text-center">
      <div class="users_PP">
        <img class="profilepicture" alt="profilepicture" :src="user.avatar" />
      </div>
      <div class="Users_details">
        <h4 class="user text-light">{{ user.username }}</h4>
        <p class="email text-light">{{ user.email }}</p>
      </div>

      <div class="modes">
        <button class="user_mode" @click="userMode()">User</button>
        <button class="admin_mode" @click="adminMode()">Admin</button>
      </div>
      <!-- Image and user details Done -->
    </div>
    <!-- Where about is divided -->
    <div class="topbar bg-dark text-light">
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
            <div class="modal-content bg-dark text-light">
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
              <div class="modal-body text-dark">
                <div class="Form_Holder">
                  <div class="card" style="width: fit-content">
                    <div class="card-body">
                      <h1>Edit your profile</h1>
                      <p>Change your profile details here below</p>
                      <form @submit.prevent="updateUserInfo()">
                        <!-- Form details -->
                        <fieldset>
                          <!-- Username -->
                          <label
                            >Add Username
                            <input
                              v-model="username"
                              type="text"
                              name="user-name"
                              required
                          /></label>
                          <!-- email -->
                          <label
                            >Enter Your Email:
                            <input
                              v-model="email"
                              type="email"
                              name="email"
                              required
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
                            <input type="checkbox" @click="myFunction()" />Show
                            Password
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
                            Some images may take longer to load than others so
                            please be patient:)
                          </label>
                        </fieldset>
                        <!-- Submit button -->
                        <input type="submit" value="UpdateInfomation" />
                      </form>
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
          <div class="card text-dark">
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
          <div class="card">
            <div class="card-header">Your Controls</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <div class="modes">
                  <button class="user_mode" @click="userMode()">User</button>
                  <button class="admin_mode" @click="adminMode()">Admin</button>
                  <button class="delete" @click="deleteUser(user.id)">
                    Delete Account
                  </button>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <!-- Voting holder done -->
      </div>
    </div>
  </div>

  <div class="Go" v-else>
    <PageNotFound></PageNotFound>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
import PageNotFound from "../components/404PageNotFound.vue";
import loader from "../components/loader.vue";
export default {
  components: { Footer, PageNotFound, loader },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
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
  },
  methods: {
    deleteUser(id) {
      let text = "Are you sure that you want to delete your account?";
      if (confirm(text) === true) {
        console.log("user was deleted");
        if (this.$store.dispatch("deleteUser", id)) {
          alert("Your account has been successfully deleted.");
          this.Logout();
          // window.location.reload();
        }
      } else {
        alert("You canceled");
      }
    },
    Logout() {
      this.$store.commit("Logout");
      this.$router.push("/");
    },
    updateUserInfo() {
      this.$store.dispatch("updateUserInfo", {
        username: this.username,
        email: this.email,
        password: this.password,
        avatar: this.avatar,
        about: this.about,
        id: this.user.id,
      });
      if ({ msg: "Successfully Updated" }) {
        this.login();
      }
    },
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
    adminMode() {
      this.$store.commit("adminMode");
      // this.$router.push("/");
    },
    userMode() {
      this.$store.commit("userMode");
      // this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.admin_box {
  min-height: 100vh;
  /* margin-bottom: 118px; */
  padding: 5%;
  padding-bottom: 10%;
}

.details {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-left: 24px;
}

.modes {
  padding-bottom: 50px;
}
.user_mode {
  border-bottom-left-radius: 100%;
  border-top-left-radius: 100%;
  padding: 6px 10px 6px 30px;
}
.user_mode:hover {
  background-color: #212529;
  color: #ffffff;
}
.user_mode:focus {
  background-color: #212529;
  color: #ffffff;
}

.admin_mode {
  border-bottom-right-radius: 100%;
  border-top-right-radius: 100%;
  padding: 6px 21px 6px 8px;
}
.admin_mode:hover {
  background-color: #212529;
  color: #ffffff;
}
.admin_mode:focus {
  background-color: #212529;
  color: #ffffff;
}

.profile_page {
  padding-top: 83px;
}
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
p {
  margin: 1em auto;
  text-align: center;
}
h1 {
  margin-bottom: 5px;
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
  background-color: white;
  min-width: 300px;
}

input[type="submit"]:hover {
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
  /* padding-top: 7%;
  padding-bottom: 2%; */
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

.details {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.profile_page.bg-dark.text-light {
  padding-top: 83px;
}

/* MQ */
@media only screen and (max-width: 992px) {
  .profile_page {
    padding-bottom: 25%;
    min-height: 100vh;
  }
}
@media only screen and (max-width: 376px) {
  .col-lg-6.col-sm-12.details {
    padding-left: 24px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-weight: 600;
    font-size: 20px;
  }
  p {
    font-size: 17px;
  }
  .profile_page {
    padding-bottom: 40%;
    min-height: 100vh;
  }
}
</style>

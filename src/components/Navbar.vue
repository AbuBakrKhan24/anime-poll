<template>
  <nav class="navbar navbar-expand-lg bg-light" id="nav">
    <div class="container-fluid">
      <!-- Book Icon -->
      <!-- Pokeball -->
      <svg
        viewBox="0 0 106 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pokeballAnimation"
      >
        <circle
          cx="53"
          cy="53"
          r="51"
          fill="white"
          stroke="#333333"
          stroke-width="4"
        />
        <mask
          id="mask0"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="106"
          height="53"
        >
          <rect width="106" height="53" fill="#C4C4C4" />
        </mask>
        <g mask="url(#mask0)">
          <circle
            cx="53"
            cy="53"
            r="51"
            fill="#F22539"
            stroke="#333333"
            stroke-width="4"
          />
        </g>
        <path d="M0.392578 53H105.607" stroke="#333333" stroke-width="4" />
        <circle cx="53" cy="52.9998" r="20.8074" fill="white" />
        <circle
          cx="53"
          cy="52.9998"
          r="18.8074"
          stroke="#333333"
          stroke-width="4"
        />
        <path
          d="M91.731 36.7077C86.9398 25.3318 77.283 16.5081 65.3667 12.8428"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="53"
          cy="53.0004"
          r="10.3852"
          stroke="#808080"
          stroke-width="2"
        />
      </svg>
      <!-- Pokeball done -->

      <router-link to="/" class="navbar-brand nav-link active text-dark">
        Anime-Poll
      </router-link>

      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Home button done -->
          <!-- User -->
          <div
            v-if="user.user_type === 'user'"
            class="d-flex dropped_nav justify-content-center"
          >
            <!--Home Page-->
            <li class="nav-item">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/home"
              >
                Home
              </router-link>
            </li>
            <!--About Page-->
            <li class="nav-item">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/about"
              >
                About
              </router-link>
            </li>
            <!--Home Page done-->
            <!-- Results Page-->
            <li>
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/results"
                >Results</router-link
              >
            </li>
            <!-- Results Page done -->
            <!--Contact Page-->
            <li class="nav-item">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/contact"
              >
                Contact
              </router-link>
            </li>
            <!-- Profile Page -->
            <li class="nav-item dropdown text-dark">
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
                <img
                  width="40"
                  height="35"
                  :src="user.avatar"
                  :alt="user.name"
                  class="profileAvatar d-inline-block align-text-top"
                />
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    class="dropdown-item text-dark space_between"
                    aria-current="page"
                    to="/profile"
                    >Profile Page</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <!-- Logout -->
                  <a @click="Logout()" class="dropdown-item space_between"
                    >Logout</a
                  >
                </li>
              </ul>
            </li>
          </div>
          <!-- User2 -->
          <div
            v-else-if="user.user_type === 'user2'"
            class="d-flex dropped_nav justify-content-center"
          >
            <!--Home Page-->
            <li class="nav-item">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/home"
              >
                Home
              </router-link>
            </li>
            <!--About Page-->
            <li class="nav-item">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/about"
              >
                About
              </router-link>
            </li>
            <!--Home Page done-->
            <!-- Results Page-->
            <li>
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/results"
                >Results</router-link
              >
            </li>
            <!-- Results Page done -->
            <!--Contact Page-->
            <li class="nav-item">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/contact"
              >
                Contact
              </router-link>
            </li>
            <!-- Profile Page -->
            <li class="nav-item dropdown text-dark">
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
                <img
                  width="40"
                  height="35"
                  :src="user.avatar"
                  :alt="user.name"
                  class="profileAvatar d-inline-block align-text-top"
                />
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    class="dropdown-item text-dark space_between"
                    aria-current="page"
                    to="/profile"
                    >Profile Page</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <!-- Logout -->
                  <a @click="Logout()" class="dropdown-item space_between"
                    >Logout</a
                  >
                </li>
              </ul>
            </li>
          </div>
          <!-- Admin -->
          <div
            v-else-if="user.user_type === 'admin'"
            class="d-flex dropped_nav justify-content-center"
          >
            <!--Home Page-->
            <li class="nav-item">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/adminUsers"
              >
                Users
              </router-link>
            </li>
            <!--Home Page done-->
            <!-- Results Page-->
            <li>
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/adminElections"
                >Elections</router-link
              >
            </li>
            <!-- Results Page done -->

            <!-- Profile Page -->
            <li class="nav-item dropdown text-dark">
              <a
                class="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
                <img
                  width="40"
                  height="35"
                  :src="user.avatar"
                  :alt="user.name"
                  class="profileAvatar d-inline-block align-text-top"
                />
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    class="dropdown-item text-dark space_between"
                    aria-current="page"
                    to="/profile"
                    >Profile Page</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <!-- Logout -->
                  <a @click="Logout()" class="dropdown-item space_between"
                    >Logout</a
                  >
                </li>
              </ul>
            </li>
          </div>
          <div v-else class="d-flex">
            <!-- Login -->
            <li class="nav-item ms-2">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/login"
              >
                Log in
              </router-link>
            </li>
            <!-- Sign-Up -->
            <li class="nav-item ms-3">
              <!-- Sign up -->
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/signup"
              >
                Sign Up
              </router-link>
            </li>
          </div>
          <!-- Profile Page Done-->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    Logout() {
      this.$store.commit("Logout");
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
nav#nav {
  position: fixed;
  width: 100%;
  z-index: 1;
}

.container-fluid {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
}

.space_between {
  height: 30px;
}

a {
  height: 67px;
  display: flex;
  align-items: center;
}
// nav{
//         cursor: url("https://cur.cursors-4u.net/anime/ani-12/oth1118.ani"), url("https://cur.cursors-4u.net/anime/ani-12/oth1118.png"), default;
//     }

svg.pokeballAnimation {
  width: 60px;
  height: 60px;
  fill: none;
}
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

.navbar-brand {
  font-size: 31px;
  margin-left: var(--bs-navbar-brand-margin-end);
}

a {
  font-size: 20px;
}

.logo-image {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -6px;
}
li {
  list-style-type: none;
}
nav.navbar {
  font-family: "Varela", sans-serif;
}
.book_create {
  border: none;
  background-color: #f8f9fa;
}
.profileAvatar {
  height: 50px;
  width: 50px;
}

ul.navbar-nav.me-auto.mb-2.mb-lg-0 {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
}

.container-fluid.ms-5 {
  margin-right: 3rem;
}

.profile-pic {
  margin-left: 5px;
}

// li.nav-item {
//   border-bottom: 0px solid;
// }
@media only screen and (max-width: 376px) {
  svg.pokeballAnimation {
    width: 35px;
    height: 35px;
    fill: none;
  }
  .navbar-brand {
    font-size: 30px;
  }
  .dropped_nav {
    display: flex !important;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  // li {
  //   border-bottom: 1px solid;
  // }
  // li:first-of-type {
  //   border-top: 1px solid;
  // }
  .profile-pic {
    margin-left: 0px;
  }
}
@media only screen and (max-width: 992px) {
  .d-flex {
    flex-direction: column;
    align-items: center;
  }
}
@media only screen and (max-width: 320px) {
  .navbar-brand {
    font-size: 25px;
    margin-left: 4px;
    margin-right: 4px;
  }
  .display {
    height: 100%;
    padding-bottom: 144px;
    margin-bottom: -20px;
  }
  button.navbar-toggler {
    font-size: 16px;
  }
  .container-fluid[data-v-41458b80] {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
  }
}
</style>

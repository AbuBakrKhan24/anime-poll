<template>
  <nav class="navbar navbar-expand-lg bg-light" id="nav">
    <div class="container-fluid ms-5">
      <!-- Book Icon -->
<!-- Pokeball -->
      <svg
        width="60"
        height="60"
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

<button
        class="book_create"
        title="Click here to create your book"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

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
          <div v-if="user" class="d-flex justify-content-center">
              <!--Home Page-->
            <li class="nav-item ms-5">
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </router-link>
            </li>
            <!--Home Page done-->
            
            <!-- Vote Page done-->
            <li>
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/vote"
                >Vote</router-link
              >
            </li>
            <!-- Vote Page done-->
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
            
            <!-- Profile Page -->
            <li>
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/profile"
              >
                Profile
              </router-link>
            </li>
            <li>
            <img
              width="40"
              height="35"
              :src="user.avatar"
              :alt="user.name"
              class="profileAvatar d-inline-block align-text-top"
            />
            </li>
          </div>
          <div v-else class="d-flex">
            <li class="nav-item ms-2">
              <!-- Login -->
              <router-link
                class="nav-link active text-dark"
                aria-current="page"
                to="/login"
              >
                Log in
              </router-link>
            </li>

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
        <li>
          <!-- Book Icon done -->
        </li>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style lang="scss" scoped>
// nav{
//         cursor: url("https://cur.cursors-4u.net/anime/ani-12/oth1118.ani"), url("https://cur.cursors-4u.net/anime/ani-12/oth1118.png"), default;
//     }

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
.profileAvatar[data-v-41458b80] {
   height: 50px;
    width: 50px;
}

ul.navbar-nav.me-auto.mb-2.mb-lg-0[data-v-41458b80] {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.container-fluid.ms-5 {
    margin-right: 3rem;
}
</style>

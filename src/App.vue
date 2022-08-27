<template>
  <Navbar></Navbar>

  <router-view :key="$route.fullPath" />
</template>

<script>
// import Landing from "./components/Landing.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Varela&display=swap");

* {
  font-family: "Varela";
}

#hello {
  padding-top: 185px;
  /* padding-top: 155px; */

  /* background-image: radial-gradient(circle, #3d2f67, #34255f, #2a1c56, #21124e, #170846); */
}

#app {
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>

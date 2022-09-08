<template>
  <div class="home">
    <landing msg="Welcome to Your Vue.js App" />
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from "@/components/Landing.vue";

export default {
  name: "LandingPage",
  components: {
    Landing,
  },
};
</script>

<style>
.home {
  height: 100vh;
}

@media only screen and (max-width: 376px) {
  .home {
    height: 100%;
  }
}
</style>

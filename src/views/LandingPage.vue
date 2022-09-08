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
  /* padding-top: 83px; */
  height: 100vh;
}
</style>

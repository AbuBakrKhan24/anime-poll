<template>
  <div v-if="user.user_type === 'user'">
    <div class="pic bg-dark"></div>
    <!-- <ColorSetter></ColorSetter> -->
  </div>
  <div
    v-else-if="user.user_type === 'admin'"
    class="admin_box bg-dark text-light"
  >
    <h1>Welcome Your Adminess</h1>
    <h3>This is the results page</h3>
    <div class="pic bg-dark"></div>
  </div>
  <div v-else>
    <PageNotFound></PageNotFound>
  </div>

  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
// import ColorSetter from "../components/colorSetter.vue";
import PageNotFound from "../components/404PageNotFound.vue";
export default {
  components: {
    // ColorSetter,
    Footer,
    PageNotFound,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
.pic {
  background-image: url(https://i.pinimg.com/originals/29/7c/85/297c85a99967cfcb4eecc062c0be4c17.gif);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 93vh;
}

.admin_box {
  min-height: 100vh;
  /* margin-bottom: 118px; */
  padding: 5%;
  padding-bottom: 10%;
}

@media only screen and (max-width: 376px) {
  #footer {
    margin-top: -26%;
  }
}
</style>

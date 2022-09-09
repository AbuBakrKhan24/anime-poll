<template>
  <div class="holder" v-if="user">
    <div class="pic bg-dark">
      <h1 class="bg-dark text-light">
        Final results will be available at 00:00 on the 30th of December 2022
      </h1>
    </div>
  </div>
  <div v-else>
    <PageNotFound></PageNotFound>
  </div>

  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
import PageNotFound from "../components/404PageNotFound.vue";
export default {
  components: {
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
.holder {
  padding-top: 83px;
}

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

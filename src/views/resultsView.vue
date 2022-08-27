<template lang="">
  <div class="pic bg-dark"></div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer,
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

@media only screen and (max-width: 376px) {
  #footer {
    margin-top: -26%;
  }
}
</style>

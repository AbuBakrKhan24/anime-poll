<template>
  <div v-if="user">
    <div class="display text-center bg-dark text-light">
      <div class="row text-dark">
        <election
          v-for="election in categorysection"
          :key="election.category_ID"
          :election="election"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <PageNotFound></PageNotFound>
  </div>
  <Footer></Footer>
</template>

<script>
import election from "../components/election.vue";
// import categoryCard from "../components/categoryCard.vue";
import Footer from "../components/Footer.vue";
import PageNotFound from "../components/404PageNotFound.vue";
export default {
  components: {
    election,
    Footer,
    PageNotFound,
  },
  mounted() {
    this.$store.dispatch("getElections");
  },
  computed: {
    categorysection() {
      // console.log(this.$store.state.category);
      return this.$store.state.categorysection;
    },
    user() {
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
.display[data-v-580e69b0] {
  height: fit-content;
  padding: 10% 0 10% 0;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(0 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

@media only screen and (max-width: 376px) {
  .display.text-center.bg-dark.text-light {
    padding-bottom: 170px;
  }
}
</style>

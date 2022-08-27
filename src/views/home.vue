<template>
  <div class="display text-center">
    <div class="row">
      <div class="col-lg-12">
        <h2>Ongoing Elections</h2>
      </div>
      <categoryCard
        v-for="category in categories"
        :key="category.categories_id"
        :category="category"
      />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../components/Footer.vue";
import categoryCard from "../components/categoryCard.vue";
export default {
  components: {
    categoryCard,
    Footer,
  },

  mounted() {
    this.$store.dispatch("getCategories");
  },

  computed: {
    categories() {
      // console.log(this.$store.state.category);
      return this.$store.state.categories;
    },
  },
};
</script>
<style scoped>
.display {
  height: 100vh;
  /* margin-bottom: 118px; */
}

.col-lg-12 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* The cards fo each category */
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(0 * var(--bs-gutter-x));
  margin-left: calc(0 * var(--bs-gutter-x));
  height: 90%;
}
/* The cards fo each category done */

@media only screen and (max-width: 376px) {
  .display {
    height: 100%;
    margin-bottom: 0;
  }
}
</style>

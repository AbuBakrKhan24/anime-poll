<template>
  <div id="content" v-if="user.user_type === user">
    <div class="display text-center bg-dark text-light">
      <div class="row text-dark">
        <div class="col-lg-12 text-light">
          <h2>Ongoing Elections</h2>
        </div>
        <categoryCard
          v-for="category in categories"
          :key="category.categories_id"
          :category="category"
        />
      </div>
    </div>
  </div>
  <div v-else-if="user.user_type === admin" class="admin_box bg-dark">
    <h3>Welcome Your Adminess</h3>
    <div class="display text-center bg-dark text-light">
      <div class="row text-dark">
        <div class="col-lg-12 text-light">
          <h2>Ongoing Elections</h2>
        </div>
        <categoryCard
          v-for="category in categories"
          :key="category.categories_id"
          :category="category"
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
import Footer from "../components/Footer.vue";
import categoryCard from "../components/categoryCard.vue";
import PageNotFound from "../components/404PageNotFound.vue";
export default {
  components: {
    categoryCard,
    Footer,
    PageNotFound,
  },

  mounted() {
    this.$store.dispatch("getCategories");
  },

  computed: {
    categories() {
      // console.log(this.$store.state.category);
      return this.$store.state.categories;
    },
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
.display {
  min-height: 100vh;
  /* margin-bottom: 118px; */
  padding: 5%;
  padding-bottom: 10%;
}

.admin_box {
  min-height: 100vh;
  /* margin-bottom: 118px; */
  padding: 5%;
  padding-bottom: 10%;
}
/*
.display.text-center.bg-dark.text-light {
  min-height: 100vh;
} */

.col-lg-12 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
h2 {
  padding-bottom: 20px;
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

@media only screen and (max-width: 991px) {
  .display {
    padding-bottom: 125px;
    margin-bottom: 9px;
  }
}
@media only screen and (max-width: 376px) {
  .display {
    height: 100%;
    padding-bottom: 125px;
    margin-bottom: 9px;
  }
  .col-lg-12 {
    padding-top: 20px;
  }
}

/* new */

#loader {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: visible;
  background: #fff;
  background-image: url("https://i.pinimg.com/originals/bb/5f/48/bb5f48c52c7bba38f729d482368a8c29.gif");
  background-size: cover;
}

h1 {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: poppins;
}
</style>

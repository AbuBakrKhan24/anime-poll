<template>
  <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <div class="header">
          <h5 class="card-title">{{ category.category_name }}</h5>

          <div v-if="user.user_type === 'admin'" class="button_admin">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>

        <p class="card-text">{{ category.categories_description }}</p>
        <div class="button_holder">
          <router-link
            :to="{ name: 'elections', params: { id: category.categories_id } }"
            @click="categorySection(category.categories_id)"
            class="btn btn-primary"
            >Go to election</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["category"],
  methods: {
    categorySection(id) {
      this.$store.dispatch("getCategorySection", id);
    },
  },
  computed: {
    user() {
      console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
/* Card Styles */

.header {
  display: flex;
  justify-content: space-between;
}
.button_admin {
  display: flex;
  align-items: center;
  font-size: x-large;
  width: 80px;
  justify-content: space-evenly;
}

i.fa-solid.fa-pen-to-square:hover {
  color: #ffc107;
}

i.fa-solid.fa-trash:hover {
  color: #dc3545;
}

.card {
  height: fit-content;
  width: 40rem;
  /* height: 40rem; */
}

.card-title {
  font-size: xx-large;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid black;
  width: fit-content;
}

.card-text {
  text-align: start;
  font-size: x-large;
}

.button_holder {
  display: flex;
  justify-content: flex-end;
}

.btn {
  font-size: large;
}
/* Card Styles Done */

.col-lg-6 {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 10px; */
  padding-bottom: 10px;
  padding-top: 70px;
}

@media only screen and (max-width: 376px) {
  .card-title {
    font-size: x-large;
  }
  .card-text {
    font-size: small;
  }
  .btn {
    font-size: small;
  }
  .col-lg-6:last-of-type {
    padding-bottom: 10px;
  }
}
</style>

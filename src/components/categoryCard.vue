<template>
  <div class="col-lg-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ category.category_name }}</h5>
        <p class="card-text">{{ category.categories_description }}</p>
        <div class="button_holder">
          <router-link to="/elections" class="btn btn-primary"
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
};
</script>
<style scoped>
/* Card Styles */
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
  padding-top: 10px;
}
.col-lg-6:last-of-type {
  padding-bottom: 10px;
}

@media only screen and (max-width: 376px) {
  .card-title[data-v-6895f384] {
    font-size: x-large;
  }
  .card-text[data-v-6895f384] {
    font-size: small;
  }
  .btn[data-v-6895f384] {
    font-size: small;
  }
}
</style>

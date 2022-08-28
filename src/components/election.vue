<template>
  <div class="col-lg-3 col-sm-4">
    <div class="card">
      <img
        v-bind:src="election.Cover_img"
        class="card-img-top"
        v-bind:alt="election.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ election.title }}</h5>
        <!-- <p class="card-text">
          Creator:
          {{ election.creator }}
        </p> -->
        <div class="button_holder">
          <a href="#" class="btn btn-primary">View</a>
          <a href="#" class="btn btn-primary">Vote</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["election"],
};
</script>
<style scoped>
.col-lg-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}

.card {
  width: 15rem;
}

img {
  width: 238px;
  height: 337px;
}

h5.card-title {
  height: 50px;
}

.button_holder {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

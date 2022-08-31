<template>
  <!-- new -->
  <div class="carousel-item">
    <div class="container">
      <div class="box_holder">
        <div class="row">
          <div class="col-md-4">
            <img
              :src="election.Cover_img"
              class="d-block"
              :alt="election.title"
            />
          </div>
          <div class="col-md-6">
            <div class="details text-dark">
              <h3>{{ election.title }}</h3>
              <p>{{ election.election_description }}</p>
              <p>
                <span class="bold">Creator:</span>
                {{ election.creator }}
              </p>
              <p>
                <span class="bold">Voted Amount: </span
                >{{ election.vote_count }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["election"],
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {},
};
</script>
<style scoped>
.box_holder {
  background-color: whitesmoke;
  padding: 50px;
}
.d-block {
  display: block !important;
  height: 337px;
  width: 238px;
  /* box-shadow: black 3px 3px 12px 0px; */
  box-shadow: grey 4px 4px 11px 3px;
}
.details {
  height: 100%;
  background-color: whitesmoke;
  box-shadow: grey 4px 4px 11px 3px;
  text-align: start;
  padding: 20px;
}

.col-md-6 {
  flex: 0 0 auto;
  width: 65%;
}

.bold {
  font-weight: 600;
}
</style>

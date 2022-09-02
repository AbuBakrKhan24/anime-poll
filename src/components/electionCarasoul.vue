<template>
  <!-- new -->
  <div class="carousel-item">
    <div class="container">
      <div class="box_holder">
        <div class="row">
          <div class="col-md-4 col-sm-12">
            <img
              :src="election.Cover_img"
              class="d-block"
              :alt="election.title"
            />
          </div>
          <div class="col-md-6 col-sm-4">
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
p {
  font-size: smaller;
}
.box_holder {
  background-color: whitesmoke;
  padding: 50px;
}
.d-block {
  display: block !important;
  height: 100%;
  width: 90%;
  /* box-shadow: black 3px 3px 12px 0px; */
  box-shadow: grey 4px 4px 11px 3px;
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
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

@media only screen and (max-width: 992px) {
  .col-md-4 {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .d-block {
    margin-bottom: 10%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 100%;
  }
}
@media only screen and (max-width: 376px) {
  .col-md-6 {
    flex: 0 0 auto;
    width: 100%;
  }
  .d-block {
    width: 100%;
    margin-bottom: 10%;
  }
  .details {
    overflow: scroll;
    margin-top: 10%;
    height: 400px;
    justify-content: flex-start;
  }
  p {
    font-size: small;
  }
}
</style>

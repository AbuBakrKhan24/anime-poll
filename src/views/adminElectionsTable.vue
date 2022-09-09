<template>
  <div class="box bg-dark text-light">
    <div class="header">
      <h2>List of elections</h2>
    </div>
    <div class="row">
      <div
        v-for="election in elections"
        :key="election.elections_id"
        :election="election"
        class="card text-dark col-lg-4"
      >
        <div class="row">
          <div class="col-md-4 users_image">
            <img
              :src="election.Cover_img"
              class="img-fluid rounded-start"
              alt="Cover Image"
            />
          </div>
          <div class="col-md-8 users_details">
            <div class="card-body">
              <h5 class="card-title bold">Election's Details</h5>
              <div class="body_content">
                <p class="card-text">
                  <span class="bold"> Title:</span> {{ election.title }}
                </p>
                <p class="card-text">
                  <span class="bold"> Election ID:</span>
                  {{ election.elections_id }}
                </p>
                <p class="card-text">
                  <span class="bold"> Category ID:</span>
                  {{ election.category_ID }}
                </p>
                <p class="card-text">
                  <span class="bold"> Election's Description:</span>
                  {{ election.election_description }}
                </p>
                <p class="card-text">
                  <span class="bold"> Creator:</span> {{ election.creator }}
                </p>
                <p class="card-text">
                  <span class="bold"> Vote Count:</span>
                  {{ election.vote_count }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getElections");
  },
  computed: {
    elections() {
      console.log(this.$store.state.elections);
      return this.$store.state.elections;
    },
  },
};
</script>
<style scoped>
.box {
  padding-top: 83px;
  min-height: 100vh;
}

/* button.edit {
  height: 100%;
  width: 50%;
}
button.delete {
  height: 100%;
  width: 50%;
} */

.card-footer.text-muted {
  display: flex;
  flex-direction: row;
}

.header {
  padding-top: 3%;
  padding-bottom: 3%;
}

img.img-fluid.rounded-start {
  box-shadow: 3px 4px 15px 5px;
}

.card {
  display: flex;
  width: 40%;
  height: 350px;
  margin-right: 4%;
  margin-bottom: 4%;
  margin-left: 4%;
  flex-direction: row;
  align-items: center;
}

.card-body {
  flex: 1 1 auto;
  padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
  color: var(--bs-card-color);
  overflow: overlay;
  height: 300px;
}

.bold {
  font-weight: 600;
}

.body_content {
  text-align: start;
}

img.img-fluid.rounded-start {
  max-height: 226.66px;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(0 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1400px) {
  .card {
    width: 70%;
  }
}
@media only screen and (max-width: 770px) {
  .card {
    display: flex;
    padding-top: 5%;
    height: 100%;
    margin-right: 4%;
    margin-left: 4%;

    flex-direction: column;
    justify-content: center;
  }

  .card-body {
    flex: 1 1 auto;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    color: var(--bs-card-color);
    overflow: overlay;
    height: 300px;
    width: 100%;
  }
}
@media only screen and (max-width: 376px) {
  .card {
    margin-bottom: 17%;
  }
  .card-body {
    flex: 1 1 auto;
    padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    color: var(--bs-card-color);
    overflow: overlay;
    height: 300px;
    width: 112%;
  }
  p {
    margin-top: 0;
    font-size: small;
    margin-bottom: 1rem;
  }
}
</style>

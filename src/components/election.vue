<template>
  <div class="col-lg-4 col-sm-4">
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
          <div v-if="user">
            <a
              href="#"
              class="btn btn-primary"
              @click="
                AddVote(election.category_ID, election.elections_id, user.id)
              "
              >Vote</a
            >
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
  methods: {
    AddVote(category_id, election_id, user_id) {
      console.log(category_id, election_id, user_id),
        this.$store.dispatch("AddPoll", {
          category_id: category_id,
          election_id: election_id,
          user_id: user_id,
        });
    },
  },
};
</script>
<style scoped>
.col-lg-4 {
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

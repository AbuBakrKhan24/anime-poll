<template>
  <div v-if="user.user_type === 'user'" class="col-lg-4 col-sm-12">
    <div class="card">
      <img
        v-bind:src="election.Cover_img"
        class="card-img-top"
        v-bind:alt="election.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ election.title }}</h5>

        <div id="normal_options" class="button_holder">
          <!-- View -->
          <a
            href="#"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="{{election.elections_id}}"
            class="active carasoul_btn btn btn-primary"
            aria-current="true"
            aria-label="Slide 1"
            >View</a
          >
          <!-- Vote -->
          <a
            class="btn btn-primary vote_count"
            @click="
              AddVote(election.category_ID, election.elections_id, user.id),
                Vote(election.elections_id, election.vote_count)
            "
            >Vote
            {{ election.vote_count }}
          </a>
        </div>
      </div>
    </div>
  </div>
  <div v-if="user.user_type === 'user2'" class="col-lg-4 col-sm-12">
    <div class="card">
      <img
        v-bind:src="election.Cover_img"
        class="card-img-top"
        v-bind:alt="election.title"
      />
      <div class="card-body">
        <h5 class="card-title">{{ election.title }}</h5>

        <div id="normal_options" class="button_holder">
          <!-- View -->
          <a
            href="#"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="{{election.elections_id}}"
            class="active carasoul_btn btn btn-primary"
            aria-current="true"
            aria-label="Slide 1"
            >View</a
          >
          <!-- Vote -->
          <a
            class="btn btn-primary vote_count"
            @click="
              AddVote(election.category_ID, election.elections_id, user.id),
                Vote(election.elections_id, election.vote_count)
            "
            >Vote
            {{ election.vote_count }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["election"],
  mounted() {
    // this.showOptions(this.election.elections_id);
  },
  data() {
    return {
      num: null,
    };
  },

  computed: {
    user() {
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    AddVote(category_id, election_id, user_id) {
      // console.log(category_id, election_id, user_id),
      this.$store.dispatch("AddPoll", {
        category_ID: category_id,
        election_ID: election_id,
        user_ID: user_id,
      });
    },
    Vote(id, vote) {
      // console.log(id, vote),
      (this.num = ++vote),
        this.$store.dispatch("Vote", {
          id: id,
          vote: this.num,
        });
      if (this.Vote) {
        window.location.reload();
      }
    },
  },
};
</script>
<style scoped>
.col-lg-4 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
}

a.active.carasoul_btn.btn.btn-primary {
  margin-right: 40px;
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

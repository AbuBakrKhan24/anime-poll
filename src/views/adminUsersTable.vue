<template>
  <div class="box bg-dark text-light">
    <div class="header">
      <h2>List of users</h2>
    </div>
    <div class="row">
      <div
        v-for="user in users"
        :key="user.id"
        :user="user"
        class="card text-dark col-lg-4 col-md-12"
      >
        <div class="row">
          <div class="col-md-4 users_image">
            <img
              :src="user.avatar"
              class="img-fluid rounded-start"
              alt="Profile Picture"
            />
          </div>
          <div class="col-md-8 users_details">
            <div class="card-body">
              <h5 class="card-title bold">User's Details</h5>
              <div class="body_content">
                <p class="card-text">
                  <span class="bold"> Username:</span> {{ user.username }}
                </p>
                <p class="card-text">
                  <span class="bold"> User ID:</span> {{ user.id }}
                </p>
                <p class="card-text">
                  <span class="bold"> User Email:</span> {{ user.email }}
                </p>
                <p class="card-text">
                  <span class="bold"> User Password:</span> {{ user.password }}
                </p>
                <p class="card-text">
                  <span class="bold"> User Type:</span> {{ user.user_type }}
                </p>
                <p class="card-text">
                  <span class="bold"> User's About:</span> {{ user.about }}
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer text-muted">
            <button class="edit">Edit</button>
            <button @click="deleteUser(user.id)" class="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    deleteUser(id) {
      let text = "Are you sure that you want to delete this user?";
      if (confirm(text) === true) {
        console.log("user was deleted");
        if (this.$store.dispatch("deleteUser", id)) {
          alert("The user has been successfully deleted.");
          window.location.reload();
        }
      } else {
        alert("You canceled");
      }
    },
  },
  computed: {
    users() {
      console.log(this.$store.state.users);
      return this.$store.state.users;
    },
  },
};
</script>
<style scoped>
.box {
  padding-top: 83px;
  min-height: 100vh;
}

.card-footer.text-muted {
  display: flex;
  flex-direction: row;
}
.header {
  padding-top: 3%;
  padding-bottom: 3%;
}

button.edit {
  height: 100%;
  width: 50%;
}
button.delete {
  height: 100%;
  width: 50%;
}

.card {
  display: flex;
  width: 40%;
  height: 350px;
  margin-right: 4%;
  margin-left: 4%;
  margin-bottom: 4%;
  flex-direction: column;
  justify-content: center;
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
  box-shadow: 1px 2px 7px 1px;
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

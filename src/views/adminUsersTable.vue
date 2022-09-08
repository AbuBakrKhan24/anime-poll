<template>
  <div class="box">
    <table class="table table-dark table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">User Type</th>
          <th scope="col">Avatar</th>
          <th scope="col">About</th>
        </tr>
      </thead>
      <tbody id="users">
        <tr v-for="user in users" :key="user.id" :user="user">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.password }}</td>
          <td>{{ user.user_type }}</td>
          <td>{{ user.avatar }}</td>
          <td class="td_about">{{ user.about }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getUsers");
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
}

.td_about {
  height: 65px;
}
</style>

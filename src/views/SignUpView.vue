<template>
  <div class="home">
    <SignUpForm msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUpForm from "@/components/SignUpForm.vue";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      avatar: "",
    };
  },
  name: "SignUpView",
  components: {
    SignUpForm,
  },
};
</script>

<style scoped>
.home {
  padding-top: 83px;
}
</style>

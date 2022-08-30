<template>
  <!-- new -->
  <div class="carousel-item active">
    <div class="container">
      <div class="box_holder">
        <img :src="election.Cover_img" class="d-block" :alt="election.title" />
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
}
</style>

<template>
<div class="col-lg-6">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ category.category_name }}</h5>
    <p class="card-text">{{ category.categories_description }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</template>
<script>
export default {
  props: ["category"],
};
</script>
<style scoped>

</style>
<template>
<div class="display text-center"> 
  <div class="row">
      <categoryCard v-for="category in categories" :key="category.categories_id" :category="category" />
      </div>
  </div>
</template>
<script>
import categoryCard from "../components/categoryCard.vue";
export default {
 components: { categoryCard },

mounted(){
  this.$store.dispatch("getCategories")
},

    computed: {
        categories() {
            // console.log(this.$store.state.category);
            return this.$store.state.categories;
        },
    },
   
};
</script>
<style>
  
</style>
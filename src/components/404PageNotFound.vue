<template>
  <div class="image bg-dark">
    <div class="page">
      <img
        src="https://github.com/AbuBakrKhan24/Database/blob/main/Images/Anime-Poll/404%20Not%20Found/My%20Movie.gif?raw=true"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.image {
  height: 93vh;
}
.page {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
img {
  height: 50%;
}

/* Media Queries */
@media only screen and (max-width: 376px) {
  img {
    width: 100%;
  }
  div#footer {
    margin-top: -39%;
  }
  .page {
    padding-bottom: 150px;
  }
}
</style>

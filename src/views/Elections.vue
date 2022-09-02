<template>
  <div v-if="user.user_type === admin">
    <div class="display text-center bg-dark text-light">
      <!-- <div
      class="display text-center bg-dark text-light"
      v-on:load="addElement()"
    > -->
      <!-- <button @click="addElement()">addElement</button> -->
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active carasoul_btn"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            class="carasoul_btn"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            class="carasoul_btn"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <electionCarasoul
            v-for="electionCarasoul in categorysection"
            :key="electionCarasoul.category_ID"
            :election="electionCarasoul"
          />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row text-dark">
        <election
          v-for="election in categorysection"
          :key="election.category_ID"
          :election="election"
        />
      </div>
    </div>
  </div>
  <div v-if="user.user_type === user">
    <div class="display text-center bg-dark text-light">
      <!-- <div
      class="display text-center bg-dark text-light"
      v-on:load="addElement()"
    > -->
      <!-- <button @click="addElement()">addElement</button> -->
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active carasoul_btn"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            class="carasoul_btn"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            class="carasoul_btn"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <electionCarasoul
            v-for="electionCarasoul in categorysection"
            :key="electionCarasoul.category_ID"
            :election="electionCarasoul"
          />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row text-dark">
        <election
          v-for="election in categorysection"
          :key="election.category_ID"
          :election="election"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <PageNotFound></PageNotFound>
  </div>
  <Footer></Footer>
</template>

<script>
import election from "../components/electionCard.vue";
import electionCarasoul from "../components/electionCarasoul.vue";
// import categoryCard from "../components/categoryCard.vue";
import Footer from "../components/Footer.vue";
import PageNotFound from "../components/404PageNotFound.vue";
import ElectionCarasoul from "../components/electionCarasoul.vue";
export default {
  data() {
    return {
      active: false,
    };
  },
  components: {
    election,
    electionCarasoul,
    Footer,
    PageNotFound,
    ElectionCarasoul,
  },
  mounted() {
    this.$store.dispatch("getCategorySection", this.$route.params.id);
    this.addElement();
    this.ButtonClick();
  },
  computed: {
    categorysection() {
      return this.$store.state.categorysection;
      // console.log(this.$store.state.categorysection)
    },
    user() {
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    addElement() {
      var myElement = document.querySelector(".carousel-item");
      // example for addding some-class to the element
      myElement.classList.add("active");
      console.log("It worked");
    },
    ButtonClick() {
      !this.active;
      if (this.active === true) {
        document.getElementsByClassName("next").click();
      }
    },
  },
};
</script>
<style scoped>
/* .display[data-v-580e69b0] {
  min-height: 100vh;
  padding: 5% 0 10% 0;
} */

.display.text-center.bg-dark.text-light {
  min-height: 100vh;
  padding: 5% 0 10% 0;
}
.admin_box {
  min-height: 100vh;
  /* margin-bottom: 118px; */
  padding: 5%;
  padding-bottom: 10%;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(0 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}

@media only screen and (max-width: 992px) {
  .display.text-center.bg-dark.text-light {
    padding-bottom: 25%;
  }
}
@media only screen and (max-width: 376px) {
  .display.text-center.bg-dark.text-light {
    padding-bottom: 170px;
    padding-bottom: 25%;
  }
}

/* Carasoul styles */
button.carasoul_btn {
  background-color: cornflowerblue;
}

button.active.carasoul_btn {
  /* color: black; */
  background-color: black;
}

.carousel-control-next,
.carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: 0 0;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
/* Carasoul styles done*/

@media only screen and (max-width: 1670px) {
  .carousel-control-next,
  .carousel-control-prev {
    width: 9%;
    padding: 0;
    color: #fff;
  }
}
</style>

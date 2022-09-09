<template>
  <div class="content bg-dark text-light">
    <div class="head">
      <h1 class="text-light">
        About
        <span class="text-success">Us</span>
      </h1>
    </div>
    <div class="row container">
      <div class="col-lg-6 col-md-12">
        <img
          class="img-fluid about_pic"
          src="https://github.com/AbuBakrKhan24/E-com-back-end/blob/main/resources/about%20img.jpg?raw=true"
        />
      </div>
      <div class="col-lg-6 col-md-12 home_details">
        <div class="about-info">
          <p>
            Hi, My name is Abu-Bakr. I am an aspiring Full Stack Developer. I
            really enjoy helping others and trying out new things. Always aim to
            achieve my goals and live my life to its fullest each day.
          </p>
          <p>
            I created this website to connect with other people and allow them
            to all vote for an Anime, Manga, Manhwa and Manhua that they feel is
            their favourite. This is nice Because many have their own opinions
            to why they feel like a certain one of those categories should be
            number one.
          </p>
          <p>
            In my spare time, I tend to do lots of research on which Anime,
            Manga, Manhwa and Manhua are trending on the web as the best and
            that gives me some idea to make a new Ongoing election for this
            website.
          </p>
        </div>
        <div class="about_me_details">
          <div class="row">
            <div class="col-lg-12 about_me_details_cols">
              <table class="table text-light">
                <tbody>
                  <tr>
                    <th scope="row">Full Name:</th>
                    <td>Abu-Bakr Khan</td>
                  </tr>
                  <tr>
                    <th scope="row">Age :</th>
                    <td>19</td>
                  </tr>
                  <tr>
                    <th scope="row">Location:</th>
                    <td>Pelikan Park, South Africa</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone:</th>
                    <td colspan="2">074 480 1770</td>
                  </tr>
                  <tr>
                    <th scope="row">email:</th>
                    <td colspan="2">abubakrkhan224@gmail.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
export default { components: { Footer } };
</script>
<style scoped>
.content {
  padding-top: 83px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.head {
  padding-top: 4%;
  padding-bottom: 4%;
}

section#About {
  padding-top: 6%;
}

.header {
  padding-bottom: 30px;
}

.about-info {
  border-bottom: 1px solid #08d665;
  margin-bottom: 13px;
}

img.about_pic {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.about_details {
  font-weight: 600;
  position: relative;
  width: 60px;
  display: inline-block;
  margin-bottom: 10px;
  color: #222;
}

.about_details_col1 {
  padding-left: 10px;
}
th,
td {
  /* border-color: inherit; */
  border-style: none;
  /* border-width: 0; */
  text-align: left;
}

.line-about {
  margin-top: 10%;
  margin-bottom: 5%;
  border-top: solid 2px #08d665;
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
</style>

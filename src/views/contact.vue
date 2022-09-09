<template>
  <section id="Contact" class="bg-dark text-light">
    <div class="header-contact">
      <h2>
        Contact
        <span class="text-success">Me</span>
      </h2>
    </div>
    <div class="container contact_container">
      <form action="https://formspree.io/f/mzbojdwq" method="POST">
        <div class="row">
          <div class="col-md-6">
            <div class="contact_input">
              <input
                type="text"
                class="form-control bg-dark text-light"
                id="formGroupExampleInput"
                placeholder="Full Name"
              />
              <div class="row">
                <div class="col mt-3">
                  <input
                    type="text"
                    class="form-control bg-dark text-light"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div class="col mt-3">
                  <input
                    type="text"
                    class="form-control bg-dark text-light"
                    placeholder="Subject"
                    aria-label="Subject"
                  />
                </div>
              </div>
              <textarea
                rows="5"
                name="message"
                class="form-control bg-dark text-light mt-3"
                placeholder="Your Message"
                required="required"
              ></textarea>
            </div>
            <div class="sub-button mt-3">
              <input type="submit" value="Send message" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="row contact-box-details">
              <div class="contact_details border border-white">
                <h6>CONTACT ADDRESS</h6>
                <div class="container contact_icons">
                  <div class="col contact_info">
                    <div class="contact_icon_info">
                      <i class="fa-solid fa-location-dot"> </i>
                    </div>
                    <div class="details">
                      <p>Pelikan Park</p>
                    </div>
                  </div>
                  <div class="col contact_info">
                    <div class="contact_icon_info">
                      <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="details">
                      <p>abubakrkhan224@gmail.com</p>
                    </div>
                  </div>
                  <div class="col contact_info">
                    <div class="contact_icon_info">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    <div class="details">
                      <p>(+27) 74 480 1770</p>
                    </div>
                    <div class="col links">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/abu-bakr-khan-a58b23225/"
                      >
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/AbuBakrKhan24"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
/* contact */
section#Contact {
  padding-top: 6%;
  height: 92vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.contact_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-contact {
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
}
.contact_details {
  width: 100%;
  height: 300px;
}
.sub-button {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
input[type="submit"] {
  border-radius: 30px;
  padding: 10px 20px;
  background: darkslategrey;
  color: #fff;
  border: #08d665;
}
input[type="submit"]:hover {
  background: #08d665;
  border: #08d665;
  transition: 0.5s;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: rgb(8 214 101);
  outline: 0;
  box-shadow: 0 0 0 -0.85rem rgb(8 214 101);
}
.contact_details {
  padding-left: 20px;
}
.contact_details h6 {
  margin-top: 20px;
  margin-bottom: 25px;
}
.contact_icons i {
  padding-left: 0%;
}
.contact_icons i {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  background: #08d665;
  color: #fff;
  padding-top: 15px;
  padding-left: 15px;
  margin-bottom: 25px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.contact_info {
  display: flex;
}
.details {
  display: flex;
  padding-left: 15px;
  padding-bottom: 15px;
  flex-direction: column;
  justify-content: center;
}
.contact-boc-details {
  margin: 0px;
}
.links {
  font-size: 25px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding-bottom: 5px;
}
a {
  color: aliceblue;
}
a {
  /* color: var(--bs-link-color); */
  text-decoration: none;
}
i:hover {
  color: #212529;
  transition: 0.3s;
}
i.fa-brands.fa-linkedin {
  margin-right: 10px;
}
</style>

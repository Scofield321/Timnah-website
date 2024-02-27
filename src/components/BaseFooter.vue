<template>
  <footer>
    <div class="footer-container">
      <div class="school">
        <h1>Our School</h1>
        <p>
          With a fresh beginning, our school fosters innovation, creativity, and
          resilience, laying the foundation for a bright future ahead.
        </p>
      </div>

      <div class="useful-links">
        <h1>Useful Links</h1>
        <div class="links">
          <router-link to="/fees">Fees structure</router-link>
          <router-link to="/school-policies">School Policies</router-link>
          <router-link to="/how-to-be-our-student"
            >How to Be Our Student</router-link
          >
        </div>
        <div class="social-media">
          <p></p>
          <p>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
          </p>
          <p>
            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
          </p>
          <p>
            <a href=""><i class="fa-brands fa-x-twitter"></i></a>
          </p>
          <p>
            <a href=""><i class="fa-brands fa-tiktok"></i></a>
          </p>
        </div>
      </div>

      <div class="contacts">
        <h1>Contacts</h1>
        <p class="contacts-para">
          <i class="fa-solid fa-earth-americas"></i>
          <span class="earth">
            Kasana Luwero, Mabale, Luwero, P.O BOX 400, Luweero
          </span>
        </p>
        <p>
          <i class="fa-solid fa-phone"></i>
          <span class="phone-number">
            Admissions Office: +256 707 549 977 | Ass. Admissions Office : +256
            787 664 845
          </span>
        </p>
        <p>
          <i class="fa-regular fa-envelope"></i>
          <span class="email">timnahschools@gmail.com</span>
        </p>
      </div>
      <section class="map">
        <h1>Location</h1>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.556702681799!2d32.47925254521711!3d0.8403628123133654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c650f273ec15b%3A0xeeb10586662c0f32!2sTimnah%20Schools%20Luweero!5e0!3m2!1sen!2sug!4v1708585033709!5m2!1sen!2sug"
            width="350"
            height="200"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </p>
      </section>
    </div>
    <hr />
    <p class="copyright">
      Copyright &copy; {{ currentYear }} Timnah Schools. All rights reserved.
      <br />
      Designed by School For One Online coding school (+256 758-654-931)
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 6rem 4rem 3rem 5rem;
}

footer {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/Timimages/pitch.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 105vh;
}

.school,
.useful-links,
.contacts,
.map {
  margin-top: 15rem;
  margin-right: 2rem;
}

.map h1 {
  color: #b2b2b2;
}

.useful-links,
.contacts,
.school {
  color: #b2b2b2;
}
.school p {
  color: #fff;
}
.contacts h1,
.school h1,
.useful-links h1,
.map h1 {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
}

.contacts p,
.school p,
.useful-links a {
  padding-bottom: 1rem;
}

.phone-number,
.email,
.earth {
  padding-left: 20px;
  line-height: 1.5;
}
.fa-mobile,
.fa-envelope {
  font-size: 20px;
  color: #81ca00;
}
.contacts-para i {
  color: #81ca00;
}
.contacts {
  width: 15rem;
}
.school p {
  letter-spacing: 1.2px;
  line-height: 1.5;
  width: 15rem;
}

.links {
  display: flex;
  flex-direction: column;
  list-style-type: disc;
}
.links a {
  padding: 5px;
  color: #00aaff;
  text-decoration: none;
  display: list-item;
}

.links a:hover {
  text-decoration: underline;
}

.social-media {
  display: flex;
  width: 15rem;
  padding-left: 0;
  margin-left: -1.5rem;
}
.social-media p {
  padding: 8px;
}
.social-media p i {
  font-size: 1.5rem;
}

.fa-instagram {
  color: #c13584;
}
.fa-youtube {
  color: #ff0000;
}
.fa-tiktok {
  color: #000;
}
.fa-facebook-f {
  color: #1877f2;
}
.fa-x-twitter {
  color: #fff;
}

.copyright {
  color: #b2b2b2;
  text-align: center;
  margin-top: 5rem;
}
</style>
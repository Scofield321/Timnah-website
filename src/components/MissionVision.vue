<template>
  <div>
    <section class="mission-vision-key-policies-main">
      <NavBar />
      <h1>Mission & Vision</h1>
      <BaseButton />
    </section>
    <section class="main-section">
      <h1>MISSION & VISION</h1>
      <h3>MISSION</h3>
      <div class="main-body">
        <div class="card">
          <h1>ABOUT US</h1>
          <hr />
          <router-link to="/mission-vision">Mission, Vision</router-link>
          <router-link to="/message-from-the-school-principal"
            >Message from Principal</router-link
          >
          <router-link to="school-policies">School Policies</router-link>
        </div>
        <article>
          <h2>To foster students with:</h2>
          <p>Highest academic standards.</p>
          <p>Great analytical minds.</p>
          <p>Compassionate and sensitive hearts.</p>
          <p>
            Safe and nurturing school environment that supports and encourages
            lifelong learning, positive self-esteem and understanding.
          </p>
        </article>
        <article class="second-article">
          <p>
            Teachers who are professionally proficient and passionate educators
          </p>
          <p>Resources and opportunities that enhance learning</p>
          <p>
            Recognize and respect the multicultural and international diversity
            of our school community.
          </p>
        </article>
        <article class="vision">
          <h2>VISION</h2>
          <p>
            To produce an all round citizen who is mentally, socially and
            spiritually responsible
          </p>
        </article>
      </div>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import BaseFooter from "./BaseFooter.vue";
import BaseButton from "./BaseButton.vue";
export default {
  components: { NavBar, BaseFooter, BaseButton },
};
</script>

<style scoped>
.mission-vision-key-policies-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/school-executives.jpeg");
  background-size: cover;
  background-position: center 20%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}

.mission-vision-key-policies-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  font-size: 2.5rem;
}
.main-section h1 {
  text-align: center;
  margin: 2rem;
  color: #81ca00;
}
h3 {
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: -1rem;
  /* 0705467485 */
}
.main-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;
  margin: 4rem 5rem -5rem 5rem;
}
.card {
  background-color: whitesmoke;
  height: 20rem;
  width: 17rem;
}
a {
  text-decoration: none;
  color: #000;
  display: block;
  margin: 2rem 1rem;
}
a:hover {
  text-decoration: underline;
  color: #00aaff;
}

hr {
  margin-bottom: 1.2rem;
  height: 4px;
  background-color: #81ca00;
  margin: 0 1rem;
}
article p {
  /* margin-bottom: 0.3rem; */
  line-height: 30px;
  color: #595959;
  font-size: 16px;
  list-style-type: disc;
  display: list-item;
}

article h2 {
  margin-bottom: 1rem;
  color: #000;
}
.second-article {
  margin-top: 3rem;
}
.vision {
  border-left: 1px solid black;
  padding-left: 1rem;
}
.vision p {
  background-color: whitesmoke;
  list-style-type: none;
  padding: 1rem;
  font-size: 1.2rem;
}
</style>
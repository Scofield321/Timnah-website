<template>
  <div class="ict-container">
    <section class="ict-main">
      <NavBar />
      <h1>ICT</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <div class="images-for-ict">
        <img
          src="@/assets/Timimages/primary-kids-in-computer-lab.jpeg"
          alt="kids in computer lab"
        />
      </div>
      <article>
        <p>
          <strong>Timnah</strong> is a WiFi campus where internet is available
          to staff and students in all major buildings.
        </p>
        <p>
          The campus has a fully equipped computer lab for ICT teaching with the
          best teachers who give the best modern knowledge to kids
        </p>
        <p>
          All students in the computer lab have sit on their own computer, with
          no share and our class is small for better learning environment.
        </p>
      </article>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import NavBar from "../NavBar.vue";
import BaseFooter from "../BaseFooter.vue";
import BaseButton from "../BaseButton.vue";
export default {
  components: { NavBar, BaseFooter, BaseButton },
};
</script>

<style scoped>
.ict-container {
  background-color: whitesmoke;
}
.ict-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/Timimages/comp-lab.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.ict-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  font-size: 2.5rem;
}
/* styling the body */

.main-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 6rem 5rem 1rem 5rem;
}
.images-for-ict img {
  height: 17rem;
  width: auto;
  /* margin-top: 2rem; */
}
article p {
  margin-bottom: 2rem;
  line-height: 30px;
  color: #595959;
  font-size: 16px;
}
strong {
  font-weight: bolder;
}
</style>
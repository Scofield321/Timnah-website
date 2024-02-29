<template>
  <div class="healthy-container">
    <section class="healthy-main">
      <NavBar />
      <h1>Healthy</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <div class="images-for-healthy">
        <img src="@/assets/Timimages/healthy.jpeg" alt="kids in computer lab" />
      </div>
      <article>
        <p>
          At <strong>Timnah</strong> we all a fully equipped healthy facility at
          school and we treat both day scholars and boarding students.
        </p>
        <p>
          We have well qualified nurses, and the students are treated to heal
          unless the situation is beyond control, but those are rare case at our
          school.
        </p>
        <p>
          At <strong>Timnah Schools</strong>, our clinic provides comprehensive
          healthcare services. With a dedicated team of professionals and we
          prioritize student well-being, offering prompt care and fostering a
          healthy environment for all.
        </p>
      </article>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import BaseFooter from "../../components/BaseFooter.vue";
import BaseButton from "../../components/BaseButton.vue";
export default {
  components: { NavBar, BaseFooter, BaseButton },
};
</script>

<style scoped>
.healthy-container {
  background-color: whitesmoke;
}
.healthy-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/Timimages/healthy-copy.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.healthy-main h1 {
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
.images-for-healthy img {
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
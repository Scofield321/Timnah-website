<template>
  <div>
    <section class="primary-school-main">
      <NavBar />
      <h1>Primary School</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <div class="images-for-kids">
        <img
          src="../assets/Timimages/primary-kids-in-computer-lab.jpeg"
          alt="primarykids in computer-lab"
        />
        <img
          src="../assets/Timimages/primary-kids-in-library.jpeg"
          alt="primarykids in library"
        />
        <img
          class="down-image"
          src="../assets/Timimages/primary-kids-sowing.jpeg"
          alt="primary kids sowing"
        />
        <img
          class="down-image"
          src="../assets/Timimages/primary-kids-performing-cultural-dance.jpeg"
          alt="primary kids performing cultural dance"
        />
      </div>
      <article>
        <p>
          <span><i class="fa-solid fa-quote-left"></i></span> This stage
          encompasses Years 5-6 with children aged from 7-11 years. We follow
          the National Curriculum of Uganda with some modification to
          acknowledge the importance of international setting. We aim to create
          a learning environment that is full of energy, enthusiasm and
          creativity where children are encouraged to ask questions, explore and
          apply their ever increasing levels of skills and knowledge to new
          situations.
        </p>
        <p>
          Children are taught in mixed ability classes with both a teacher and
          assistant teacher. They receive specialist classes in other fields
          like ICT each week. The curriculum is organised within a framework of
          topics where essential skills, knowledge and concepts are connected
          through a common theme.
        </p>
        <p>
          Although we believe in the importance of a balanced curriculum, the
          core subjects are Maths, Literacy and Science are emphasised at this
          stage
          <span><i class="fa-solid fa-quote-right"></i></span>
        </p>
      </article>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseFooter from "./BaseFooter.vue";
import NavBar from "./NavBar.vue";
export default {
  components: { NavBar, BaseButton, BaseFooter },
};
</script>

<style scoped>
.primary-school-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/Timimages/primary-main2.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
  background-color: whitesmoke;
  margin-bottom: 1rem;
}

.primary-school-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  font-size: 2.5rem;
}
.main-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  margin: 4rem 5rem -5rem 5rem;
}
.images-for-kids {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.2rem;
  margin-top: 5.5rem;
}
.images-for-kids img {
  height: 10rem;
  width: auto;
}
.down-image {
  margin-top: -9.2rem;
}
article p {
  margin-bottom: 2rem;
  line-height: 30px;
  color: #595959;
  font-size: 16px;
}
hr {
  margin-bottom: 1.2rem;
  height: 1px;
  background-color: #81ca00;
}
span i {
  color: #81ca00;
  font-size: 2rem;
  padding-right: 20px;
}
</style>
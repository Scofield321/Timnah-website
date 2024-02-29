<template>
  <div class="cafeteria-container">
    <section class="cafeteria-main">
      <NavBar />
      <h1>Cafeteria</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <div class="images-for-cafeteria">
        <img src="@/assets/Timimages/food1.jpeg" alt="food in cafeteria" />
      </div>
      <article>
        <p>
          Lunches are provided and are compulsory for students up to and
          including Year 9. Students in Year 10 and above may choose to either
          enjoy school-provided lunches or bring their own. It’s important to
          note that our cafeteria exclusively serves Halal meats, and pork is
          not offered.
        </p>
        <p>
          <strong>Timnah's</strong> cafeteria is a vibrant hub of culinary
          delight, serving nutritious and delicious meals to fuel young minds.
          With a diverse menu catering to various dietary needs and preferences,
          it promotes healthy eating habits. The spacious and inviting
          atmosphere encourages social interaction and relaxation, fostering
          friendships and a sense of community among students as they refuel and
          recharge during their busy school days.
        </p>
        <p>
          Dedicated staff ensure food quality and hygiene standards, making
          dining at <strong>Timnah </strong>both nourishing and enjoyable for
          all students and staff alike.
        </p>
      </article>
      <div class="images-for-cafeteria">
        <div class="last-img">
          <img src="@/assets/Timimages/food2.jpeg" alt="kids in cafeteria" />
        </div>
      </div>
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
.cafeteria-container {
  background-color: whitesmoke;
}
.cafeteria-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/Timimages/lib.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.cafeteria-main h1 {
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin: 4rem 5rem -5rem 5rem;
  width: 100%;
}
.images-for-cafeteria img {
  width: 15rem;
  /* margin-top: 2rem; */
}
.last-img img {
  margin-right: -6rem;
}
article p {
  margin-bottom: 2rem;
  line-height: 30px;
  color: #595959;
  font-size: 16px;
}
article {
  margin-left: -5rem;
}
strong {
  font-weight: bolder;
}
</style>
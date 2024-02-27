<template>
  <div>
    <section class="schools-director-main">
      <NavBar />
      <h1>Message From School Principal</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <div>
        <img src="../assets/Timimages/fake-principal.jpeg" alt="Director" />
        <p class="principal-name">Mr. Principal</p>
      </div>
      <article>
        <hr />
        <h1>School Principal's Message</h1>
        <p>
          Education is not just a process of giving knowledge for a future job
          but a lifelong process which creates an understanding of moral and
          ethical values to guide one’s life in a right path. As a parent, you
          want the best for your child and we are proud to be working with you
          to ensure that they are given the right knowledge to face the future
          challenges.
        </p>
        <p>
          At Timnah School, we focus on complete development of our students by
          involving them in both scholastic & co-scholastic activities. I am
          sure this will help our children to realize, understand & explore
          their talents.
        </p>
      </article>
      <article>
        <hr />
        <p>
          In order to do this, the parents and the school authorities must work
          together to reach certain values in the students. “Sound body has a
          Sound Mind.” Let us allow our children to develop physically &
          mentally. Children learn a lot of values when they are involved in
          Sports & Games. Some of these life skills & values cannot be taught in
          the classroom or at home. Timnah provides enough opportunities for the
          children to participate in Sports & games.
        </p>
        <p>
          If a plant is carefully nurtured by a gardener, it will become good,
          and produce better fruits.” Therefore, children must be given a good
          training from their earliest childhood. We are here for the same.
        </p>
      </article>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import BaseFooter from "./BaseFooter.vue";
import BaseButton from "./BaseButton.vue";
export default {
  components: {
    NavBar,
    BaseFooter,
    BaseButton,
  },
};
</script>

<style scoped>
.schools-director-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/kids-in-class.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}

.schools-director-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 300;
  font-size: 42px;
  word-break: break-word;
}

.main-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin: 4rem 5rem -5rem 5rem;
}
article h1 {
  font-size: 1.7rem;
  margin-bottom: 1.2rem;
}

article p {
  margin-bottom: 2rem;
  line-height: 30px;
  color: #595959;
  font-size: 16px;
}
img {
  height: 25rem;
  margin-top: 2rem;
}
.principal-name {
  font-size: 1.5rem;
  margin-top: 1rem;
  text-indent: 3rem;
}

hr {
  margin-bottom: 1.2rem;
  height: 1px;
  background-color: #81ca00;
}
</style>
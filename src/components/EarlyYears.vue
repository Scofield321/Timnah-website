<template>
  <div>
    <section class="early-years-main">
      <NavBar />
      <h1>Early Years</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <article>
        <hr />
        <h1>
          <span><i class="fa-solid fa-quote-left"></i></span> Early Years
        </h1>
        <p>
          Our team of experienced and caring Early Years teachers plan learning
          experiences that appeal to young children’s natural inquisitiveness.
        </p>
        <p>
          The Early Years curriculum is taught through exciting and child
          friendly topics, we gamify .
        </p>
        <p>
          We recognize that young children deepen their understanding by
          playing, talking, observing, questioning, experimenting, reflecting
          and responding to adults. At <strong>Timnah </strong>we know that if
          children are happy and secure they will achieve and gain in
          confidence.
          <span><i class="fa-solid fa-quote-right"></i></span>
        </p>
      </article>
      <article>
        <hr />
        <p>
          <span><i class="fa-solid fa-quote-left"></i></span>
          Well-planned play and child led investigations are the key ways in
          which children learn while simultaneously enjoying themselves and
          feeling challenged.
        </p>
        <p>
          Teachers carefully monitor each child throughout the foundation stage
          to ensure progress is being made and that tasks are well matched to
          each individual’s ability and needs, as well as to inform teachers and
          parents of the next step towards achieving the Early Learning Goals.
        </p>
        <p>
          We firmly believe that the Foundation Stage provides the best possible
          start to education.
          <span><i class="fa-solid fa-quote-right"></i></span>
        </p>
      </article>
      <div class="images-for-kids">
        <img src="../assets/Timimages/kids1.jpeg" alt="babies in classroom" />
        <img
          src="../assets/Timimages/kids2.jpeg"
          alt="kids in classroom with a teacher"
        />
        <img
          class="down-image"
          src="../assets/Timimages/kids3.jpeg"
          alt="kids entering a bus"
        />
        <img
          class="down-image"
          src="../assets/Timimages/kids41.jpeg"
          alt="babies playing"
        />
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
.early-years-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/kids-in-class.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.early-years-main h1 {
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
}

.images-for-kids {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.2rem;
  margin-top: 2.5rem;
}
.images-for-kids img {
  height: 8rem;
  width: auto;
}
.down-image {
  margin-top: -10.8rem;
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
article h1 {
  text-decoration: underline;
}
strong {
  font-weight: bolder;
}
</style>
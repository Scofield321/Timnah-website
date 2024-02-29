<template>
  <div class="library-container">
    <section class="library-main">
      <NavBar />
      <h1>Library</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <div class="images-for-library">
        <img
          src="@/assets/Timimages/primary-kids-in-library.jpeg"
          alt="kids in library"
        />
      </div>
      <article>
        <p>
          At <strong>Timnah</strong>, we regard the Library as the focal point
          of the learning experience, providing children and staff with
          information and reading materials, as well as teaching and learning
          resources.
        </p>
        <p>
          Libraries are the hub of our school and they are extremely well
          stocked with resources. They are particularly successful in providing
          a warm and comfortable environment for reading and information
          sourcing.
        </p>
        <p>
          There is always a librarian to assist with finding information from
          the different resources in the library. Library is open from 8.00am–
          4.00pm on weekdays and 9.00am-2.00pm on Saturdays
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
.library-container {
  background-color: whitesmoke;
}
.library-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/Timimages/lib.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.library-main h1 {
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
  margin: 4rem 5rem -5rem 5rem;
}
.images-for-library img {
  height: 17rem;
  width: auto;
  margin-top: 2rem;
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
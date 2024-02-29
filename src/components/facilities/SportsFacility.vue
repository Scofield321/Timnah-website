<template>
  <div class="sports-container">
    <section class="sports-main">
      <NavBar />
      <h1>Sports & Art</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <div class="images-for-sports">
        <img :src="currentImage" alt="Current Image" />
        <div class="btns">
          <button class="prev-btn" @click="showPreviousImage">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button class="next-btn" @click="showNextImage">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <article>
        <p>
          <strong>Timnah's</strong> commitment to holistic development extends
          to its robust sports program, offering a diverse range of games and
          activities. From traditional team sports like soccer to individual
          pursuits like dancing, perfoming art, very student finds an avenue for
          physical fitness and skill enhancement..
        </p>

        <p>
          The school's state-of-the-art facilities and qualified coaches ensure
          optimal training and participation opportunities. Beyond physical
          health, sports instill vital values like teamwork, discipline, and
          resilience, preparing students for challenges both on and off the
          field.
        </p>
        <p>
          <strong>Timnah's</strong> sports program fosters leadership, and a
          lifelong passion for active living, shaping well-rounded individuals.
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
  data() {
    return {
      images: [
        require("@/assets/Timimages/pitch.jpeg"),
        require("@/assets/Timimages/kids-playing-in-compound.jpeg"),
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    showNextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    showPreviousImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style scoped>
.sports-container {
  background-color: whitesmoke;
}
.sports-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("@/assets/Timimages/pitch.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.sports-main h1 {
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
.images-for-sports {
  position: relative;
  display: inline-block;
}
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  padding: 12px 16px;
  cursor: pointer;
  border: 3px solid #00aaff;
}
.prev-btn:hover,
.next-btn:hover {
  color: black;
  background-color: #00aaff;
}
.prev-btn {
  top: 80%;
  right: 7.5rem;
}
.next-btn {
  top: 80%;
  right: 5rem;
  margin-left: 3rem;
  border-left: none;
}
.images-for-sports img {
  height: 20rem;
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
i {
  color: white;
}
</style>
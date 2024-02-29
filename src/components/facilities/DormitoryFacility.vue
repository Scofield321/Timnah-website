<template>
  <div class="ict-container">
    <section class="dormitory-main">
      <NavBar />
      <h1>Dormitory</h1>
      <BaseButton />
    </section>
    <section class="main-body">
      <!-- <div class="images-for-dormitory">
        <img src="@/assets/Timimages/dom-fake.jpeg" alt="fake dorm" />
      </div> -->
      <div class="images-for-drama">
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
          <strong>Timnah's dormitory</strong> is a haven of comfort and
          camaraderie, offering a supportive home-away-from-home environment for
          students. With spacious rooms designed for privacy and relaxation, it
          fosters a sense of belonging and community.
        </p>

        <p>
          Supervised by caring residential staff, it ensures safety and
          well-being round the clock. The dormitory serves as a hub for cultural
          exchange and friendship building, where students from diverse
          backgrounds come together to share experiences and create lasting
          memories.
        </p>

        <p>
          With study areas, recreational facilities, and organized activities,
          it nurtures holistic growth beyond the classroom, preparing students
          for a bright future.
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
  data() {
    return {
      images: [
        require("@/assets/Timimages/dom-fake.jpeg"),
        require("@/assets/Timimages/fake-dom.jpeg"),
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
.dormitory-container {
  background-color: whitesmoke;
}
.dormitory-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/Timimages/comp-lab.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.dormitory-main h1 {
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
.images-for-drama {
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
  right: 11.5rem;
}
.next-btn {
  top: 80%;
  right: 9rem;
  margin-left: 3rem;
  border-left: none;
}
.images-for-drama img {
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
</style>
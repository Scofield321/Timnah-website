<template>
  <div class="home-container">
    <NavBar />
    <section
      :style="{
        backgroundImage: `url(${currentImage})`,
        opacity: imageOpacity,
      }"
    >
      <div v-if="showCard" class="cards-wrapper">
        <div
          class="card"
          v-for="(card, index) in cardData"
          :key="index"
          :style="{
            top: card.position.top,
            left: card.position.left,
            opacity: card.opacity,
          }"
        >
          <div class="card-body">
            <p
              class="card-text"
              :class="{ 'animated-text': card.opacity === 1 }"
            >
              {{ card.text }}
            </p>
          </div>
        </div>
      </div>
      <BaseButton />
    </section>
    <section class="wrapped-section">
      <h1>Discover Our School</h1>
      <div class="main-body">
        <div class="home-main-images">
          <img
            src="../assets/Timimages/admission-flyer.jpeg"
            alt="Admission flyer"
          />
          <img
            class="images-2"
            src="../assets/Timimages/back-to-school.jpeg"
            alt="Back to school flyer"
          />
        </div>
        <article class="first-article">
          <p class="first-para">
            Established in 2023 with few students, Timnah has grown steadily
            over time. It currently accommodates about 300. State-of-the-art
            facilities include computer lab, sick bay, standard football pitch,
            Sowing room, fully packaged books library.
          </p>
          <p>
            Students participate in an extensive range of extracurricular
            activities including outdoor education, .The holistic education also
            fosters involvement in community building activities.
          </p>
        </article>
        <div class="admini-block-img">
          <img src="../assets/Timimages/administration-block.jpeg" alt="" />
        </div>
      </div>
    </section>
    <section class="discover-more">
      <h1>Discover more in a single video</h1>
      <div class="content-vid">
        <article>
          <p class="content-vid-p">
            Timnah Schools stands as a beacon of educational excellence. With
            state-of-the-art facilities and a nurturing environment, it
            cultivates young minds to flourish. Its innovative curriculum blends
            academic rigour with creative exploration, fostering holistic
            development.
          </p>
          <p>
            Timnah fosters a culture of inclusivity, where diversity is
            celebrated and every student's unique talents are embraced.
            Dedicated educators inspire a love for learning, guiding students
            towards success with passion and empathy. Through collaborative
            projects and extracurricular activities, Timnah instills leadership
            skills and cultivates a sense of community responsibility. It's more
            than a school; it's a home where dreams take flight.
          </p>
        </article>
        <div class="content-vid-video">
          <iframe
            width="560"
            height="315"
            :src="`https://www.youtube.com/embed/${videoId}`"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
    <section>
      <div class="highlights">
        <h1>Highlights</h1>
      </div>
    </section>
    <section class="calender">
      <h2 class="academic-calender">
        <i class="fa-regular fa-calendar-days"></i
        ><span>Academic Calender</span>
      </h2>
      <h1>2024</h1>
      <div class="different-calender">
        <div>
          <h4>January</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>26th, Liberation Day</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>8th, Half termly curriculum overviews home to parents</span>
          </p>
          <h4>February</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>16th, Janan Luwum Day</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>27th - 29th , Parent-teacher conferences</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>18, Last Day of Term 3</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>21-25, Staff only in school</span>
          </p>
          <h4>March</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>8th, International Women’s Day</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>11th, Science Week</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>18th, Assessment Week</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>28th, Interim reports home to parents</span>
          </p>
        </div>
        <div>
          <h4>April</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>1st 5th, Easter Break</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>8th, Term 3 Starts for Students</span>
          </p>
          <h4>May</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>1st, Labour Day Public Holiday</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>1st, Labour Day Public Holiday</span>
          </p>
          <h4>June</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>3rd, Martyr’s Day Public Holiday</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>9th, Heroes Day Public Holiday</span>
          </p>
          <h4>July</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>10th, Starting Exams Day</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>17th, End of term Two</span>
          </p>
        </div>
        <div>
          <h4>August</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>9th October Independence Day </span>
          </p>
          <h4>September</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>9th October Independence Day </span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>9th October Independence Day </span>
          </p>
          <h4>October</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>9th October Independence Day </span>
          </p>
          <h4>November</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>25th December Christmas day</span>
          </p>
          <h4>December</h4>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>25th December Christmas day</span>
          </p>
          <p>
            <i class="fa-regular fa-calendar-days"></i>
            <span>26th December Boxing day</span>
          </p>
        </div>
      </div>
    </section>
    <section class="media">
      <h1>Media</h1>
      <div class="images-gridded">
        <div class="image-container">
          <img
            src="../assets/Timimages/teaching-staff.jpeg"
            alt="Teaching staff"
          />
          <div class="overlay"></div>
        </div>
        <div class="image-container">
          <img
            src="../assets/Timimages/community-leaders-planting-tree.jpeg"
            alt="Community leaders"
          />
          <div class="overlay"></div>
        </div>
        <div class="image-container">
          <img
            src="../assets/Timimages/primary-kids-performing-cultural-dance.jpeg"
            alt="Kids performing cultural dance"
          />
          <div class="overlay"></div>
        </div>
        <div class="image-container">
          <img
            src="../assets/Timimages/school-executives.jpeg"
            alt="School executives"
          />
          <div class="overlay"></div>
        </div>
        <div class="image-container">
          <img
            src="../assets/Timimages/mdd-kids-in-white.jpeg"
            alt="Kids dancing in white on MDD"
          />
          <div class="overlay"></div>
        </div>
        <div class="image-container">
          <img
            src="../assets/Timimages/cultural-dance.jpeg"
            alt="Cultural dance"
          />
          <div class="overlay"></div>
        </div>
      </div>
    </section>
    <!-- apply amd enrol starts here -->
    <section class="apply-enroll">
      <h1>Apply & Enrol</h1>
      <p>We are currently accepting applications for the 2024 academic year.</p>

      <div class="all-cards">
        <div class="card1">
          <div class="h2-btn">
            <h2>Apply</h2>
            <button><router-link to="/contact">Contact</router-link></button>
          </div>
        </div>
        <div class="card2">
          <div class="h2-btn">
            <h2>Request info</h2>
            <button>
              <router-link to="/request-info">Request info</router-link>
            </button>
          </div>
        </div>
      </div>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from "./BaseFooter.vue";
import NavBar from "./NavBar.vue";
import BaseButton from "./BaseButton.vue";

export default {
  components: {
    NavBar,
    BaseFooter,
    BaseButton,
  },
  data() {
    return {
      images: [
        require("../assets/Timimages/primary-kids-in-computer-lab.jpeg"),
        require("../assets/Timimages/administration-block.jpeg"),
        require("../assets/Timimages/kids-resting-on-their-back.jpeg"),
        require("../assets/Timimages/primary-main2.jpeg"),
        require("../assets/Timimages/kids-playing-in-compound.jpeg"),
      ],
      videoId: "VA9Zc6sfRkU",
      currentIndex: 0,
      intervalId: null,
      cardData: [
        {
          text: "Exploring the technology in state of the art Lab",
          position: { top: "60%", left: "40%" },
          opacity: 1,
        },
        {
          text: "Administration block where brains sit",
          position: { top: "50%", left: "70%" },
          opacity: 0,
        },
        {
          text: "Relaxing to refocus and to regain energy",
          position: { top: "50%", left: "0%" },
          opacity: 0,
        },
        {
          text: "Easy to learn classroom environment",
          position: { top: "60%", left: "50%" },
          opacity: 0,
        },
        {
          text: "Well assembled playing ground for kids",
          position: { top: "40%", left: "10%" },
          opacity: 0,
        },
      ],
      showCard: false,
      imageOpacity: 1,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
    cardText() {
      return this.cardData[this.currentIndex].text;
    },
  },
  mounted() {
    // Start slideshow on component mount
    this.startSlideshow();
    const imageContainers = document.querySelectorAll(
      ".images-gridded .image-container"
    );
    imageContainers.forEach((container) => {
      container.addEventListener("mouseover", () => {
        // Remove 'overlay-hover' class from all other image containers
        imageContainers.forEach((c) => c.classList.remove("overlay-hover"));
        // Add 'overlay-hover' class to the current image container
        container.classList.add("overlay-hover");
      });
    });
  },
  beforeUnmount() {
    // Clear interval when component is about to be unmounted
    clearInterval(this.intervalId);
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        // Reset opacity for all cards
        this.cardData.forEach((card) => {
          card.opacity = 0;
        });
        // Show current card by setting opacity to 1
        this.cardData[this.currentIndex].opacity = 1;
      }, 6000);
      setTimeout(() => {
        this.showCard = true;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.home-container {
  overflow: hidden;
  margin-top: -3rem;
  background-color: whitesmoke;
}

section {
  position: relative;
  background-size: cover;
  height: 120vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center 90%;
  transition: opacity 0.5s ease-in-out;
  margin-top: -5rem;
  margin-bottom: 8rem;
}

/* .cards-wrapper {
  position: relative;
} */
.card {
  position: absolute;
  top: 70%;
  width: 20rem;
  height: 12rem;
  color: #fff;
  background: #011b3ad9;
  transition: opacity 2s ease-in-out;
}

.card-body {
  position: relative;
  width: 100%;
  height: 100%;
}

.card-text {
  position: absolute;
  top: 20%;
  left: 0%;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 2rem;
}

.animated-text {
  animation: spreadText 4s ease-in-out forwards;
  opacity: 0;
}

@keyframes spreadText {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* styling the body */
.main-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin: 6rem 5rem 1rem 4rem;
}
.admini-block-img img {
  display: flex;
  flex-direction: column;
}
.admini-block-img img {
  height: 15rem;
  margin: 5rem 1rem 3rem 3rem;
}
.home-main-images {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.home-main-images img {
  width: 17rem;
  margin-top: -2rem;
}

.images-2 {
  height: 20rem;
  margin-top: 2rem;
}
.first-article {
  border-right: 1px solid black;
  border-left: 1px solid black;
}
.wrapped-section h1 {
  text-align: center;
  color: #81ca00;
  font-size: 2.5rem;
  margin-top: 2rem;
  font-weight: 900;
}
article p {
  margin-bottom: 2rem;
  line-height: 30px;
  color: #595959;
  font-size: 16px;
  margin: 0 3rem 1.5rem 3rem;
}

/* sryling discover more */
.content-vid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  height: 30rem;
}
.discover-more h1 {
  text-align: center;
  color: #81ca00;
  margin-bottom: 4rem;
  font-size: 2.5rem;
}
.content-vid-p,
.content-vid-video {
  margin-top: 2rem;
}

/* styling the highlight */
.highlights {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/students-with-teachers-in-circle.jpeg");
  background-size: cover;
  height: 18rem;
  background-position: center 50%;
  margin-top: -15rem;
}

.highlights h1 {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  color: #fff;
  font-weight: 300;
  font-size: 1.5rem;
  word-break: break-word;
}

/* styling calender */
.calender {
  height: 45rem;
  margin-top: -35rem;
  background-color: #fff;
}
.calender i {
  color: #81ca00;
}
.academic-calender {
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 2rem;
}
.calender h1 {
  margin: 0 0 3rem 5rem;
  padding-top: 2rem;
  font-size: 3rem;
}

.different-calender {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;
  margin: 3rem 5rem;
}

span {
  word-break: break-word;
  color: #999;
  padding: 20px;
}
h4 {
  margin: 1rem 0;
  font-size: 1.4rem;
  color: #011b3a;
  font-weight: 300;
  word-break: break-word;
}
.different-calender p {
  margin-bottom: 10px;
}

/* styling media */
.media {
  height: 20rem;
}
.media h1 {
  text-align: center;
  margin-bottom: 3rem;
  color: #81ca00;
  font-size: 2rem;
}
.images-gridded {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0;
}
.images-gridded .image-container {
  position: relative;
}
.images-gridded img {
  width: 14rem;
  height: auto;
}
.images-gridded img:hover {
  cursor: pointer;
  opacity: 0.8;
}
.images-gridded .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00aaffbf; /* Semi-transparent blue */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease;
}

.images-gridded .image-container:hover .overlay {
  opacity: 1; /* Show overlay on hover */
}

/* styling the apply and enrollemnt */

.apply-enroll {
  height: 20rem;
}
.apply-enroll h1,
.apply-enroll p {
  text-align: center;
}
.apply-enroll h1 {
  margin-bottom: 1.5rem;
}
.all-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* width: 30rem; */
  margin: 4rem 10rem;
  gap: 2rem;
}
.card1,
.card2 {
  background-color: white;
  width: 40rem;
  height: 10rem;
}
.h2-btn {
  text-align: center;
  margin-top: 1rem;
}
.h2-btn h2 {
  margin-bottom: 1rem;
}
button {
  background-color: transparent;
  border: 1px solid #00aaff;
  padding: 0.6rem 2rem;
  cursor: pointer;
}
button:hover {
  background-color: #00aaff;
}
a {
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  color: black;
}
a:hover {
  color: white;
}
</style>
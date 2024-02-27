<template>
  <div>
    <section class="schools-policies-main">
      <NavBar />
      <h1>School Policies</h1>
      <BaseButton />
    </section>
    <section class="main-section">
      <h1>General School Rules</h1>
      <div class="main-body">
        <div class="card-images">
          <div class="card">
            <h1>ABOUT US</h1>
            <hr />
            <router-link to="/mission-vision">Mission, Vision</router-link>
            <router-link to="/message-from-the-school-principal"
              >Message from Principal</router-link
            >
            <router-link to="school-policies">School Policies</router-link>
          </div>
          <img src="../assets/Timimages/kid-with-pencils.jpeg" alt="" />
          <img src="../assets/Timimages/admission-flyer.jpeg" alt="" />
          <img src="../assets/Timimages/back-to-school.jpeg" alt="" />
        </div>
        <article>
          <p>
            It is mandatory for every student to carry his/her almanac (students
            diary) and identity card to school every day .Students who come to
            school on their own should arrive 10 minutes before the bell rings.
          </p>
          <p>
            The morning bell before a class or assembly is a signal for all to
            go to the assembly or to their respective class-rooms. This should
            be done promptly and in silence.
          </p>
          <p>
            Changing of classrooms between periods should be done in an orderly
            manner and silently.
          </p>
          <p>
            Students should be habitually clean and always neatly dressed. The
            school uniform should be worn on all working days and for all school
            functions including Parent Teachers Meetings and Open Houses.
          </p>
          <p>
            All boys must keep their hair short. Girls must tie their hair if it
            is of shoulder length or longer neatly . Care must be taken of al
            school property. No student should damage any school furniture;
            write or draw anything on the walls. Damage done should be reported
            at once to the class teacher.
          </p>
          <p>School reserves the right to repair the damaged property.</p>
          <p>
            Parents are requested to ensure that their children carry their
            personal belongings themselves to school.
          </p>
          <p>
            The students are to reach the school at the specified time. He/She
            will not be allowed to enter the school after that and no calls will
            be entertained at the security gate and reception regarding the
            same.
          </p>
          <p>
            No application will be entertained requiring the student to leave
            the school premises for any personal/social functions i.e.
            marriages, birthday, going out of station, pujas etc. Parents are
            requested to regulate their personal schedules accordingly.
          </p>
          <p>
            Students who come to school with their escorts should never leave
            before the escort arrives. In case of delay, they should report to
            the school office.
          </p>
          <p>
            The school reserves the right to suspend students whose progress in
            studies is unsatisfactory or whose conduct is harmful to other
            students.
          </p>
          <p>
            A student who uses unfair means during tests/assessments will be
            given zero in the subject. Repetition of the same will result in
            dismissal.
          </p>
          <p>
            Expensive articles and jewellery are not allowed in the school. In
            violation of this rule, the article may be confiscated. The school
            bears no responsibility for articles lost in school.
          </p>
          <p>
            Students using the school bus shall maintain discipline in the bus.
            Bus facility will be withdrawn in cases where discipline is not
            properly maintained.
          </p>
        </article>
      </div>
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
.schools-policies-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/kids-in-class.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}
.schools-policies-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  font-size: 2.5rem;
}
.main-section h1 {
  text-align: center;
  margin: 2rem;
  color: #81ca00;
}
.main-body {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin: 4rem 5rem -5rem 5rem;
}
.card {
  background-color: #e3e7ea;
  height: 20rem;
  width: 17rem;
}
.card-images {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.card-images img {
  width: 17rem;
}

a {
  text-decoration: none;
  color: #000;
  display: block;
  margin: 2rem 1rem;
}
a:hover {
  text-decoration: underline;
  color: #00aaff;
}

hr {
  margin-bottom: 1.2rem;
  height: 4px;
  background-color: #81ca00;
  margin: 0 1rem;
}
article {
  border: 1px solid black;
  counter-reset: paragraph-counter; /* Reset the counter */
}

article p {
  line-height: 30px;
  color: #595959;
  font-size: 16px;
  padding: 0.5rem 1rem;
  counter-increment: paragraph-counter; /* Increment the counter for each paragraph */
  margin-left: 2em;
}
p::before {
  content: counter(paragraph-counter) ". "; /* Display the counter number */
  /* font-weight: bold;  */
}

article h2 {
  margin-bottom: 1rem;
  color: #000;
}
</style>
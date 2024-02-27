<template>
  <div>
    <section class="become-student-main">
      <NavBar />
      <h1>How To Be Our Student</h1>
      <BaseButton />
    </section>
    <section class="main-section">
      <h1>HOW TO BECOME A STUDENT</h1>
      <div class="main-body">
        <div class="card-images">
          <div class="card">
            <h1>ABOUT US</h1>
            <hr />
            <router-link to="/mission-vision"
              >Mission, Vision, Key policies</router-link
            >
            <div class="divider"></div>
            <router-link to="/message-from-the-school-principal"
              >Message from Principal</router-link
            >
            <div class="divider"></div>
            <router-link to="school-policies">School Policies</router-link>
          </div>
          <img
            src="../assets/Timimages/kid-with-pencils.jpeg"
            alt="kid sitting aroud the pencisl and pens"
          />
          <img
            src="../assets/Timimages/admission-flyer.jpeg"
            alt="admission flyers"
          />
          <img
            src="../assets/Timimages/back-to-school.jpeg"
            alt="beck to school flyer"
          />
        </div>

        <article>
          <h2>Overview</h2>
          <p class="overview-para">
            There will be an assessment on intimated date for students seeking
            admission to Primary I on-wards and during the assessment, presence
            of both the parents will be advised.
          </p>
          <p class="overview-para">
            ASSESSMENT /Admission tests ARE USUALLY CONDUCTED immediately after
            the registration of the child (if the child is ready for) or within
            a maximum period of next three working days.
          </p>
          <h2>Nursery Admission:</h2>
          <p>
            For admission to Nursery , there are no tests or interviews. The
            teacher observes / interacts with the child along with the parents.
            At TIMNAH Luwero the interview is as pleasant and non-intimidating
            as we can make it. We are interested in knowing about the child’s/
            student’s educational development, use of language, social skills,
            academic enthusiasms and extra-curricular interests. The aim of the
            interview is to find about what the student knows, understands and
            enjoys.
          </p>
          <h1>Procedure Of Admission:</h1>
          <p>
            No request for the change of dates for assessment / observation /
            interaction / interview will be entertained.
          </p>
          <p>
            The Student Admission form should be collected from the school
            office as soon as the assessment / observation / interaction /
            interview is done and the results are declared. The list of selected
            candidates will be put up on the School Notice Board at the
            Administrative Office.
          </p>
          <p>
            A Fee slip will be issued to parents or local / legal guardian of
            selected candidates as soon as the list is displayed on the notice
            board.
          </p>
          <p>
            Once the above steps are satisfactorily completed parents will
            receive an admission offer and may pay the applicable fees to
            confirm admission.
          </p>
          <p>
            The admission officer will explain the admission procedure to the
            parents of the selected candidates
          </p>
          <p>
            It is mandatory for both the parents and local / legal guardian to
            be present to complete various admission formalities.
          </p>
          <p>
            For students seeking admission in Primary I onwards, it is mandatory
            to submit Transfer Document (Original) from the last school
            attended.
          </p>
          <p>
            Fees once paid at the time of admission or later, are not refundable
            and NOT TRANSFERABLE in any case.
          </p>
          <p>
            The management reserves the right to have the last word in all
            matters relating to admission(s).
          </p>
          <p>
            All parents/students must read and accept Timnah Behavior Policy.
            <strong>TIMNAH SCHOOL LUWERO</strong> does not accept students with
            a history of drug, alcohol or weapon possession, or abuse.
          </p>
          <p>
            <strong>TIMNAH SCHOOL LUWERO</strong> does not accept students who
            have been expelled from their previous school for serious behavioral
            issues (including physical violence and bullying). Timnah School
            reserves the right to refuse admission to any applicant, at its sole
            discretion.
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
.become-student-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/kids-in-class.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}

.become-student-main h1 {
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
  height: 22rem;
  width: 17rem;
}
.card a:last-child {
  padding-bottom: 1.7rem;
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
  position: relative;
}
a:hover {
  text-decoration: underline;
  color: #00aaff;
}

.divider {
  height: 0;
  border-top: 1px dotted #000;
}

.divider::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 6rem;
  /* width: 15rem; */
  border-bottom: 1px dotted black; /* Adjust dotted line style */
}

hr {
  margin-bottom: 1.2rem;
  height: 4px;
  background-color: #81ca00;
  margin: 0 1rem;
}
article {
  border: 1px solid black;
  counter-reset: paragraph-counter 0; /* Reset the counter */
}
.overview-para {
  /* counter-reset: none; Reset the counter for paragraphs with class "overview-para" */
  list-style: none;
}
article h2:first-child {
  margin-top: 2rem;
}

h2 {
  margin-left: 3rem;
  color: #81ca00;
  margin-bottom: 1rem;
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
article p:last-child {
  margin-bottom: 2rem;
}
</style>
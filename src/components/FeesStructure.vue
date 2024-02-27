<template>
  <div class="fees-structure-container">
    <section class="fees-structure-main">
      <NavBar />
      <h1>Fees Structure 2024</h1>
      <BaseButton />
    </section>
    <section>
      <table
        style="width: 90%; border-collapse: collapse; margin-right: 20px"
        border="1"
      >
        <caption>
          Termly Fees Structure
        </caption>
        <thead style="background-color: #81ca00">
          <tr>
            <th style="padding: 10px; text-align: center">Classes</th>
            <th style="padding: 10px; text-align: center">Time</th>
            <th style="padding: 10px; text-align: center">Boarding Fees</th>
            <th style="padding: 10px; text-align: center">Day Fees</th>
            <th style="padding: 10px; text-align: center">Bus (One Way)</th>
            <th style="padding: 10px; text-align: center">Bus (Two Way)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #ddd">
            <td style="padding: 10px">Kindergarten 1-3</td>
            <td style="padding: 10px">7:50 AM – 12:20 PM</td>
            <td style="padding: 10px">$1,490</td>
            <td style="padding: 10px">$590</td>
            <td style="padding: 10px">$100</td>
            <td style="padding: 10px">$200</td>
          </tr>
          <tr>
            <td>Primary 1 - 2</td>
            <td>7:50 AM – 2:50 PM</td>
            <td>$3,750</td>
            <td>$1,550</td>
            <td>$100</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Primary 3 - 5</td>
            <td>7:45 AM – 3:00 PM</td>
            <td>$6,825</td>
            <td>$3,825</td>
            <td>$100</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>Primary 6 - 7</td>
            <td>7:45 AM – 3:00 PM</td>
            <td>$7,455</td>
            <td>$3,455</td>
            <td>$100</td>
            <td>$200</td>
          </tr>
        </tbody>
      </table>
      <table
        style="width: 90%; border-collapse: collapse; margin-right: 20px"
        border="1"
      >
        <caption>
          Fees Structure in Details
        </caption>
        <thead style="background-color: #81ca00">
          <tr>
            <th style="padding: 10px; text-align: center">Particular</th>
            <th style="padding: 10px; text-align: center">Type</th>
            <th style="padding: 10px; text-align: center">Frequency</th>
            <th style="padding: 10px; text-align: center">Payable</th>
            <th style="padding: 10px; text-align: center">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #ddd">
            <td>Registration Fee</td>
            <td>Non-refundable</td>
            <td>One time</td>
            <td>At the time of Registration</td>
            <td>USD 200</td>
          </tr>
          <tr>
            <td>Admission Fee</td>
            <td>Non-refundable</td>
            <td>One time</td>
            <td>At the time of Admission</td>
            <td>USD 200</td>
          </tr>
          <tr>
            <td>Development Fee</td>
            <td>Non-refundable</td>
            <td>Once in a year</td>
            <td>At the time of Admission</td>
            <td>USD 100</td>
          </tr>
          <tr>
            <td>Bus Fee</td>
            <td>Non-refundable</td>
            <td>Once in a term</td>
            <td>At the time of Admission</td>
            <td>USD 100 / USD 200</td>
          </tr>
        </tbody>
      </table>
      <article>
        <h1>Bursaries</h1>
        <p>
          You will doubtless have seen our fee schedule here on the website but
          please be aware that significant support with tuition fees is
          available to families who are paying privately so do please ask us for
          a Bursary application form during your visit
        </p>
      </article>
      <article>
        <h1>Contact US</h1>
        <div class="contact-para">
          <p>
            Again, if you have any queries, please do not hesitate to contact
            us:
          </p>
          <br />
          <p>
            <i class="fa-regular fa-envelope"></i>
            <span class="email">timnahschools@gmail.com</span>
          </p>
          <br />
          <p>
            <i class="fa-thin fa-phone"></i>
            <!-- Font Awesome mobile icon -->
            <span class="phone-number">+256 707549977</span>
            <!-- Phone number -->
          </p>
        </div>
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
    BaseButton,
    NavBar,
    BaseFooter,
  },
};
</script>

<style scoped>
.fees-structure-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/Timimages/fees-structure.jpeg");
  background-size: cover;
  width: 100vw;
  height: 25rem;
}

.fees-structure-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  font-size: 2.5rem;
}
table {
  width: 100vw;
  border-collapse: collapse;
  margin-right: 20px;
  margin-left: 2rem;
  border: 1px solid #ddd;
  border-right: none;
  border-left: none;
}

th,
td {
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  border: none;
}
td {
  border-bottom: 1px solid #ddd;
}
caption {
  font-size: 2.5rem;
  padding: 1rem;
}

article {
  margin: 3rem;
}
article h1 {
  font-size: 1.7rem;
  margin-bottom: 1.2rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
}

article p {
  line-height: 1.5;
}

.contact-para {
  display: block;
}
.phone-number,
.email {
  padding-left: 20px;
}
.fa-phone,
.fa-envelope {
  font-size: 20px;
  color: #81ca00;
}
.icon-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div class="contact-container">
    <section class="contact-main">
      <NavBar />
      <h1>Contacts</h1>
      <BaseButton />
    </section>
    <section class="map">
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.556702681799!2d32.47925254521711!3d0.8403628123133654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177c650f273ec15b%3A0xeeb10586662c0f32!2sTimnah%20Schools%20Luweero!5e0!3m2!1sen!2sug!4v1708585033709!5m2!1sen!2sug"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </p>
    </section>

    <section class="form-section">
      <div class="full-form">
        <div class="form-inputs">
          <h1>Feedback Form</h1>
          <div class="label-input">
            <label for="">Name</label>
            <div
              class="element-inputs"
              :class="{ invalid: nameValidity === 'invalid' }"
            >
              <el-input v-model="name" @blur="nameValidation" clearable />
            </div>
            <p v-if="nameValidity === 'invalid'" class="error-p">
              <i>This field is required</i>
            </p>
          </div>
          <div class="label-input">
            <label for="">Your email</label>
            <div
              class="element-inputs"
              :class="{ invalid: emailValidity === 'invalid' }"
            >
              <el-input v-model="email" @blur="emailValidation" clearable />
            </div>
            <p v-if="emailValidity === 'invalid'" class="error-p">
              <i>This field is required</i>
            </p>
          </div>
          <div class="label-input">
            <label for="">Telephone:</label>
            <div
              class="element-inputs"
              :class="{ invalid: phoneValidity === 'invalid' }"
            >
              <el-input v-model="phone" @blur="phoneValidation" clearable />
            </div>
            <p v-if="phoneValidity === 'invalid'" class="error-p">
              <i>This field is required</i>
            </p>
          </div>
          <div class="label-input">
            <label for="">Subject:</label>
            <div
              class="element-inputs"
              :class="{ invalid: subjectValidity === 'invalid' }"
            >
              <el-input v-model="subject" @blur="subjectValidation" clearable />
            </div>
            <p v-if="subjectValidity === 'invalid'" class="error-p">
              <i>This field is required</i>
            </p>
          </div>
        </div>
        <div class="label-input">
          <label class="message-lebel">Your message</label>
          <div
            class="element-textarea"
            :class="{ invalid: messageValidity === 'invalid' }"
          >
            <el-input
              v-model="message"
              :rows="2"
              type="textarea"
              placeholder="Message"
              @blur="messageValidation"
            />
          </div>
        </div>

        <el-row class="mb-4">
          <el-button type="success" @click="sendEmail" plain>Success</el-button>
        </el-row>
      </div>
      <div class="admin-img">
        <h1>Your Contact</h1>
        <div class="img-text">
          <img
            src="../assets/Timimages/timadministrator.jpeg"
            alt=" timnah adminitrator"
          />
          <article>
            <h3>Head of Admissions</h3>
            <p class="admin-name">Ms. Anonnymous</p>
            <p>
              <i class="fa-thin fa-phone"></i>
              <!-- Font Awesome mobile icon -->
              <span class="phone-number">+256 707549977</span>
              <!-- Phone number -->
            </p>
            <p class="icon-content">
              <i class="fa-regular fa-envelope"></i>
              <span class="email">timnahschools@gmail.com</span>
            </p>
          </article>
        </div>
      </div>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseFooter from "./BaseFooter.vue";
import NavBar from "./NavBar.vue";
import Swal from "sweetalert2";
export default {
  components: { NavBar, BaseButton, BaseFooter },
  data() {
    return {
      name: "",
      nameValidity: "pending",
      email: "",
      emailValidity: "pending",
      phone: "",
      phoneValidity: "pending",
      subject: "",
      subjectValidity: "pending",
      message: "",
      messageValidity: "pending",
    };
  },
  methods: {
    showAlert() {
      Swal.fire({
        title: "Sent",
        text: "Message sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
    showWarningDialog() {
      const result = Swal.fire({
        title: "Check all Fields",
        text: "All fields must be field please",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      if (result.isConfirmed) {
        return "";
      }
    },
    nameValidation() {
      if (this.name.trim() === "") {
        this.nameValidity = "invalid";
      } else {
        this.usernameValidity = "valid";
      }
    },
    emailValidation() {
      if (this.email.trim() === "") {
        this.emailValidity = "invalid";
      } else {
        this.usernameValidity = "valid";
      }
    },
    phoneValidation() {
      if (this.phone.trim() === "") {
        this.phoneValidity = "invalid";
      } else {
        this.phoneValidity = "valid";
      }
    },
    subjectValidation() {
      if (this.subject.trim() === "") {
        this.subjectValidity = "invalid";
      } else {
        this.subjectValidity = "valid";
      }
    },
    messageValidation() {
      if (this.message.trim() === "") {
        this.messageValidity = "invalid";
      } else {
        this.messageValidity = "valid";
      }
    },
    sendEmail() {
      const bodyMessage = `Subject : ${this.subject} <br> Full name : ${this.name} <br> Email : ${this.email} <br> Phone number : ${this.phone} <br> Message : ${this.message}`;
      const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]+$/;
      if (
        this.name.trim() === "" ||
        this.email.trim() === "" ||
        !emailRegex.test(String(this.email).trim().toLowerCase()) ||
        this.phone.trim() === "" ||
        this.subject.trim() === "" ||
        this.message.trim() === ""
      ) {
        this.showWarningDialog();
      } else {
        window.Email.send({
          Host: "smtp.elasticemail.com",
          Username: "resskris3@gmail.com",
          Password: "23E20D9719DA0F651BB7FAFE744A0B3F63D3",
          To: "resskris3@gmail.com",
          From: "resskris3@gmail.com",
          Subject: this.subject,
          Body: bodyMessage,
        })
          .then(() => {
            this.showAlert();
            // Clear input fields
            this.name = "";
            this.email = "";
            this.phone = "";
            this.subject = "";
            this.message = "";
          })
          .catch((error) => {
            console.error("Error sending email:", error);
            this.showAlert(
              "Failed to send email. Please try again later.",
              "error"
            );
          });
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  overflow: hidden;
}

.contact-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/contact-us.jpeg");
  background-size: cover;
  background-position: center 60%;
  width: 100vw;
  height: 25rem;
}

.contact-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  font-size: 2.5rem;
}

/* styling the form */

.form-section {
  background-color: whitesmoke;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 3rem;
}
.form-inputs {
  display: flex;
  flex-direction: column;
  margin: 3rem;
  margin-top: 1rem;
  /* width: 80%; */
}
.form-inputs h1 {
  margin-bottom: 3rem;
}

label {
  margin-bottom: 1rem;
}
.full-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.label-input {
  display: flex;
  flex-direction: column;
}
.message-lebel {
  margin: 5rem 3rem -1.5rem 3rem;
}
.admin-img img {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-top: 1rem;
}
.admin-img h1 {
  margin-top: 1rem;
}

.img-text {
  display: flex;
}

article {
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
}

article h3 {
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: 100;
}
article p {
  padding: 0.5rem;
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
.admin-name {
  font-size: 1.2rem;
  font-weight: 700;
}
.icon-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 12rem;
  padding: 1rem 2.3rem;
  margin: -3rem 1rem 2rem 3rem;
}

.invalid input {
  border: 1px solid red;
}
.error-p {
  color: red;
  font-size: smaller;
  margin: 3px;
}
</style>

<style>
.element-inputs .el-input__inner {
  padding: 15px;
  margin-bottom: 1rem;
}
.element-textarea .el-textarea__inner {
  margin-top: 3rem;
  padding: 10px;
  height: 9rem;
}
</style>
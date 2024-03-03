<template>
  <div class="request-info">
    <section class="request-info-main">
      <NavBar />
      <h1>Admissions: Request Info</h1>
      <BaseButton />
    </section>
    <section class="admission-form">
      <h1>Admissions: Request Info</h1>
      <div class="gridded-content">
        <div class="label-input">
          <label for="">Parent's Name</label>
          <div
            class="element-inputs"
            :class="{ invalid: parentNameValidity === 'invalid' }"
          >
            <el-input
              v-model="parentName"
              @blur="phoneNameValidation"
              clearable
            />
          </div>
          <p v-if="parentNameValidity === 'invalid'" class="error-p">
            <i>This field is required</i>
          </p>
        </div>
        <div class="label-input">
          <label for="">Child's Name</label>
          <div
            class="element-inputs"
            :class="{ invalid: childNameValidity === 'invalid' }"
          >
            <el-input
              v-model="childName"
              @blur="childNameValidation"
              clearable
            />
          </div>
          <p v-if="childNameValidity === 'invalid'" class="error-p">
            <i>This field is required</i>
          </p>
        </div>
      </div>

      <div class="gridded-content">
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
      </div>
      <div class="gridded-content">
        <div class="label-input">
          <label for="">Your Interest in:</label>
          <el-select
            v-model="value"
            clearable
            placeholder="Please choose an option"
            style="width: 240px"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :value="item.value"
            />
          </el-select>
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
        <label class="message-lebel">Your message (optional)</label>
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
        <div class="element-button">
          <el-button @click="sendEmail" type="success" plain>Success</el-button>
        </div>
      </el-row>
    </section>
    <BaseFooter />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import BaseFooter from "./BaseFooter.vue";
import BaseButton from "./BaseButton.vue";
import Swal from "sweetalert2";
export default {
  components: { NavBar, BaseFooter, BaseButton },
  data() {
    return {
      parentName: "",
      parentNameValidity: "pending",
      childName: "",
      childNameValidity: "pending",
      email: "",
      emailValidity: "pending",
      phone: "",
      phoneValidity: "pending",
      levels: "Early Years",
      subject: "",
      subjectValidity: "pending",
      message: "",
      value: "Please choose an option",
      options: [
        {
          value: "Early years",
        },
        {
          value: "Primary section",
        },
      ],
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
    parentsNameValidation() {
      if (this.parentName.trim() === "") {
        this.parentNameValidity = "invalid";
      } else {
        this.parentNameValidity = "valid";
      }
    },
    childNameValidation() {
      if (this.childName.trim() === "") {
        this.childNameValidity = "invalid";
      } else {
        this.childNameValidity = "valid";
      }
    },
    emailValidation() {
      if (this.email.trim() === "") {
        this.emailValidity = "invalid";
      } else {
        this.emailValidity = "valid";
      }
    },
    phoneValidation() {
      if (this.phone.trim() === "") {
        this.phoneValidity = "invalid";
      } else {
        this.phoneValidity = "valid";
      }
    },

    dobValidation() {
      if (this.dob === "") {
        this.dobValidity = "invalid";
      } else {
        this.dobValidity = "valid";
      }
    },
    sendEmail() {
      const bodyMessage = `Subject : ${this.subject}  <br>  Parent's name : ${this.parentName} <br> Child's Name : ${this.childName} <br> Email : ${this.email} <br> Phone number : ${this.phone} <br> Level : ${this.levels}  <br> Message : ${this.message}`;
      const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]+$/;
      if (
        this.parentName.trim() === "" ||
        this.childName.trim() === "" ||
        this.email.trim() === "" ||
        !emailRegex.test(String(this.email).trim().toLowerCase()) ||
        this.phone.trim() === "" ||
        this.levels === "" ||
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
.request-info {
  background-color: whitesmoke;
}
.request-info-main {
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../assets/Timimages/kids-in-class.jpeg");
  background-size: cover;
  background-position: center 50%;
  width: 100vw;
  height: 22rem;
  margin-top: -1rem;
}

.request-info-main h1 {
  position: absolute;
  top: 17rem;
  left: 8rem;
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
  font-size: 2.5rem;
}
.gridded-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
.label-input {
  display: flex;
  flex-direction: column;
}
.admission-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.admission-form h1 {
  margin-bottom: 2rem;
  color: #011b3a;
  font-size: 36px;
}

label {
  margin-bottom: 0.8rem;
}

.invalid input {
  border: 1px solid red;
}
button {
  width: 12rem;
  padding: 1rem 2.3rem;
}
.error-p {
  color: red;
  font-size: smaller;
  margin-top: 6px;
}
.message-lebel {
  text-align: center;
}
button {
  padding: 1rem;
}
</style>

<style>
.element-inputs {
  width: 15rem;
}
.element-inputs .el-select__wrapper {
  padding: 15px;
  margin-bottom: 1rem;
}
.el-select__wrapper {
  padding: 15px;
  margin-bottom: 1rem;
}
.element-textarea .el-textarea__inner {
  margin: 3rem;
  padding: 10px;
  height: 9rem;
  width: 20rem;
}
</style>
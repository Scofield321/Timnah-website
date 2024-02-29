<template>
  <div class="nav-container">
    <section class="navigation" ref="navbar">
      <div class="image-school-name">
        <router-link class="logo-link" to="/">
          <img
            src="https://timnahschools.com/wp-content/uploads/2023/08/Untitled-1-1.png"
            alt="School logo"
          />
        </router-link>
        <div class="school-name-motto">
          <router-link class="logo-link" to="/">
            <h2>
              TIMNAH SCHOOLS <br />
              LUWERO
            </h2>
          </router-link>
          <router-link class="logo-link" to="/">
            <h4>OUR FUTURE BEGINS HERE</h4>
          </router-link>
        </div>
      </div>
      <div class="links">
        <div class="dropdown">
          <router-link to="/" exact active-class="active">Home</router-link>
        </div>
        <div class="dropdown">
          <router-link to="/early-years" exact active-class="active"
            >Curricula</router-link
          >
          <div class="dropdown-content">
            <!-- Dropdown content for Curricula link -->
            <router-link to="/early-years">Early Years</router-link>
            <router-link to="/primary-school">Primary School</router-link>
          </div>
        </div>
        <div class="dropdown">
          <router-link to="/how-to-be-our-student" exact active-class="active"
            >Admissions</router-link
          >
          <div class="dropdown-content">
            <!-- Dropdown content for Curricula link -->
            <router-link to="/how-to-be-our-student"
              >How to Be Our Student</router-link
            >
            <router-link to="/fees-structure">Fees structure</router-link>
            <router-link to="/request-info">Request Info</router-link>
          </div>
        </div>
        <div class="dropdown">
          <router-link to="/how-to-be-our-student" exact active-class="active"
            >Facilities</router-link
          >
          <div class="dropdown-content">
            <!-- Dropdown content for facilities link -->
            <router-link to="/ict">ICT</router-link>
            <router-link to="/Library">Library</router-link>
            <router-link to="/request-info">Drama</router-link>
            <router-link to="/healthy">Healthy</router-link>
            <router-link to="/dormitory">Dormitory</router-link>
            <router-link to="/request-info">Cafeteria</router-link>
          </div>
        </div>
        <div class="dropdown">
          <router-link
            to="/message-from-the-school-principal"
            exact
            active-class="active"
            >About</router-link
          >
          <div class="dropdown-content">
            <!-- Dropdown content for Curricula link -->
            <router-link to="/mission-vision"
              >Our Vision and Mission</router-link
            >
            <router-link to="/message-from-the-school-principal"
              >Message From Principal</router-link
            >
            <router-link to="/school-policies">School Policies</router-link>
          </div>
        </div>
        <div class="dropdown">
          <router-link to="/contact" exact active-class="active"
            >Contact Us</router-link
          >
        </div>
      </div>
    </section>
    <nav :class="{ visible: scrolled }" id="new-navbar">
      <!-- Navbar content -->
      <div class="new-navbar-content">
        <div class="image-school-name">
          <router-link class="logo-link" to="/">
            <img
              src="https://timnahschools.com/wp-content/uploads/2023/08/Untitled-1-1.png"
              alt="School logo"
            />
          </router-link>
          <div class="school-name-motto">
            <h2>
              TIMNAH SCHOOLS <br />
              LUWERO
            </h2>
            <h4>OUR FUTURE BEGINS HERE</h4>
          </div>
        </div>
        <div class="links">
          <div class="dropdown">
            <router-link to="/" exact active-class="active">Home</router-link>
          </div>
          <div class="dropdown">
            <router-link to="/early-years">Curricula</router-link>
            <div class="dropdown-content">
              <!-- Dropdown content for Curricula link -->
              <router-link to="/early-years">Early Years</router-link>
              <router-link to="/primary-school">Primary School</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/how-to-be-our-student" exact active-class="active"
              >Admissions</router-link
            >
            <div class="dropdown-content">
              <!-- Dropdown content for Curricula link -->
              <router-link
                to="/how-to-be-our-student"
                exact
                active-class="active"
                >How to Be Our Student</router-link
              >
              <router-link to="/fees-structure">Fees structure</router-link>
              <router-link to="/request-info">Request Info</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/how-to-be-our-student" exact active-class="active"
              >Facilities</router-link
            >
            <div class="dropdown-content">
              <!-- Dropdown content for facitities link -->
              <router-link to="/ict">ICT</router-link>
              <router-link to="/Library">Library</router-link>
              <router-link to="/request-info">Drama</router-link>
              <router-link to="/healthy">Healthy</router-link>
              <router-link to="/dormitory">Dormitory</router-link>
              <router-link to="/request-info">Cafeteria</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link
              to="message-from-the-school-principal"
              exact
              active-class="active"
              >About</router-link
            >
            <div class="dropdown-content">
              <!-- Dropdown content for Curricula link -->
              <router-link to="/mission-vision"
                >Our Vision and Mission</router-link
              >
              <router-link to="/message-from-the-school-principal"
                >Message From Principal</router-link
              >
              <router-link to="/school-policies">School Policies</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/contact" exact active-class="active"
              >Contact Us</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Call it once to set initial state
  },
  beforeUnmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = this.$refs.navbar;

      // Check if navbar is null or undefined
      if (!navbar) return;

      const navbarRect = navbar.getBoundingClientRect();
      const threshold = navbarRect.bottom;

      // Check if the bottom border of the original navbar is at or above the top edge of the viewport
      this.scrolled = threshold <= 0;

      // Check if the old navbar is completely in view, then hide the new navbar
      if (!this.scrolled && window.scrollY <= navbar.offsetTop) {
        this.scrolled = false;
      }
    },
  },
};
</script>

<style scoped>
.nav-container {
  z-index: 9999;
}
.navigation {
  position: relative;
  width: 95%;
  height: 6.5rem;
  background-color: #d7d6d698;
  top: 4rem;
  left: 1rem;
  right: 1rem;
  padding: 0.5rem;
  z-index: 9999;
  transition: top 0.3s ease-in-out;
  /* opacity: 0.9; */
}
/* New navbar */
#new-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7.5rem;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 1rem;
  display: none;
  z-index: 9999999;
}
.visible {
  display: block !important;
}
.logo-link {
  cursor: pointer;
}
/* Hide original navbar when scrolled */
.image-school-name {
  display: flex;
  gap: 1rem;
}

.school-name-motto {
  display: block;
  margin-top: 1.2rem;
  color: #055228;
}

.school-name-motto h2 {
  font-size: 1.2rem;
  font-weight: 900;
}

.school-name-motto h4 {
  font-size: 0.7rem;
  font-style: italic;
  color: #055228;
  font-weight: 900;
}
a {
  text-decoration: none;
  color: #055228;
}
.navigation,
.new-navbar-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navigation img,
#new-navbar img {
  width: 100px;
  height: auto;
}

.links {
  margin-left: 10rem;
  display: flex;
}

.links a {
  text-decoration: none;
  margin-right: 25px;
  font-size: 1rem;
  color: #055228;
  font-weight: 400;
}
.links a::before {
  content: "";
  position: absolute;
  bottom: -5px; /* Adjust the distance of the line from the link */
  left: 0;
  width: 0;
  height: 2px; /* Adjust the thickness of the line */
  background-color: transparent; /* Change to the color you want */
  transition: width 0.3s ease;
}

.links a:hover::before,
.links a:active::before {
  width: 100% !important;
  background-color: #055228 !important;
}
.links a.active {
  /* Add this line to style the border of the active link */
  width: 100%;
  border: 1.5px solid #055228 !important;
  padding: 10px 20px;
}

.dropdown {
  position: relative;
  margin-right: 20px;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #00aaff;
  width: max-content;
  white-space: nowrap;
  min-width: 160px;
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content a {
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  width: 100%;
}
.dropdown-content a:hover {
  background-color: #81ca00;
}
</style>

<template>
  <a href="https://wa.me/+256707549977"
    ><button class="floating-btn">Admission Ongoing</button></a
  >
</template>

<script>
export default {};
</script>

<style scoped>
button {
  padding: 0.7rem 2.3rem;
  background-color: transparent;
  margin: -3rem 1rem 2rem 3rem;
  text-align: center;
  border: 1px solid #81ca00;
  color: #81ca00;
  border-radius: 5px;
}

button:hover {
  background-color: #81ca00;
  color: #fff;
  border: none;
}
.floating-btn {
  position: fixed;
  top: 90%;
  right: 2rem;
  border-radius: 3rem;
  width: 20rem;
  background-color: #fff;
  border-width: 2px;
  cursor: pointer;
  outline: none;
  animation: beep-border 1s infinite;
  font-size: 1.2rem;
  z-index: 99999;
}

@keyframes beep-border {
  0% {
    border-color: transparent;
  }
  50% {
    border-color: #007bff;
  }
  100% {
    border-color: transparent;
  }
}
</style>
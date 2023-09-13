<script>
import { useAccountStore } from "../stores/account";
export default {
  data() {
    return {
      loggedAccount: useAccountStore(),
    }
  }
}
</script>

<template>
  <div class="about">
    <h3>ABOUT</h3>
    <div class="message">
      <p>This site was made for educational purposes. <br />
        Nothing that you see here is real and every product have a testing purpose. <br />
        No person in database exists in real life. <br />
        Every account has been generated randomly for testing purposes.</p>
    </div>
  </div>
</template>

<style>
.about {
  padding: 10rem;
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

h3 {
  font-family: "Rubik";
  font-weight: 500;
  color: #121212;
  text-decoration: none;
  font-size: 0.8rem;
}

p {
  font-family: "Rubik";
  font-weight: 400;
  color: #121212;
  text-decoration: none;
  font-size: 0.8rem;
}
</style>
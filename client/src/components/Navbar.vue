<script>
import Searchbar from "./Searchbar.vue";
import { useAccountStore } from "../stores/account";

export default {
  props: [],
  data() {
    return {
      loggedAccount: useAccountStore(),
    };
  },
  components: { Searchbar },
};
</script>

<template>
  <div class="navbar">
    <div class="top-bar">
      <h2 class="logo">E-SHOP</h2>
      <div class="top-bar-buttons">
        <button class="top-button" @click="$router.push('/')">HOME</button>
        <button class="top-button" @click="$router.push('/explore')">EXPLORE</button>
        <button
          class="top-button"
          @click="$router.push('/profile')"
          v-if="this.loggedAccount.loggedin"
        >
          {{ this.loggedAccount.first_name.toUpperCase() }}
        </button>
        <button
          class="top-button"
          @click="$router.push('/login')"
          v-if="!this.loggedAccount.loggedin"
        >
          LOG IN
        </button>
        <button
          class="top-button"
          @click="this.loggedAccount.logout()"
          v-else
        >
          LOG OUT
        </button>
        <button class="cart-button" @click="$router.push('/cart')">
          <img src="../assets/cart.png" alt="cart" width="30" height="30" />
        </button>
      </div>
    </div>
    <Searchbar />
  </div>
</template>

<style>
.logo {
  padding-left: 1.5rem;
  font-family: "Rubik";
  font-weight: 500;
  color: #121212;
  text-decoration: none;
  font-size: 1.2rem;
}

.navbar {
  top: 0;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
}

.top-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  border-bottom: 1px solid #121212;
}

.top-bar-buttons {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  padding-left: 1rem;
  gap: 0.5rem;
}

.top-button {
  background-color: white;
  border: none;
  border: 1px solid white;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  font-family: "Rubik";
  margin: 0;
  padding: 0.5rem;
  cursor: pointer;
  transition-duration: 0.2s;
}

.top-button:hover {
  border: none;
  border: 1px solid #121212;
  border-radius: 5px;
}

.cart-button {
  background-color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 0;
  cursor: pointer;
}
</style>

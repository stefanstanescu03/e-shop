<script>
import { useAccountStore } from "../stores/account";

export default {
  data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
      incorrectCredentials: false,
      loggedAccount: useAccountStore(),
    };
  },
  methods: {
    handleLogin: async function () {
      const response = await fetch(
        `http://localhost:3000/accounts?email=${this.enteredEmail}&pswrd=${this.enteredPassword}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const account = await response.json();

      if (account.status === "no match for account") {
        this.incorrectCredentials = true;
      } else {
        this.loggedAccount.login(account[0]);
        this.$router.push('/');
      }
    },
  },
};
</script>

<template>
  <div class="login-page">
    <div class="login-form">
      <h1>LOGIN</h1>
      <h2 class="incorrect-credentials" v-if="this.incorrectCredentials">
        Incorrect credentials
      </h2>
      <div class="credentials">
        <div>
          <label for="email-field">Email</label><br />
          <input
            type="text"
            class="field"
            name="email-field"
            v-model="this.enteredEmail"
          /><br />
        </div>
        <div>
          <label for="password-field">Password</label><br />
          <input
            type="password"
            class="field"
            name="password-field"
            v-model="this.enteredPassword"
          />
        </div>
      </div>
      <button class="continue-button" @click="handleLogin">CONTINUE</button>
    </div>
  </div>
</template>

<style>
h1 {
  font-family: "Rubik";
  font-weight: 700;
  font-size: large;
}

.incorrect-credentials {
  font-family: "Rubik";
  color: red;
  font-weight: 400;
  font-size: small;
}

.login-page {
  display: flex;
  justify-content: center;
}

.login-form {
  display: flex;
  padding: 10rem;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
}

.credentials {
  display: flex;
  font-family: "Rubik";
  flex-direction: column;
  font-size: small;
  gap: 1rem;
}

.field {
  box-sizing: border-box;
  font-family: "Rubik";
  outline: none;
  border: none;
  border: 1px solid #121212;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: medium;
  height: 2.5rem;
  width: 40rem;
}

.continue-button {
  background-color: #121212;
  color: white;
  font-family: "Rubik";
  font-weight: 500;
  border: none;
  display: inline-block;
  margin: 0;
  border-radius: 5px;
  cursor: pointer;
  width: 40rem;
  height: 2.5rem;
}
</style>

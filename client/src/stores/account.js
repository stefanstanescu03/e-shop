import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", {
  state: () => {
    return {
      email: "",
      first_name: "",
      last_name: "",
      id: "",
      loggedin: false,
    };
  },
  actions: {
    login(newAccount) {
      this.email = newAccount.email;
      this.first_name = newAccount.first_name;
      this.last_name = newAccount.last_name;
      this.id = newAccount.id;
      this.loggedin = true;
    },
    logout() {
      this.email = "";
      this.first_name = "";
      this.last_name = "";
      this.id = "";
      this.loggedin = false;
    },
  },
});
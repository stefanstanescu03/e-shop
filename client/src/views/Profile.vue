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
    <div class="profile">
        <div class="info-container">
        <p class="info">
            First Name: {{ this.loggedAccount.first_name }} <br />
            Last Name: {{ this.loggedAccount.last_name }} <br />
            Email: {{ this.loggedAccount.email }} <br />
        </p>
        </div>
    </div>
</template>

<style>
.profile {
    padding-top: 4rem;
}

.info-container {
    left: 0;
    width: auto;
    left: 0;
    display: flex;
    padding-left: 10rem;
    flex-direction: row;
    border-bottom: 1px solid #121212;
}

.info {
    font-family: "Rubik";
    font-weight: 400;
    color: #121212;
    text-decoration: none;
    font-size: 0.8rem;
}
</style>
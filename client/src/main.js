// 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

import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");

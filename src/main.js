import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { worker } from "./mocks/browser";

const app = createApp(App);

worker.start().then();

app.use(router);
app.use(store);

app.mount("#app");

import { createStore } from "vuex";
import user from "./user/user";

export default createStore({
  modules: {
    user,
  },
});

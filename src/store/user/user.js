import router from "../../router";

const state = {
  currentUser: JSON.parse(localStorage.getItem("user")) ?? {},
  isAuth: localStorage.getItem("isAuth") ?? false,
};
const getters = {
  isAuth: (state) => state.isAuth,
  currentUser: (state) => state.currentUser,
};
const mutations = {
  SET_CURRENT_USER(state, { data }) {
    state.currentUser = data;
  },
  SET_AUTH(state, { data }) {
    state.isAuth = data;
    localStorage.setItem("isAuth", data);
  },
  LOGOUT(state) {
    state.currentUser = {};
    state.isAuth = false;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
    router.push("/login").then();
  },
};
const actions = {
  setCurrentUser({ commit }, data) {
    commit("SET_CURRENT_USER", { data });
  },
  setAuth({ commit }, data) {
    commit("SET_AUTH", { data });
  },
  logout({ commit }) {
    commit("LOGOUT");
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

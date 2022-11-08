import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    id: 1,
    userName: null,
    url: "http://localhost:3000/",
    alert: false,
    notification: 6,
  },
  getters: {},
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    },
  },
  actions: {
    async getUser({ commit }) {
      const url = this.state.url + "users?id=" + this.state.id;
      await axios
        .get(url)
        .then((response) => {
          commit("setUserName", response.data[0].name); //добабоать фильтрацию на сервере
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
  },
  modules: {},
});

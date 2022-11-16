import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    id: 0,
    userName: null,
    url: "http://localhost:3000/",
    // alert: false,
    notification: null,
    rateData: null,
    totalAssets: null,
    totalDeposits: null,
    apy: null,
    currentСurrency: null,
    currentTime: "1D",
    diagram: null,
  },
  getters: {},
  mutations: {
    setUserName(state, data) {
      state.userName = data.name;
      state.notification = data.notification;
      state.totalAssets = data.totalAssets;
      state.totalDeposits = data.totalDeposits;
      state.apy = data.apy;
    },
    setRateDate(state, data) {
      state.rateData = data;
    },
    setCurrentСurrency(state, data) {
      state.currentСurrency = data;
    },
    setCurrentTime(state, time) {
      state.currentTime = time;
    },
    setDiagramDate(state, data) {
      state.diagram = data;
    },
  },
  actions: {
    async getUser({ commit }) {
      const url = this.state.url + "users?id=" + this.state.id;
      await axios
        .get(url)
        .then((response) => {
          commit("setUserName", response.data[0]); //добабоать фильтрацию на сервере
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },

    async getRateDate({ commit }) {
      const url = this.state.url + "rate";
      await axios
        .get(url)
        .then((response) => {
          commit("setRateDate", response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },

    changeCurrentСurrency({ commit }, data) {
      commit("setCurrentСurrency", data);
    },

    changeCurrentTime({ commit }, time) {
      commit("setCurrentTime", time);
    },

    async getDiagramData({ commit }) {
      const url = this.state.url + "diagram";
      await axios
        .get(url)
        .then((response) => {
          commit("setDiagramDate", response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },

    createRandomDiagram({ commit }) {
      const arr = [];
      for (let i = 0; i < 30; ++i) {
        const obj = {
          id: null,
          max: null,
          min: null,
          open: null,
          close: null,
        };
        obj.id = i;
        do {
          obj.max = Math.floor(Math.random() * 100);
          obj.min = Math.floor(Math.random() * 100);
        } while (obj.min + obj.max > 70 || obj.max < 20 || obj.min < 20);
        do {
          obj.open = Math.floor(Math.random() * 100);
          obj.close = Math.floor(Math.random() * 100);
          console.log(obj.open, obj.close);
        } while (obj.open + obj.close > 90 || obj.open < 10 || obj.close < 10);
        arr.push(obj);
      }
      commit("setDiagramDate", arr);
    },
  },

  modules: {},
});

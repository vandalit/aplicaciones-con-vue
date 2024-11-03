import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      contador: 0,
    };
  },
  mutations: {
    incrementar(state) {
      state.contador++;
    },
    disminuir(state) {
      state.contador--;
    },
  },
  actions: {
    incrementar({ commit }) {
      commit("incrementar");
    },
    disminuir({ commit }) {
      commit("disminuir");
    },
  },
  getters: {
    contador(state) {
      return state.contador;
    },
  },
});
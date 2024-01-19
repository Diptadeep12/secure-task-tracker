import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const response = await axios.post('YOUR_BACKEND_API/login', {
          username,
          password,
        });

        const { user, token } = response.data;

        commit('setUser', user);
        commit('setToken', token);

      } catch (error) {
        console.error('Login failed', error);
      }
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },
});

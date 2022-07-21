import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
const defaultState = {
  count: 0,
  particlesJson: {},
  theme: 'base',
  company: 'IO0Cg8TEUT'
};
export default createStore({
  plugins: [createPersistedState()],
  state() {
    return defaultState;
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
    },
    switchParticles(state: typeof defaultState, particles) {
      console.log('switchParticles');
      state.particlesJson = particles;
    },
    switchTheme(state: typeof defaultState, theme) {
      console.log('switchTheme');
      state.theme = theme;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment');
    }
  },
  modules: {},
  // 计算属性
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    }
  }
});

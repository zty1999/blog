import { createStore } from 'vuex';

const defaultState = {
  count: 0
};
export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
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

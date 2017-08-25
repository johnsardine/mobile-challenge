import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    postList: [],
    detail: undefined,
  },
  mutations: {
    setPostList(state, list) {
      Vue.set(state, 'postList', list);
    },
  },
  getters: {
    postList({ postList }) {
      return postList;
    },
    getPostById({ postList }) {
      // TODO: If data does not exist, fetch from network before resolving
      return id => new Promise((resolve) => {
        if (postList.length) {
          resolve(postList.find(row => id === row.id));
        }
      });
    },
  },
  actions: {
    fetchPostList({ commit }) {
      fetch('http://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((list) => {
        commit('setPostList', list);
      });
    },
  },
});

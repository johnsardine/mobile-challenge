import Vue from 'vue';
import Vuex from 'vuex';
import { getPostList } from '@/ApiService';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    postList: [],
    authors: [],
    comments: [],
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
    getPostById() {
      return id => getPostList().then(postList => postList.find(row => id === row.id));
    },
  },
  actions: {
    fetchPostList({ commit }) {
      getPostList()
      .then((list) => {
        commit('setPostList', list);
      });
    },
  },
});

export default store;

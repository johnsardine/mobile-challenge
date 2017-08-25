import Vue from 'vue';
import Vuex from 'vuex';
import { getPosts, getAuthors } from '@/ApiService';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, list) {
      Vue.set(state, 'posts', list);
    },
  },
  getters: {
    posts({ posts }) {
      return posts;
    },
    getPostById() {
      return id => getPosts().then(posts => posts.find(row => id === row.id));
    },
    getAuthorById() {
      return id => getAuthors().then(authors => authors.find(row => id === row.id));
    },
  },
  actions: {
    fetchPostList({ commit }) {
      getPosts()
      .then((list) => {
        commit('setPosts', list);
      });
    },
  },
});

export default store;

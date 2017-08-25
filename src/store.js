import Vue from 'vue';
import Vuex from 'vuex';
import { getPosts, getUsers, getComments } from '@/ApiService';

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
      return id => getPosts()
      .then(posts => posts.find(row => id === row.id));
    },
    getUserById() {
      return id => getUsers()
      .then(users => users.find(row => id === row.id));
    },
    getCommentsForPostWithId() {
      return id => getComments()
      .then(comments => comments.filter(row => id === row.postId));
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

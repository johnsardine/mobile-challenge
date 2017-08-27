import Vue from 'vue';
import Vuex from 'vuex';
import { getPosts, getUsers, getComments } from '@/ApiService';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    networkRequestQueue: [],
    posts: [],
  },
  mutations: {
    setPosts(state, list) {
      Vue.set(state, 'posts', list);
    },
    addNetworkRequestInProgress(state, requestIdentifier) {
      state.networkRequestQueue.push(requestIdentifier);
    },
    removeNetworkRequestInProgress(state, requestIdentifier) {
      const networkRequestQueue = state.networkRequestQueue;
      const identifierIndex = networkRequestQueue.indexOf(requestIdentifier);
      state.networkRequestQueue.splice(identifierIndex, 1);
    },
  },
  getters: {
    networkRequestInProgress({ networkRequestQueue }) {
      return networkRequestQueue.length > 0;
    },
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
      commit('addNetworkRequestInProgress', 'getPosts');
      getPosts()
      .then((list) => {
        commit('setPosts', list);
        commit('removeNetworkRequestInProgress', 'getPosts');
      });
    },
  },
});

export default store;

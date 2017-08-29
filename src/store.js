import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import {
  getPosts,
  postsSource,
  getUsers,
  usersSource,
  getComments,
  commentsSource,
} from '@/ApiService';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'umc', // Unbabel Mobile Challenge
      storage: window.localStorage,
    }),
  ],
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
      getPosts()
      .then((list) => {
        commit('setPosts', list);
      });
    },
  },
});

// Notify app of networking operations
postsSource.doBeforeRequest(() => {
  store.commit('addNetworkRequestInProgress', 'getPosts');
});
postsSource.doAfterRequest(() => {
  store.commit('removeNetworkRequestInProgress', 'getPosts');
});
usersSource.doBeforeRequest(() => {
  store.commit('addNetworkRequestInProgress', 'getUsers');
});
usersSource.doAfterRequest(() => {
  store.commit('removeNetworkRequestInProgress', 'getUsers');
});
commentsSource.doBeforeRequest(() => {
  store.commit('addNetworkRequestInProgress', 'getComments');
});
commentsSource.doAfterRequest(() => {
  store.commit('removeNetworkRequestInProgress', 'getComments');
});

export default store;

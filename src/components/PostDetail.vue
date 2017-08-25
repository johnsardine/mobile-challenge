<template>
  <div class="">
    <div><router-link :to="routerHome">View detail</router-link></div>
    <h1>{{ title }}</h1>
    <p>
      {{ body }}
    </p>
    <div>
      This post has <strong>{{ numberOfComments }}</strong> comments
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'PostDetail',
  store,
  props: {
    id: {
      type: [String, Number],
    },
  },
  data() {
    return {
      isLoading: false,
      data: undefined,
      user: undefined,
      comments: undefined,
      routerHome: {
        name: 'PostsList',
      },
    };
  },
  computed: {
    idLabel() {
      return `Beautiful id number ${this.id}`;
    },
    title() {
      return (this.data) ? this.data.title : '';
    },
    body() {
      return (this.data) ? this.data.body : '';
    },
    numberOfComments() {
      return (this.comments) ? this.comments.length : 0;
    },
  },
  methods: {
    async fetchData() {
      const id = parseInt(this.id, 10);
      const { getPostById, getUserById, getCommentsForPostWithId } = this.$store.getters;
      let userId;
      let post;
      let postId;

      this.isLoading = true;

      // TODO: Improve flow here
      // TODO: Improve error handling. If post fails, what's the best way

      try {
        post = await getPostById(id);
        postId = post.id;
        userId = post.userId;
        this.$set(this, 'data', post);
      } catch (e) {
        console.error('Could not get post with id %s', userId, e);
      }

      try {
        const user = await getUserById(userId);
        this.$set(this, 'user', user);
      } catch (e) {
        console.error('Could not get author with id %s', userId, e);
      }

      try {
        const comments = await getCommentsForPostWithId(postId);
        this.$set(this, 'comments', comments);
      } catch (e) {
        console.error('Could not get comments for post with id %s', postId, e);
      }

      this.isLoading = false;
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData',
  },
};
</script>

<style>
</style>

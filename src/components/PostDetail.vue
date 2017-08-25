<template>
  <div class="">
    <div><router-link :to="routerHome">View detail</router-link></div>
    <h1>{{ title }}</h1>
    <div>
      {{ body }}
    </div>
    {{ data }}
    {{ user }}
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
  },
  methods: {
    async fetchData() {
      const id = parseInt(this.id, 10);
      const { getPostById, getUserById } = this.$store.getters;
      this.isLoading = true;

      const post = await getPostById(id);
      this.$set(this, 'data', post);
      const { userId } = post;

      try {
        const user = await getUserById(userId);
        this.$set(this, 'user', user);
      } catch (e) {
        console.error('Could not get author with id %s', userId, e);
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

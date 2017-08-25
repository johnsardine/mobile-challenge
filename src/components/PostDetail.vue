<template>
  <div class="">
    <div><router-link :to="routerHome">View detail</router-link></div>
    <h1>{{ title }}</h1>
    <div>
      {{ body }}
    </div>
    {{ data }}
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
      author: undefined,
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
      const { getPostById } = this.$store.getters;
      this.isLoading = true;
      const data = await getPostById(id);
      this.$set(this, 'data', data);
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

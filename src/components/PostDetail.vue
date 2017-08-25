<template>
  <div class="">
    Detail
    {{ id }}
    {{ idLabel }}
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
      type: String,
    },
  },
  data() {
    return {
      data: undefined,
    };
  },
  computed: {
    idLabel() {
      return `Beautiful id number ${this.id}`;
    },
  },
  methods: {
    fetchData() {
      const id = parseInt(this.id, 10);
      this.$store.getters.getPostById(id).then((data) => {
        console.log('data', data);
        this.$set(this, 'data', data);
      });
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

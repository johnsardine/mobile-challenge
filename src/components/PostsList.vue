<template>
  <ul class="PostsList">
    <PostsListCell v-for="row in list" :key="row.id" :data="row" />
  </ul>
</template>

<script>
import store from '@/store';
import PostsListCell from '@/components/PostsListCell';

export default {
  name: 'PostsList',
  store,
  components: {
    PostsListCell,
  },
  data() {
    return {
    };
  },
  computed: {
    list() {
      const { posts } = this.$store.getters;
      return posts;
    },
  },
};
</script>

<style>
.PostsList {
  padding: 0;
  list-style: none;
  margin: 0;
}
.PostsList > li {
  border-top: 1px solid #ccc;
}
.PostsList > li:first-child {
  border-top: 0;
}
</style>

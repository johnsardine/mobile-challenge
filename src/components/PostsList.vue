<template>
  <div>
    <ul class="PostsList">
      <PostsListCell v-for="row in list" :key="row.id" :data="row" />
    </ul>
  </div>
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
      return this.$store.getters.postList;
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
</style>

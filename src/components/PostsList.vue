<template>
  <div class="">
    <TableView :data="list" />
  </div>
</template>

<script>
import TableView from '@/components/TableView';

export default {
  name: 'PostsList',
  components: {
    TableView,
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

<style lang="css">
</style>

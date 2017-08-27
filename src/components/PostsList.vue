<template>
  <div class="PostsList">
    <TableView :data="list" @didClickCell="didClickCell" />
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
  methods: {
    didClickCell(data) {
      const goToRouteParams = {
        name: 'PostDetail',
        params: {
          id: data.id,
        },
      };
      this.$router.push(goToRouteParams);
    },
  },
};
</script>

<style lang="css">
</style>

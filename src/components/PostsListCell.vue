<template>
  <li class="PostsListCell">
    <div>{{ label }}</div>
    <div><router-link :to="routerLinkObject">View detail &gt;</router-link></div>
  </li>
</template>

<script>
export default {
  name: 'PostsListCell',
  props: {
    data: {
      type: Object,
    },
  },
  computed: {
    label() {
      return this.data.title;
    },
    routerLinkObject() {
      return {
        name: 'PostDetail',
        params: {
          id: this.data.id,
        },
      };
    },
  },
};
</script>

<style>
.PostsListCell {
  padding: 10px;
}
.PostsListCell a {
  text-decoration: none;
  color: currentColor;
  font-weight: bold;
}
</style>

<template>
  <li class="TableViewCell">
    <div>{{ label }}</div>
    <div><router-link :to="routerLinkObject">View detail &gt;</router-link></div>
  </li>
</template>

<script>
export default {
  name: 'TableViewCell',
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

<style lang="scss">
.TableViewCell {
  padding: 10px;

  a {
    text-decoration: none;
    color: currentColor;
    font-weight: bold;
  }
}
</style>

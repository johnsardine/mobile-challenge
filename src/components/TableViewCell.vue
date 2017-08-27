<template>
  <li class="TableViewCell" @click="didClickCell">
    <div>{{ label }}</div>
    <div>View detail &gt;</div>
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
  },
  methods: {
    didClickCell() {
      this.$emit('didClickCell', this.data);
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

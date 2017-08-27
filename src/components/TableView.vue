<template>
  <ul class="TableView">
    <TableViewCell v-for="row in list"
    :key="row.id"
    :data="row"
    @didClickCell="didClickCell" />
  </ul>
</template>

<script>
import TableViewCell from '@/components/TableViewCell';

export default {
  name: 'TableView',
  components: {
    TableViewCell,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
    };
  },
  computed: {
    list() {
      return this.data;
    },
  },
  methods: {
    didClickCell(data, $event) {
      // Propagate event up
      this.$emit('didClickCell', data, $event);
    },
  },
};
</script>

<style lang="scss">
.TableView {
  padding: 0;
  list-style: none;
  margin: 0;

  & > li {
    border-top: 1px solid #ccc;
  }
  & > li:first-child {
    border-top: 0;
  }
}

</style>

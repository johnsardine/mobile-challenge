<template>
  <li class="TableViewCell" @click="didClickCell($event)">
    <div class="TableViewCell__content">
      <div class="TableViewCell__label">{{ label }}</div>
    </div>
    <div class="TableViewCell__accessories">
      <div class="TableViewCell__button-disclosure UiButtonForward"><span class="UiButton__label">View Detail</span></div>
    </div>
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
    didClickCell($event) {
      this.$emit('didClickCell', this.data, $event);
    },
  },
};
</script>

<style lang="scss">
.TableViewCell {
  display: flex;
  padding: 10px;

  // Content
  &__content {
    flex-grow: 1;
  }
  &__label {
    font-weight: bold;
    text-transform: capitalize;
  }

  // Accessory
  &__accessories {
    flex-shrink: 0;
    margin-left: 10px;
  }

  &__button-disclosure {
  }

  a {
    text-decoration: none;
    color: currentColor;
    font-weight: bold;
  }
}
</style>

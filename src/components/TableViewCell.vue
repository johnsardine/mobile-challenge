<template>
  <li class="TableViewCell" @click="didClickCell($event)">
    <div class="TableViewCell__content">
      <div class="TableViewCell__label">{{ label }}</div>
    </div>
    <div class="TableViewCell__accessories">
      <div class="TableViewCell__button-disclosure"></div>
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
  }

  &__button-disclosure {
    width: 15px;
    mask-image: url('~@/assets/accessory-button-right.svg');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: currentColor;

    &::before {
      content: ' ';
      display: inline-block;
    }
  }

  a {
    text-decoration: none;
    color: currentColor;
    font-weight: bold;
  }
}
</style>

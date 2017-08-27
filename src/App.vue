<template>
<div id="app">
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: undefined,
    };
  },
  watch: {
    $route: function handleRouteTransition(to, from) {
      console.log('Route', to, from);
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
};
</script>

<style lang="scss">
@import "~@/UiButton.scss";

body {
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.slide-left,
.slide-right {
  &-enter,
  &-leave {
    &-active {
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      transition-property: opacity, transform;
    }
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-to,
  &-leave-to {
    position: absolute;
  }
}
.slide-left {
  &-enter {
    transform: translateX(100%);
  }
  &-enter-to,
  &-leave {
    transform: translateX(0%);
  }
  &-leave-to {
    transform: translateX(-100%);
  }
}
.slide-right {
  &-enter {
    transform: translateX(-100%);
  }
  &-enter-to,
  &-leave {
    transform: translateX(0%);
  }
  &-leave-to {
    transform: translateX(100%);
  }
}
</style>

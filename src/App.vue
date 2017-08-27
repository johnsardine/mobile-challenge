<template>
<div id="app">
  <div :class="networkInProgressClassObject">Loading…</div>
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
  computed: {
    networkRequestInProgress() {
      return this.$store.getters.networkRequestInProgress;
    },
    networkInProgressClassObject() {
      return {
        NetworkStatus: true,
        'NetworkStatus--in-progress': this.networkRequestInProgress,
      };
    },
  },
  watch: {
    $route: function handleRouteTransition(to, from) {
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

@keyframes TaskSelectorLoader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.NetworkStatus {
  $spacing: 10px;
  $innerSpacing: 10px;
  display: flex;
  position: fixed;
  top: $spacing;
  left: $spacing;
  right: $spacing;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  padding: $innerSpacing;
  box-shadow: 0 0px 5px rgba(0,0,0,0.2);
  transition: 0.3s ease-in-out opacity;
  background-color: whitesmoke;

  &::before {
    $size: 22px;
    content: '';
    display: inline-block;
    width: $size;
    height: $size;
    box-sizing: border-box;
    border-width: 2px;
    border-radius: 50%;
    border-style: solid;
    border-color: currentColor;
    border-right-color: transparent;
    border-right-style: dashed;
    animation: TaskSelectorLoader 1s infinite;
    margin-right: 10px;
  }

  &--in-progress {
    opacity: 1;
  }
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

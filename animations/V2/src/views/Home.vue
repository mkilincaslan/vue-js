<template>
  <div class="home">
    <transition name="toast">
      <Toast v-if="showToast" />
    </transition>
    <Todos @badValue="triggerToast" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Toast from '../components/Toast'
import Todos from '../components/Todos'

export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return { showToast, triggerToast }
  }
}
</script>

<style>
  /* Since keyframes implemented enter-from and enter-to are not necessary
  .toast-enter-from {
    opacity: 0;
    transform: translateY(-60px);
  } */
  /* .toast-enter-to {
    opacity: 1;
    transform: translateY(0);
  } 
  */
  .toast-enter-active {
    animation: wobble 0.5s ease;
  }

  /* This is a default not need to define
  .toast-leave-from {
    opacity: 1;
    transform: translateY(0);
  } */
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-60px);
  }
  .toast-leave-active {
    transition: all 0.5s ease;
  }

  @keyframes wobble {
    0% {
      transform: translateY(-60px);
      opacity: 0;
    }
    50% {
      transform: translateY(0);
      opacity: 1;
    }
    60% { transform: translateX(4px); }
    70% { transform: translateX(-4px); }
    80% { transform: translateX(2px); }
    90% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
</style>
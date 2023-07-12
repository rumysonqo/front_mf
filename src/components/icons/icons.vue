<script setup>
import { computed } from 'vue';
import icons from '../helpers/icons';

const props = defineProps({
  name: {
    type: String,
    required: true,
  }
});

const path = computed(() => icons[props.name]);

</script>

<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    fill="currentColor">
    <path :d="path" />
  </svg>  
</template>

<style scoped>
.icon {
  width: 100%;
  height: 100%;
  stroke-width: 2;
}
</style>
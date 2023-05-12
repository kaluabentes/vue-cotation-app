<script setup lang="ts">
import { computed } from 'vue'

interface SkeletonProps {
  size: 'small' | 'medium' | 'large'
}

const props = defineProps<SkeletonProps>()

const classNames = computed(() => ({
  skeleton: true,
  'skeleton--small': props.size === 'small',
  'skeleton--medium': props.size === 'medium',
  'skeleton--large': props.size === 'large'
}))
</script>

<template>
  <div :class="classNames" />
</template>

<style scoped>
.skeleton {
  height: 10px;
  width: 100%;
  background: gray;
  animation: 0.8s linear 0s infinite alternate none running shine;
  animation-fill-mode: forwards;
  border-radius: 2px;
}

.skeleton--small {
  width: 100px;
}

.skeleton--medium {
  width: 300px;
}

.skeleton--large {
  width: 500px;
}

@keyframes shine {
  from {
    background: #edf2f7;
  }

  to {
    background: #a0aec0;
  }
}
</style>

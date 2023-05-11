<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  variant: 'default' | 'link'
  size: 'default' | 'small'
}

const emit = defineEmits(['onClick'])
const props = defineProps<ButtonProps>()

const classNames = computed(() => ({
  button: true,
  'button--link': props.variant === 'link',
  'button--small': props.size === 'small'
}))
</script>

<template>
  <button :class="classNames" @click="$emit('onClick')"><slot /></button>
</template>

<style scoped>
.button {
  padding: 0 1rem;
  height: 2.5rem;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  background: #004eff;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 200ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;

  &:hover {
    background: #0014ff;
  }
}

.button--small {
  height: 2rem;
  font-size: 14px;
  padding: 0 0.75rem;
}

.button--link {
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  color: #004eff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: none;
  display: inline-block;
  padding: 0;
  width: initial;

  &:hover {
    text-decoration: underline;
    background: transparent;
  }
}
</style>

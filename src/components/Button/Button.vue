<script setup lang="ts">
const emit = defineEmits(['onClick'])
</script>

<template>
  <button class="button" @click="$emit('onClick')"><slot /></button>
</template>

<style scoped>
.button {
  padding: 0 1rem;
  height: 2.5rem;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  background: #3182ce;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 200ms;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;

  &:hover {
    background: #2b6cb0;
  }
}
</style>

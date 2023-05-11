<script setup lang="ts">
const emit = defineEmits(['onClick'])
</script>

<template>
  <button class="button" @click="$emit('onClick')"><slot /></button>
</template>

<style scoped>
.button {
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  color: #004eff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}
</style>

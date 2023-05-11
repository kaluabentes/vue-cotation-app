<script setup lang="ts">
interface TextFieldProps {
  label: string
  error: string
  placeholder: string
  modelValue: string
}

defineProps<TextFieldProps>()
</script>

<template>
  <div class="text-field__container">
    <label class="text-field__label">{{ label }}</label>
    <input
      class="text-field__input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p class="text-field__error">{{ error }}</p>
  </div>
</template>

<style scoped>
.text-field__container {
  display: flex;
  flex-direction: column;
}

.text-field__label {
  font-weight: 600;
  margin-bottom: 8px;
}

.text-field__input {
  outline: none;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid rgb(226, 232, 240);
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  margin-bottom: 8px;

  &:focus {
    outline: 2px solid blue;
  }
}

.text-field__error {
  font-size: 14px;
  color: red;
  margin: 0;
}
</style>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle/PageTitle.vue'

interface AuthLayoutProps {
  title: string
}

const props = defineProps<AuthLayoutProps>()
</script>

<template>
  <div class="signin__container">
    <main class="signin__box">
      <PageTitle>{{ title }}</PageTitle>
      <div class="signin__controls">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.signin__container {
  height: 100vh;
  width: 100%;
  background: #9ee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin__box {
  padding: 16px;
  width: 100%;
  max-width: 500px;
  background: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  padding-top: 60px;

  @media (min-width: 769px) {
    padding: 32px;
    height: initial;
    position: initial;
  }
}

.signin__controls {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

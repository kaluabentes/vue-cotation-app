<script setup lang="ts">
import PageTitle from '@/components/PageTitle/PageTitle.vue'
</script>

<template>
  <div class="dashboard__container">
    <main class="dashboard__box"><PageTitle>Dashboard</PageTitle></main>
  </div>
</template>

<style scoped>
.dashboard__container {
  height: 100vh;
  width: 100%;
  background: #9ee;
}

.dashboard__box {
  max-width: 1024px;
  margin: 0 auto;
}
</style>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle/PageTitle.vue'
import QuotationCard from '@/components/QuotationCard/QuotationCard.vue'
</script>

<template>
  <div class="dashboard__container">
    <main class="dashboard__box">
      <PageTitle>Dashboard</PageTitle>
      <h2 class="dashboard__quotations-title">Cotações</h2>
      <div class="dashboard__quotations">
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
        <QuotationCard />
      </div>
    </main>
  </div>
</template>

<style scoped>
.dashboard__quotations-title {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #777;
}

.dashboard__container {
  height: 100vh;
  width: 100%;
  background: #9ee;
}

.dashboard__box {
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
}

.dashboard__quotations {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>

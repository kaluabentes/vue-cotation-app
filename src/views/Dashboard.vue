<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import PageTitle from '@/components/PageTitle/PageTitle.vue'
import QuotationCard from '@/components/QuotationCard/QuotationCard.vue'
import useAuth from '@/modules/auth/composables/auth'

const { user, isLoading } = useAuth()

const quotations = [
  {
    id: 1,
    variation: -0.043,
    price: 4.49,
    name: 'USD DÓLAR / BRL REAL'
  },
  {
    id: 2,
    variation: 0.043,
    price: 5.49,
    name: 'USD DÓLAR / BRL REAL'
  },
  {
    id: 3,
    variation: -0.043,
    price: 4.49,
    name: 'USD DÓLAR / BRL REAL'
  },
  {
    id: 4,
    variation: -0.043,
    price: 4.49,
    name: 'USD DÓLAR / BRL REAL'
  },
  {
    id: 5,
    variation: -0.043,
    price: 4.49,
    name: 'USD DÓLAR / BRL REAL'
  }
]
</script>

<template>
  <div class="dashboard__container">
    <article class="dashboard__box">
      <header class="dashboard__header">
        <PageTitle>Dashboard</PageTitle>
        <div class="dashboard__header-user-details">
          <p>Olá, {{ user.name }}</p>
          <Button variant="link" size="small">Sair</Button>
        </div>
      </header>
      <h2 class="dashboard__quotations-title">Cotações</h2>
      <main class="dashboard__quotations">
        <template v-for="quotation in quotations" :key="quotation.id">
          <QuotationCard
            :variation="quotation.variation"
            :price="quotation.price"
            :name="quotation.name"
          />
        </template>
      </main>
    </article>
  </div>
</template>

<style scoped>
.dashboard__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 32px;

  & h1 {
    margin: 0;
  }

  & button {
    max-width: 142px;
  }
}

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
  overflow: auto;
}

.dashboard__box {
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px;
}

.dashboard__quotations {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.dashboard__header-user-details {
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 2px;

  & p {
    margin: 0;
    font-weight: 500;
    color: #444;
    font-size: 14px;
  }
}
</style>

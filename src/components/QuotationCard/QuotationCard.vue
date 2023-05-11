<script setup lang="ts">
import { computed } from 'vue'

interface QuotationCardProps {
  variation: number
  price: number
  name: string
}

const props = defineProps<QuotationCardProps>()

const badgeVariantClass = computed(() => ({
  'quotation-card__badge': true,
  'quotation-card__badge--danger': props.variation < 0,
  'quotation-card__badge--success': props.variation > 0
}))
</script>

<template>
  <div class="quotation-card">
    <div :class="badgeVariantClass">{{ variation }}</div>
    <p class="quotation-card__price">R$ {{ price.toLocaleString('pt-BR') }}</p>
    <p class="quotation-card__name">{{ name }}</p>
  </div>
</template>

<style scoped>
.quotation-card {
  background: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.quotation-card__badge {
  font-weight: 600;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 10px;
}

.quotation-card__badge--success {
  background: orange;
  color: #fff;
}

.quotation-card__badge--danger {
  background: red;
  color: #fff;
}

.quotation-card__price {
  margin: 0;
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 600;
  color: #444;
}

.quotation-card__name {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  color: #777;
}
</style>

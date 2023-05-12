<script setup lang="ts">
import { computed, ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import Skeleton from '@/components/Skeleton/Skeleton.vue'
import formatCurrency from '@/lib/utils/number/formatCurrency'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface QuotationCardProps {
  priceLocale?: string
  isLoading?: boolean
  variation?: number
  price?: number
  name?: string
  currency?: string
}

const props = defineProps<QuotationCardProps>()

const isChartOpen = ref(false)

const chartData = computed(() => ({
  labels: ['Início', 'Fim'],
  datasets: [
    {
      label: 'Evolução',
      data: [0, Number(props.variation)],
      fill: false,
      borderColor: props.variation && props.variation > 0 ? '#004eff' : 'red',
      tension: 0.1
    }
  ]
}))

const chartOptions = {
  responsive: true
}

const badgeClassNames = computed(() => ({
  'quotation-card__badge': true,
  'quotation-card__badge--danger': props.variation && props.variation < 0,
  'quotation-card__badge--success': props.variation && props.variation > 0,
  'quotation-card__badge--info': props.variation === 0
}))

const chartClassNames = computed(() => ({
  'quotation-card__chart': true,
  'quotation-card__chart--open': isChartOpen.value
}))

const chartButtonClassNames = computed(() => ({
  'quotation-card__chart-button': true,
  'quotation-card__chart-button--active': isChartOpen.value
}))

const handleChartToggle = () => {
  isChartOpen.value = !isChartOpen.value
}
</script>

<template>
  <div class="quotation-card">
    <div class="quotation-card__header">
      <div class="quotation-card__content">
        <template v-if="isLoading">
          <Skeleton size="small" />
          <Skeleton size="large" />
          <Skeleton size="medium" />
        </template>
        <template v-else>
          <div :class="badgeClassNames">{{ variation }}</div>
          <p class="quotation-card__price" v-if="price">
            {{ formatCurrency(price, priceLocale, currency) }}
          </p>
          <p class="quotation-card__name" v-if="name">{{ name }}</p>
        </template>
      </div>
      <button v-if="!isLoading" :class="chartButtonClassNames" @click="handleChartToggle">
        <v-icon name="fa-chart-line" />
      </button>
    </div>
    <div v-if="!isLoading && isChartOpen" :class="chartClassNames">
      <Line :options="chartOptions" :data="chartData" />
    </div>
  </div>
</template>

<style scoped>
.quotation-card {
  background: #fff;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  padding: 16px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
  }
}

.quotation-card__header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
}

.quotation-card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  align-items: start;
  width: 100%;
}

.quotation-card__badge {
  font-weight: 600;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
}

.quotation-card__badge--success {
  background: orange;
  color: #fff;
}

.quotation-card__badge--danger {
  background: red;
  color: #fff;
}

.quotation-card__badge--info {
  color: #fff;
  background: #004eff;
}

.quotation-card__price {
  margin: 0;
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

.quotation-card__chart {
  width: 100%;
  position: relative;
  padding: 10px 0 0 0;
  opacity: 0;
  visibility: hidden;
  transition: 200ms;
  height: 0;
  overflow: hidden;

  & canvas {
    width: 100% !important;
  }
}

.quotation-card__chart--open {
  opacity: 1;
  visibility: visible;
  height: initial;
}

.quotation-card__chart-button {
  min-height: 40px;
  min-width: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px 0;
  cursor: pointer;
  color: #888;

  &:hover,
  &:focus {
    border: 2px solid #004eff;
  }
}

.quotation-card__chart-button--active {
  background: #004eff;
  color: white;
}
</style>

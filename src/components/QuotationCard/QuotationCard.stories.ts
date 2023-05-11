import type { Meta, StoryObj } from '@storybook/vue3'

import QuotationCard from './QuotationCard.vue'

const meta = {
  title: 'components/QuotationCard',
  component: QuotationCard,
  tags: ['autodocs']
} satisfies Meta<typeof QuotationCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variation: -0.042,
    price: 4.94,
    name: 'USD DÓLAR / BRL REAL'
  }
}

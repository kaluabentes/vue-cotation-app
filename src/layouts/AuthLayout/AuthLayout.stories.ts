import type { Meta, StoryObj } from '@storybook/vue3'

import AuthLayout from './AuthLayout.vue'

const meta = {
  title: 'layouts/AuthLayout',
  component: AuthLayout,
  tags: ['autodocs']
} satisfies Meta<typeof AuthLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Auth Layout'
  }
}

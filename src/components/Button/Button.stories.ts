import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

const meta = {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Confirmar'
  }
}

export const Link: Story = {
  args: {
    default: 'Confirmar',
    variant: 'link'
  }
}

export const Small: Story = {
  args: {
    default: 'Confirmar',
    size: 'small'
  }
}

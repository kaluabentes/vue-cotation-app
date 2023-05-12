import type { Meta, StoryObj } from '@storybook/vue3'

import Skeleton from './Skeleton.vue'

const meta = {
  title: 'components/Skeleton',
  component: Skeleton,
  tags: ['autodocs']
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Confirmar'
  }
}

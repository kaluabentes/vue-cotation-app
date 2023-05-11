import type { Meta, StoryObj } from '@storybook/vue3'

import PageTitle from './PageTitle.vue'

const meta = {
  title: 'components/PageTitle',
  component: PageTitle,
  tags: ['autodocs']
} satisfies Meta<typeof PageTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Confirmar'
  }
}

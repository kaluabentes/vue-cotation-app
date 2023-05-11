import type { Meta, StoryObj } from '@storybook/vue3'

import LinkButton from './LinkButton.vue'

const meta = {
  title: 'components/LinkButton',
  component: LinkButton,
  tags: ['autodocs']
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    default: 'Confirmar'
  }
}

import type { Meta, StoryObj } from '@storybook/vue3'

import TextField from './TextField.vue'

const meta = {
  title: 'components/TextField',
  component: TextField,
  tags: ['autodocs']
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'E-mail',
    placeholder: 'Digite seu email',
    error: 'Digite um email válido'
  }
}

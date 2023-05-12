import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from './Button.vue'

describe('Button', () => {
  it('renders properly default slot', () => {
    const wrapper = mount(Button, { props: { default: 'Confirmar' } })
    expect(wrapper.html()).toContain('Confirmar')
  })

  it('renders properly small size', () => {
    const wrapper = mount(Button, { props: { size: 'small' } })
    expect(wrapper.classes('button--small')).toBe(true)
  })

  it('renders properly link variant', () => {
    const wrapper = mount(Button, { props: { variant: 'link' } })
    expect(wrapper.classes('button--link')).toBe(true)
  })

  it('execute onClick event', async () => {
    const onClick = vi.fn()
    const wrapper = mount(Button, { props: { onClick } })

    await wrapper.trigger('click')

    expect(onClick).toHaveBeenCalled()
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'

import Button from './Button.vue'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, { props: { default: 'Confirmar' } })
    expect(wrapper.html()).toContain('Confirmar')
  })

  it('sets small size', () => {
    const wrapper = mount(Button, { props: { size: 'small' } })
    expect(wrapper.classes('button--small')).toBe(true)
  })

  it('sets link variant', () => {
    const wrapper = mount(Button, { props: { variant: 'link' } })
    expect(wrapper.classes('button--link')).toBe(true)
  })

  it('clicks', async () => {
    const onClick = sinon.stub()
    const wrapper = mount(Button, { props: { onClick } })

    await wrapper.trigger('click')

    expect(onClick.called).toBe(true)
  })
})

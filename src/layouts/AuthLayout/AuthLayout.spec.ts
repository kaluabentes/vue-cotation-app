import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AuthLayout from './AuthLayout.vue'

describe('AuthLayout', () => {
  it('renders properly', () => {
    const wrapper = mount(AuthLayout, {
      props: { title: 'Dashboard' }
    })
    const title = wrapper.find('.page-title').text()

    expect(title).toBe('Dashboard')
  })
})

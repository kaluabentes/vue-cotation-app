import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import PageTitle from './PageTitle.vue'

describe('PageTitle', () => {
  it('renders properly', () => {
    const wrapper = mount(PageTitle, { props: { default: 'Title' } })
    expect(wrapper.html()).toContain('Title')
  })
})

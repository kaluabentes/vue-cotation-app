import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Skeleton from './Skeleton.vue'

describe('Skeleton', () => {
  it('renders properly small', () => {
    const wrapper = shallowMount(Skeleton, {
      props: { size: 'small' }
    })

    expect(wrapper.classes('skeleton--small')).toBe(true)
  })

  it('renders properly medium', () => {
    const wrapper = shallowMount(Skeleton, {
      props: { size: 'medium' }
    })

    expect(wrapper.classes('skeleton--medium')).toBe(true)
  })

  it('renders properly large', () => {
    const wrapper = shallowMount(Skeleton, {
      props: { size: 'large' }
    })

    expect(wrapper.classes('skeleton--large')).toBe(true)
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TextField from './TextField.vue'
import { VueNode } from '@vue/test-utils/dist/types'

describe('TextField', () => {
  it('renders properly', () => {
    const wrapper = mount(TextField, {
      props: { label: 'Email', error: 'Error', type: 'text', placeholder: 'Digite seu email' }
    })
    const label = wrapper.find('.text-field__label').text()
    const input = wrapper.find('.text-field__input').element as VueNode<HTMLInputElement>
    const error = wrapper.find('.text-field__error').text()

    expect(label).toBe('Email')
    expect(error).toBe('Error')
    expect(input.type).toBe('text')
    expect(input.placeholder).toBe('Digite seu email')
  })

  it('changes correctly', async () => {
    const wrapper = mount(TextField)
    const input = wrapper.find('.text-field__input')
    const inputElement = input.element as VueNode<HTMLInputElement>

    await input.setValue('kaluanbentes@gmail.com')

    expect(inputElement.value).toBe('kaluanbentes@gmail.com')
  })
})

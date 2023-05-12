import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'

import QuotationCard from './QuotationCard.vue'

describe('QuotationCard', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(QuotationCard, {
      props: { variation: 0.045, name: 'Dolar', price: 50.5, priceLocale: 'pt-BR', currency: 'BRL' }
    })

    const variation = wrapper.find('.quotation-card__badge').text()
    const name = wrapper.find('.quotation-card__name').text()
    const price = wrapper.find('.quotation-card__price').text()

    expect(variation).toBe('0.045')
    expect(name).toBe('Dolar')
    expect(price.replace(/\s/g, ' ')).toBe('R$ 50,50')
  })

  it('toggles chart', async () => {
    const wrapper = shallowMount(QuotationCard, {
      props: { variation: 0.045, name: 'Dolar', price: 50.5, priceLocale: 'pt-BR', currency: 'BRL' }
    })
    const button = wrapper.find('.quotation-card__chart-button')

    await button.trigger('click')

    const chart = wrapper.find('.quotation-card__chart')

    expect(chart.isVisible()).toBe(true)
  })
})

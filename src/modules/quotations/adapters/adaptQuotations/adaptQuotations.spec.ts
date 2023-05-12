import { describe, it, expect } from 'vitest'

import adaptQuotations from './adaptQuotations'

const testData = {
  by: 'default',
  valid_key: true,
  results: {
    currencies: {
      USD: { name: 'Dollar', buy: 4.9309, sell: 4.9309, variation: 0.0 }
    },
    bitcoin: {
      blockchain_info: {
        name: 'Blockchain.info',
        format: ['USD', 'en_US'],
        last: 26905.1,
        buy: 26905.1,
        sell: 26905.1,
        variation: -0.427
      }
    }
  }
}

describe('adaptQuotations', () => {
  it('should work properly', () => {
    const result = adaptQuotations(testData)

    console.log('result', result)

    expect(result[0].name).toBe('USD Dollar / BRL REAL')
    expect(result[0].variation).toBe(0)
    expect(result[0].price).toBe(4.9309)
    expect(result[0].priceLocale).toBe('pt-BR')
    expect(result[0].currency).toBe('BRL')

    expect(result[1].name).toBe('Blockchain.info / USD Dólar')
    expect(result[1].variation).toBe(-0.427)
    expect(result[1].price).toBe(26905.1)
    expect(result[1].priceLocale).toBe('en-US')
    expect(result[1].currency).toBe('USD')
  })
})

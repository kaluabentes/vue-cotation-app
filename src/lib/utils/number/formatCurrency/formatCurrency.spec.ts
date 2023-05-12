import { describe, it, expect } from 'vitest'

import formatCurrency from '.'

describe('formatCurrency', () => {
  it('formats properly', () => {
    const result = formatCurrency(50.5, 'pt-BR', 'BRL')
    expect(result).toBe('R$ 50,50')
  })
})

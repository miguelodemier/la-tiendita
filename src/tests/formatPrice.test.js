import { describe, it, expect } from 'vitest'
import { formatPrice } from '../utils/formatPrice'

describe('formatPrice', () => {
  it('formatea 52000 correctamente', () => {
    expect(formatPrice(52000)).toContain('52.000')
  })
  it('formatea 0 correctamente', () => {
    expect(formatPrice(0)).toContain('0')
  })
  it('formatea 1500000 correctamente', () => {
    expect(formatPrice(1500000)).toContain('1.500.000')
  })
})
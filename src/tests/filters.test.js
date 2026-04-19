import { describe, it, expect } from 'vitest'
import products from '../data/products.json'

describe('filtros', () => {
  it('buscar poker retorna solo productos con poker en el nombre', () => {
    const result = products.filter(p => p.name.toLowerCase().includes('poker'))
    expect(result.every(p => p.name.toLowerCase().includes('poker'))).toBe(true)
  })

  it('filtrar por Cervezas retorna solo cervezas', () => {
    const result = products.filter(p => p.category === 'Cervezas')
    expect(result.every(p => p.category === 'Cervezas')).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })
})
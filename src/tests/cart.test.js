import { describe, it, expect } from 'vitest'

function addToCart(cart, product) {
  const exists = cart.find(item => item.id === product.id)
  if (exists) {
    return cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
  }
  return [...cart, { ...product, quantity: 1 }]
}

function getTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

describe('carrito', () => {
  it('addToCart agrega un producto nuevo', () => {
    const cart = []
    const product = { id: 1, name: 'Poker', price: 52000 }
    const result = addToCart(cart, product)
    expect(result).toHaveLength(1)
    expect(result[0].quantity).toBe(1)
  })

  it('addToCart aumenta cantidad si ya existe', () => {
    const cart = [{ id: 1, name: 'Poker', price: 52000, quantity: 1 }]
    const product = { id: 1, name: 'Poker', price: 52000 }
    const result = addToCart(cart, product)
    expect(result[0].quantity).toBe(2)
  })

  it('getTotal calcula correctamente', () => {
    const cart = [
      { id: 1, price: 52000, quantity: 2 },
      { id: 2, price: 28000, quantity: 1 }
    ]
    expect(getTotal(cart)).toBe(132000)
  })
})
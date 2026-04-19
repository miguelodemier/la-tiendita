import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price)
}

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart()
  const navigate = useNavigate()

  if (cart.length === 0) return (
    <div style={{ padding: '3rem', textAlign: 'center', background: '#0f3460', minHeight: '100vh' }}>
      <p style={{ color: 'white', fontSize: '1.5rem' }}>Tu carrito está vacío 😕</p>
      <Link to="/" style={{ color: '#e94560', fontSize: '1.1rem' }}>← Volver al catálogo</Link>
    </div>
  )

  return (
    <div style={{ padding: '2rem', background: '#0f3460', minHeight: '100vh' }}>
      <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>🛒 Tu Carrito</h2>

      {cart.map(item => (
        <div key={item.id} style={{ background: '#16213e', borderRadius: '12px', padding: '1rem 1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '2rem' }}>{item.image}</span>
          <div style={{ flex: 1 }}>
            <p style={{ color: 'white', margin: 0, fontWeight: 'bold' }}>{item.name}</p>
            <p style={{ color: '#a8a8b3', margin: 0, fontSize: '0.9rem' }}>{formatPrice(item.price)} c/u</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
              style={{ background: '#e94560', color: 'white', border: 'none', borderRadius: '6px', width: '30px', height: '30px', cursor: 'pointer', fontSize: '1rem' }}>-</button>
            <span style={{ color: 'white', minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
              style={{ background: '#e94560', color: 'white', border: 'none', borderRadius: '6px', width: '30px', height: '30px', cursor: 'pointer', fontSize: '1rem' }}>+</button>
          </div>
          <strong style={{ color: '#e94560', minWidth: '100px', textAlign: 'right' }}>{formatPrice(item.price * item.quantity)}</strong>
          <button onClick={() => removeFromCart(item.id)}
            style={{ background: 'transparent', color: '#a8a8b3', border: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>🗑️</button>
        </div>
      ))}

      <div style={{ background: '#16213e', borderRadius: '12px', padding: '1.5rem', marginTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <strong style={{ color: 'white', fontSize: '1.2rem' }}>Total:</strong>
          <strong style={{ color: '#e94560', fontSize: '1.2rem' }}>{formatPrice(getTotal())}</strong>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => { if (confirm('¿Vaciar el carrito?')) clearCart() }}
            style={{ background: 'transparent', color: '#a8a8b3', border: '1px solid #a8a8b3', borderRadius: '8px', padding: '0.7rem 1.5rem', cursor: 'pointer' }}>
            Vaciar carrito
          </button>
          <button onClick={() => navigate('/checkout')}
            style={{ background: '#e94560', color: 'white', border: 'none', borderRadius: '8px', padding: '0.7rem 1.5rem', cursor: 'pointer', fontWeight: 'bold', flex: 1 }}>
            Proceder al pago →
          </button>
        </div>
      </div>
    </div>
  )
}
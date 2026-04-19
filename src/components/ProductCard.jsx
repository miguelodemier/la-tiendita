import { useCart } from '../hooks/useCart'

function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price)
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div style={{ background: '#16213e', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
      <div style={{ fontSize: '3rem', textAlign: 'center' }}>{product.image}</div>
      <h3 style={{ color: 'white', margin: 0, fontSize: '1rem' }}>{product.name}</h3>
      <span style={{ color: '#a8a8b3', fontSize: '0.85rem' }}>{product.category}</span>
      <p style={{ color: '#a8a8b3', fontSize: '0.8rem', margin: 0 }}>{product.description}</p>
      <strong style={{ color: '#e94560', fontSize: '1.1rem' }}>{formatPrice(product.price)}</strong>
      <button
        onClick={() => addToCart(product)}
        style={{ background: '#e94560', color: 'white', border: 'none', borderRadius: '8px', padding: '0.6rem', cursor: 'pointer', fontWeight: 'bold', marginTop: 'auto' }}>
        + Agregar al carrito
      </button>
    </div>
  )
}
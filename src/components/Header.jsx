import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function Header() {
  const { getItemCount } = useCart()

  return (
    <header style={{ background: '#1a1a2e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#e94560', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
        🛒 La Tiendita
      </Link>
      <Link to="/cart" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>
        🛒 {getItemCount() > 0 && <span style={{ background: '#e94560', borderRadius: '50%', padding: '2px 7px', fontSize: '0.8rem' }}>{getItemCount()}</span>}
      </Link>
    </header>
  )
}
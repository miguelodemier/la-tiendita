import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(price)
}

export default function Checkout() {
  const { cart, getTotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', address: '', neighborhood: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  if (cart.length === 0) { navigate('/'); return null }

  function validate() {
    const e = {}
    if (!form.name || form.name.length < 3) e.name = 'Nombre debe tener al menos 3 caracteres'
    if (!form.phone || form.phone.length !== 10) e.phone = 'Teléfono debe tener 10 dígitos'
    if (!form.address || form.address.length < 10) e.address = 'Dirección muy corta'
    if (!form.neighborhood) e.neighborhood = 'Barrio es requerido'
    if (form.notes.length > 200) e.notes = 'Máximo 200 caracteres'
    return e
  }

  function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSuccess(true)
    clearCart()
    setTimeout(() => navigate('/'), 3000)
  }

  const inputStyle = { width: '100%', padding: '0.7rem', borderRadius: '8px', border: '1px solid #333', background: '#0f3460', color: 'white', boxSizing: 'border-box' }
  const labelStyle = { color: '#a8a8b3', fontSize: '0.9rem', marginBottom: '0.3rem', display: 'block' }
  const errorStyle = { color: '#e94560', fontSize: '0.8rem', marginTop: '0.3rem' }

  if (success) return (
    <div style={{ padding: '3rem', textAlign: 'center', background: '#0f3460', minHeight: '100vh' }}>
      <div style={{ fontSize: '4rem' }}>🎉</div>
      <h2 style={{ color: 'white' }}>¡Pedido confirmado!</h2>
      <p style={{ color: '#a8a8b3' }}>Te redirigimos al inicio en 3 segundos...</p>
    </div>
  )

  return (
    <div style={{ padding: '2rem', background: '#0f3460', minHeight: '100vh', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>📦 Checkout</h2>

      <div style={{ background: '#16213e', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ color: 'white', marginTop: 0 }}>Resumen del pedido</h3>
        {cart.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', color: '#a8a8b3', marginBottom: '0.5rem' }}>
            <span>{item.image} {item.name} × {item.quantity}</span>
            <span>{formatPrice(item.price * item.quantity)}</span>
          </div>
        ))}
        <hr style={{ borderColor: '#333', margin: '1rem 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <strong style={{ color: 'white' }}>Total</strong>
          <strong style={{ color: '#e94560' }}>{formatPrice(getTotal())}</strong>
        </div>
      </div>

      <div style={{ background: '#16213e', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ color: 'white', marginTop: 0 }}>Datos de entrega</h3>

        <div>
          <label style={labelStyle}>Nombre completo</label>
          <input style={inputStyle} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        <div>
          <label style={labelStyle}>Teléfono</label>
          <input style={inputStyle} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="3001234567" />
          {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
        </div>

        <div>
          <label style={labelStyle}>Dirección</label>
          <input style={inputStyle} value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="Calle 123 # 45-67" />
          {errors.address && <p style={errorStyle}>{errors.address}</p>}
        </div>

        <div>
          <label style={labelStyle}>Barrio</label>
          <input style={inputStyle} value={form.neighborhood} onChange={e => setForm({ ...form, neighborhood: e.target.value })} placeholder="Tu barrio" />
          {errors.neighborhood && <p style={errorStyle}>{errors.neighborhood}</p>}
        </div>

        <div>
          <label style={labelStyle}>Notas (opcional)</label>
          <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Instrucciones especiales..." />
          {errors.notes && <p style={errorStyle}>{errors.notes}</p>}
        </div>

        <button onClick={handleSubmit}
          style={{ background: '#e94560', color: 'white', border: 'none', borderRadius: '8px', padding: '1rem', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
          Confirmar Pedido 🎉
        </button>
      </div>
    </div>
  )
}
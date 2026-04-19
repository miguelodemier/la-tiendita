import { useState } from 'react'
import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

const categories = ['Todos', 'Cervezas', 'Licores', 'Bebidas', 'Snacks']

export default function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [order, setOrder] = useState('')

  let filtered = products
    .filter(p => category === 'Todos' || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))

  if (order === 'az') filtered.sort((a, b) => a.name.localeCompare(b.name))
  if (order === 'za') filtered.sort((a, b) => b.name.localeCompare(a.name))
  if (order === 'asc') filtered.sort((a, b) => a.price - b.price)
  if (order === 'desc') filtered.sort((a, b) => b.price - a.price)

  return (
    <div style={{ padding: '2rem', background: '#0f3460', minHeight: '100vh' }}>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <input
          placeholder="Buscar productos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: '0.6rem 1rem', borderRadius: '8px', border: 'none', flex: 1, minWidth: '200px' }}
        />
        <select value={order} onChange={e => setOrder(e.target.value)}
          style={{ padding: '0.6rem', borderRadius: '8px', border: 'none' }}>
          <option value="">Ordenar por...</option>
          <option value="az">Nombre A-Z</option>
          <option value="za">Nombre Z-A</option>
          <option value="asc">Precio: menor a mayor</option>
          <option value="desc">Precio: mayor a menor</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)}
            style={{ padding: '0.4rem 1rem', borderRadius: '20px', border: 'none', cursor: 'pointer',
              background: category === cat ? '#e94560' : '#16213e', color: 'white', fontWeight: 'bold' }}>
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0
        ? <p style={{ color: 'white', textAlign: 'center', fontSize: '1.2rem' }}>No se encontraron productos 😕</p>
        : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
      }
    </div>
  )
}
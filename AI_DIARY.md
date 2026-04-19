# Diario de IA — La Tiendita
## Candidato: Miguel Quintero
---

## Desafío 1: Estructura + Catálogo

### Interacción 1: Estructura de carpetas y componentes
- **Herramienta**: Claude
- **Le pedí**: Ayuda para crear la estructura de carpetas y los componentes base del proyecto
- **Me dio**: La estructura completa con Header.jsx y ProductCard.jsx
- **Lo que cambié**: Nada, seguí la estructura sugerida por la prueba
- **Aprendí**: Cómo organizar un proyecto React en components, pages, hooks y data

### Interacción 2: Datos de productos
- **Herramienta**: Claude
- **Le pedí**: Un JSON con 8 productos colombianos de bebidas
- **Me dio**: El JSON completo con cervezas, licores, bebidas y snacks con emojis como imágenes
- **Lo que cambié**: Verifiqué que los precios fueran realistas en COP
- **Aprendí**: Usar emojis como imágenes es una solución práctica cuando no hay assets

## Desafío 2: Carrito de Compras

### Interacción 3: Context API para el carrito
- **Herramienta**: Claude
- **Le pedí**: Implementar el carrito con Context API y un custom hook
- **Me dio**: useCart.jsx con CartProvider, addToCart, removeFromCart, updateQuantity, clearCart, getTotal y getItemCount
- **Lo que cambié**: Nada, entendí la lógica de cómo el Context comparte estado entre componentes
- **Aprendí**: Context API es la forma más limpia de manejar estado global sin librerías externas

### Interacción 4: Página del carrito
- **Herramienta**: Claude
- **Le pedí**: La página Cart.jsx con controles de cantidad y total
- **Me dio**: El componente completo con +/-, eliminar producto y vaciar carrito
- **Lo que cambié**: Nada, funcionó directo
- **Aprendí**: Cómo usar useNavigate de React Router para redirigir programáticamente

## Desafío 3: Búsqueda, Filtros y Orden

### Interacción 5: Filtros combinados en Home
- **Herramienta**: Claude
- **Le pedí**: Búsqueda por texto, filtro por categoría y ordenamiento en la misma página
- **Me dio**: Todo integrado en Home.jsx con useState para cada filtro
- **Lo que cambié**: Nada, la lógica de encadenar .filter() y .sort() quedó clara
- **Aprendí**: Cómo combinar múltiples filtros en un solo flujo de datos

## Desafío 4: Checkout

### Interacción 6: Formulario con validación
- **Herramienta**: Claude
- **Le pedí**: Checkout.jsx con formulario, validación y resumen del pedido
- **Me dio**: El componente completo con validación de cada campo y mensaje de éxito
- **Lo que cambié**: Nada, revisé que las validaciones colombianas (teléfono 10 dígitos) fueran correctas
- **Aprendí**: Cómo manejar validación de formularios sin librerías externas en React

## Desafío 5: Tests

### Interacción 7: Setup de Vitest y tests
- **Herramienta**: Claude
- **Le pedí**: Tests para formatPrice, carrito y filtros
- **Me dio**: 3 archivos de test con 8 tests en total
- **Lo que cambié**: Los tests de formatPrice fallaron porque el formato colombiano incluye un espacio especial entre $ y el número. Cambié toBe() por toContain() para que funcionaran
- **Aprendí**: Que el formateo de moneda varía por sistema operativo y hay que ser cuidadoso con los caracteres especiales en los tests. Aprendí a usar toContain() en vez de toBe() para casos donde el string exacto puede variar

## Reflexión General
Usar Claude me permitió avanzar muy rápido en la implementación. Lo más valioso fue entender cada pieza antes de seguir — no solo copiar. El error más interesante fue el de los tests de formatPrice, donde la IA me dio un valor esperado que no coincidía exactamente con lo que retornaba el sistema, y tuve que debuggear y entender por qué fallaba para corregirlo.
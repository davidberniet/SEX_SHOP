# 🎨 Guía de Estilos - LujuSex

Mantén la consistencia visual en todo el proyecto. Simple y directo.

---

## 🎨 Colores

### Principales
- **Rosa/Magenta:** `#e83e8c` (Color principal, botones, acentos)
- **Fondo Oscuro:** `#151521`
- **Superficie:** `#1e1e2d`
- **Borde:** `#2b2b40`

### Por Categoría
```
Juguetes    → Rosa (#e83e8c)
Apparel     → Azul (#3b82f6)
Lubricantes → Verde (#10b981)
Accesorios  → Ámbar (#f59e0b)
```

### Estados
```
✓ Éxito   → Verde (#10b981)
⚠ Alerta  → Ámbar (#f59e0b)
✕ Error   → Rojo (#ef4444)
ℹ Info    → Azul (#3b82f6)
```

---

## 🔤 Tipografía

**Fuente:** Plus Jakarta Sans (pesos: 400, 500, 700, 800)

### Tamaños
| Elemento | Móvil | Desktop | Peso |
|----------|-------|---------|------|
| H1 | `text-2xl` | `text-4xl` | 700 |
| H2 | `text-xl` | `text-2xl` | 700 |
| H3 | `text-lg` | `text-xl` | 700 |
| Cuerpo | `text-sm` | `text-base` | 400 |
| Pequeño | `text-xs` | `text-xs` | 400 |

---

## 📏 Espacios

**Sistema:** Multiplos de 4px

```
p-2 = 8px   |   p-4 = 16px  |   p-6 = 24px  |   p-8 = 32px
```

**Uso rápido:**
```html
<!-- Tarjetas -->
<div class="p-6 sm:p-8">...</div>

<!-- Entre elementos -->
<div class="mb-4 sm:mb-6">...</div>

<!-- Grid -->
<div class="gap-4 sm:gap-6">...</div>
```

---

## 🧩 Componentes Listos

### Botón Primario
```html
<button class="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-pink-500 transition-colors">
  Acción
</button>
```

### Botón Secundario
```html
<button class="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10">
  Acción
</button>
```

### Tarjeta
```html
<div class="rounded-lg border border-border-dark bg-surface-dark p-6 hover:shadow-lg transition-all">
  <h3 class="font-bold text-white">Título</h3>
  <p class="text-sm text-slate-400">Descripción</p>
</div>
```

### Input
```html
<input type="text" 
  class="w-full px-4 py-2 bg-background-dark border border-border-dark rounded-lg text-white focus:border-primary focus:ring-2 focus:ring-primary/30"
  placeholder="Escribe..."
/>
```

### Alert Éxito
```html
<div class="p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-green-400">
  ✓ Éxito
</div>
```

### Alert Error
```html
<div class="p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400">
  ✕ Error
</div>
```

---

## 🎯 Iconos

**Librería:** Material Symbols (Google Fonts)

| Acción | Código |
|--------|--------|
| Agregar | `add_circle` |
| Editar | `edit` |
| Eliminar | `delete` |
| Carrito | `shopping_cart` |
| Perfil | `person` |
| Buscar | `search` |
| Cerrar | `close` |
| Volver | `arrow_back` |
| Cargando | `sync` |

**Uso:**
```html
<span class="material-symbols-outlined text-lg">add_circle</span>
```

---

## 📱 Responsive

**Mobile-first:** Empieza por móvil, luego agranda.

```html
<!-- 1 col móvil → 2 cols tablet → 3 cols desktop -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  ...
</div>
```

### Breakpoints
- **sm** = 640px+ (Tablet pequeña)
- **lg** = 1024px+ (Desktop)

---

## ✅ DO's & ❌ DON'Ts

### ✅ CORRECTO
```jsx
<button class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-pink-500">
  Botón
</button>
```

### ❌ INCORRECTO
```jsx
<button style={{backgroundColor: '#e83e8c', padding: '8px 24px'}}>
  Botón
</button>
```

---

## 🔄 Estados UI

### Hover (pasar ratón)
```html
<button class="hover:bg-pink-500 hover:shadow-lg transition-all">...</button>
```

### Focus (seleccionado)
```html
<input class="focus:border-primary focus:ring-2 ring-primary/30" />
```

### Active (presionado)
```html
<a class="active:opacity-75">...</a>
```

### Disabled (deshabilitado)
```html
<button disabled class="opacity-50 cursor-not-allowed">...</button>
```

### Loading (cargando)
```html
<span class="material-symbols-outlined animate-spin">sync</span>
```

---

## 📋 Checklist para Nuevos Componentes

- [ ] Usa Tailwind, no CSS inline
- [ ] Mobile-first (empieza por sm:)
- [ ] Usa colores del tema
- [ ] Respeta espacios (p-6, mb-4, etc)
- [ ] Tiene estados hover/focus
- [ ] Es responsive en móvil
- [ ] Usa Material Icons si necesita iconos

---


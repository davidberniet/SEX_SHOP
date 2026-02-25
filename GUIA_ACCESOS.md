# 📋 Sistema de Gestión Completo - Accesos Rápidos

## 🛍️ Productos
- **Lista de productos**: `/producto`
- **Crear nuevo**: `/producto/new`
- **Ver detalles**: `/producto/{id}`
- **Editar**: `/producto/{id}/edit`
- **Eliminar**: Botón en formulario de edición

## 📦 Variaciones (Combinaciones)
- **Gestionar variaciones** de un producto: `/producto/{id}/combinaciones`
- **Crear variación**: `/producto/{id}/combinaciones/new`
- **Ver detalles de variación**: `/producto/combinacion/{id}`
- **Editar variación**: `/producto/combinacion/{id}/edit`
- **Eliminar variación**: Botón en vista de detalles

## 🏷️ Atributos
- **Lista de atributos**: `/atributo`
- **Crear nuevo**: `/atributo/new`
- **Ver detalles**: `/atributo/{id}`
- **Editar**: `/atributo/{id}/edit`
- **Eliminar**: Botón en formulario

## 📂 Categorías
- **Lista de categorías**: `/categoria`
- **Crear nueva**: `/categoria/new`
- **Ver detalles**: `/categoria/{id}`
- **Editar**: `/categoria/{id}/edit`
- **Eliminar**: Botón en vista de edición

---

## ⚙️ Características por Sección

### Productos
✅ Nombre, descripción, precio base, imagen  
✅ Categoría (obligatoria)  
✅ Estado (activo/inactivo)  
✅ Búsqueda por nombre, categoría, precio  
✅ Atributos asociados  
✅ Gestión de variaciones con stock  

### Variaciones
✅ SKU único por variación  
✅ Precio especial (opcional, sobrescribe precio del producto)  
✅ Stock individual  
✅ Combinación de valores de atributos  
✅ Estado (activo/inactivo)  
✅ Control de inventario: `tieneStock()`, `reducirStock()`, `incrementarStock()`  

### Atributos
✅ Nombre del atributo (Color, Tamaño, etc.)  
✅ Tipo (dropdown, radio, color, etc.)  
✅ Múltiples valores  
✅ Asociación con productos  

### Categorías
✅ Nombre y descripción  
✅ Cuenta de productos en categoría  
✅ Listado de productos asociados  

---

## 🔄 Flujo Típico

### Crear un Producto con Variaciones

1. **Ir a** `/producto/new`
2. **Completar**:
   - Nombre: "Vibrador Deluxe"
   - Descripción: "El mejor vibrador del mercado"
   - Precio base: €50
   - Categoría: "Vibradores"
   - Imagen URL: https://ejemplo.com/img.jpg

3. **Crear producto** ✅

4. **Ir a** `/producto/{id}/combinaciones` (desde la vista del producto)

5. **Crear variación 1** (Rojo - Mini):
   - SKU: SKU-ROJO-MINI
   - Precio especial: €48
   - Stock: 15
   - Valores: Color=Rojo, Tamaño=Mini

6. **Crear variación 2** (Negro - Normal):
   - SKU: SKU-NEGRO-NORMAL
   - Precio especial: €50
   - Stock: 20
   - Valores: Color=Negro, Tamaño=Normal

---

## 📱 Frontend (Twig Templates)

Todas las vistas usan:
- **Tailwind CSS** con tema oscuro
- **Material Symbols Outlined** para iconos
- **Diseño responsivo** (mobile + desktop)
- **Colores**:
  - Primario: `#ec1380` (pink)
  - Fondos: `#181114`, `#241a1f`
  - Acentos: Green (stock), Red (peligro)

---

## 🔧 Backend (PHP/Symfony)

**Controllers**:
- `ProductoController` - CRUD + búsqueda
- `ProductoCombinacionController` - Variaciones
- `AtributoController` - Atributos
- `CategoriaController` - Categorías

**Repositories**:
- `ProductoRepository` - Métodos de búsqueda avanzada
- `AtributoRepository`, `ProductoCombinacionRepository`, etc.

**Forms**:
- `ProductoType` - Incluye categoría, atributos
- `ProductoCombinacionType` - SKU, precio, stock
- `AtributoType` - Nombre, tipo, valores
- `CategoriaType` - Nombre, descripción

---

## 💡 Ejemplo de Atributos

**Atributo 1: Color**
- Tipo: color
- Valores: Rojo, Negro, Azul, Rosa

**Atributo 2: Tamaño**
- Tipo: dropdown
- Valores: Mini, Normal, Grande

**Atributo 3: Intensidad**
- Tipo: radio
- Valores: Baja, Media, Alta

Esto genera **4 × 3 × 3 = 36** combinaciones posibles.

---

## 🗂️ Estructura de Archivos

```
src/
  Controller/
    ProductoController.php              ✅ CRUD + búsqueda
    ProductoCombinacionController.php   ✅ Variaciones
    AtributoController.php              ✅ Atributos
    CategoriaController.php             ✅ Categorías
    
  Form/
    ProductoType.php                    ✅ Form del producto
    ProductoCombinacionType.php         ✅ Form variaciones
    AtributoType.php                    ✅ Form atributos
    CategoriaType.php                   ✅ Form categorías

templates/
  producto/
    index.html.twig                     ✅ Listado con búsqueda
    new.html.twig                       ✅ Crear
    edit.html.twig                      ✅ Editar
    show.html.twig                      ✅ Detalles
    
  producto_combinacion/
    index.html.twig                     ✅ Variaciones del producto
    new.html.twig                       ✅ Crear variación
    edit.html.twig                      ✅ Editar variación
    show.html.twig                      ✅ Detalles variación
    
  atributo/
    index.html.twig                     ✅ Listado atributos
    new.html.twig                       ✅ Crear atributo
    edit.html.twig                      ✅ Editar atributo
    show.html.twig                      ✅ Detalles atributo
    
  categoria/
    index.html.twig                     ✅ Listado categorías
    new.html.twig                       ✅ Crear categoría
    edit.html.twig                      ✅ Editar categoría
    show.html.twig                      ✅ Detalles categoría
```

---

**Todo está listo para usar** 🚀

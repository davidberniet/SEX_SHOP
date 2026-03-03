# 🔧 Guía de Setup - Fixtures de Base de Datos

## ¿Qué son los fixtures?

Los fixtures son datos de ejemplo que se pueden cargar rápidamente en la base de datos para testing y desarrollo.

## 📋 Qué se carga

Al cargar los fixtures, se crean automáticamente:

### Administradores (2)
- ✓ admin@sexo.com - SuperAdmin
- ✓ moderador@sexo.com - Moderador

### Categorías (4)
- ✓ Juguetes
- ✓ Apparel (Ropa/Lencería)
- ✓ Lubricantes
- ✓ Accesorios

### Productos (8)
- Vibrador Deluxe - $49.99
- Anarosa Luxury - $34.99
- Lubricante Durex Fresa - $12.99
- Lubricante Silicona Premium - $18.99
- Esposas de Lujo Suave - $24.99
- Mambo - Vibrador Compacto - $39.99
- Juguete Premium Realista - $59.99
- Kit de Lubricantes Variados - $28.99

### Clientes de Prueba (3)
- juan@example.com / Password123
- maria@example.com / Password123
- alex@example.com / Password123

---

## 🚀 Cómo cargar los fixtures

### Opción 1: Usar el script de ayuda
```bash
./load-fixtures.sh
```

### Opción 2: Usar Symfony CLI
```bash
symfony console doctrine:fixtures:load
```

### Opción 3: Usar PHP directamente
```bash
php bin/console doctrine:fixtures:load
```

### Sin confirmación (útil para CI/CD)
```bash
./load-fixtures.sh --no-interaction
```

---

## ⚠️ ADVERTENCIAS IMPORTANTES

1. **Los fixtures LIMPIARÁN la base de datos** antes de cargar
   - Se eliminarán todos los datos existentes
   - Solo mantén esto en desarrollo/testing

2. **Las imágenes deben existir**
   - Los productos usan imágenes de `/public/uploads/productos/`
   - Si las imágenes no existen, los productos se crearán pero sin imagen

3. **Esto es solo para desarrollo**
   - No usar en producción
   - Las contraseñas de ejemplo son públicas (solo testing)

---

## ✅ Verificar que funcionó

Después de ejecutar los fixtures:

1. Accede a la base de datos
2. Deberías tener datos en las tablas:
   - `administrador` (2 filas)
   - `categoria` (4 filas)
   - `producto` (8 filas)
   - `cliente` (3 filas)
   - `producto_combinacion` (8 filas)

3. Prueba iniciar sesión como cliente con:
   - Email: `juan@example.com`
   - Contraseña: `Password123`

4. Prueba iniciar sesión como admin con:
   - Email: `admin@sexo.com`
   - Contraseña: `Admin123!`

---

## 📂 Archivos relacionados

- `src/DataFixtures/ProductFixtures.php` - Carga productos y categorías
- `src/DataFixtures/ClientFixtures.php` - Carga clientes de prueba
- `src/DataFixtures/README.md` - Documentación adicional
- `load-fixtures.sh` - Script de ayuda

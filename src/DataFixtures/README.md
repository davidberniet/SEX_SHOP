# 📦 Fixtures - Datos de Ejemplo

Este directorio contiene los **fixtures** (datos de ejemplo) para la aplicación. Los fixtures permiten cargar datos de prueba rápidamente en cualquier ordenador.

## 📂 Archivos disponibles

### `ProductFixtures.php`
Carga 8 productos de ejemplo con sus categorías:
- **Categorías creadas**: Juguetes, Apparel (Lencería), Lubricantes, Accesorios
- **Productos**: Vibradores, lubricantes, accesorios y más

Los productos utilizan imágenes del directorio `/public/uploads/productos/`

### `ClientFixtures.php`
Carga 3 clientes de ejemplo para pruebas:
- **juan@example.com** - Password: `Password123`
- **maria@example.com** - Password: `Password123`
- **alex@example.com** - Password: `Password123`

### `AdminFixtures.php`
Carga 2 administradores de ejemplo:
- **admin@sexo.com** - Password: `Admin123!` - SuperAdmin
- **moderador@sexo.com** - Password: `Admin123!` - Moderador

## 🚀 Cómo usar

### Cargar todos los fixtures
```bash
php bin/console doctrine:fixtures:load
```

### Cargar fixtures específicos
```bash
# Solo productos
php bin/console doctrine:fixtures:load --group=ProductFixtures

# Solo clientes
php bin/console doctrine:fixtures:load --group=ClientFixtures

# Solo administradores
php bin/console doctrine:fixtures:load --group=AdminFixtures
```

### Cargar sin confirmación (no-interaction)
```bash
php bin/console doctrine:fixtures:load --no-interaction
```

## ⚠️ Importante

- Los fixtures **limpiarán la base de datos** antes de cargar los datos
- Si quieres mantener datos existentes, debes comentar la línea de purga en cada fixture
- Los datos de ejemplo son ficticios y solo para pruebas

## 🔑 Credenciales de prueba

### Cliente
**Email**: juan@example.com  
**Contraseña**: Password123

### Administrador
**Email**: admin@sexo.com  
**Contraseña**: Admin123!

**Email**: moderador@sexo.com  
**Contraseña**: Admin123!

## 📝 Notas

- Las imágenes de los productos deben estar en `/public/uploads/productos/`
- Los datos se cargan en este orden: Administradores → Categorías y Clientes → Productos
- El PasswordHasher se usa para encriptar las contraseñas de forma segura
- SuperAdmin tiene permisos de ROLE_ADMIN y ROLE_SUPER_ADMIN
- Moderador tiene solo ROLE_ADMIN

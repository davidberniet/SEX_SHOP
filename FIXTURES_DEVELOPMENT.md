# 🔧 Guía de Desarrollo - Fixtures

## Estructura de los Fixtures

Los fixtures están organizados en dos archivos principales:

### 1. ProductFixtures.php
Responsable de crear:
- **Categorías**: Juguetes, Apparel, Lubricantes, Accesorios
- **Productos**: 8 productos con descripciones realistas
- **ProductoCombinación**: Cada producto tiene al menos una combinación (SKU, precio, cantidad)

### 2. ClientFixtures.php
Responsable de crear:
- **Clientes**: 3 usuarios de prueba con datos completos
- **Contraseñas**: Encriptadas usando `UserPasswordHasherInterface`

---

## 🛠️ Cómo agregar más fixtures

### Agregar un nuevo producto

Edita `ProductFixtures.php` y agrega en el método `createProducts()`:

```php
// Producto 9: Mi Nuevo Producto
$p9 = new Producto();
$p9->setNombre('Mi Nuevo Producto');
$p9->setDescripcionGeneral('Descripción detallada del producto');
$p9->setPrecio('59.99');
$p9->setImagenUrl('/uploads/productos/mi-imagen.jpg');
$p9->setActivo(true);
$p9->setCategoria($categorias[self::CATEGORIA_JUGUETES_REFERENCE]);

// Crear combinación
$comb9 = new ProductoCombinacion();
$comb9->setProducto($p9);
$comb9->setSku('NUEVO-001');
$comb9->setPrecioEspecifico('59.99');
$comb9->setCantidad(10);
$comb9->setActivo(true);
$manager->persist($comb9);
$p9->addCombinacione($comb9);

$manager->persist($p9);
```

### Agregar una nueva categoría

Edita `ProductFixtures.php` en el método `createCategories()`:

```php
$catNueva = new Categoria();
$catNueva->setNombre('Mi Categoría');
$catNueva->setDescripcion('Descripción de la categoría');
$manager->persist($catNueva);
$categorias['categoria-mi-categoria'] = $catNueva;
```

### Agregar un nuevo cliente

Edita `ClientFixtures.php` y agrega:

```php
$cliente4 = new Cliente();
$cliente4->setEmail('nuevo@example.com');
$cliente4->setNombre('Nombre Completo');
$cliente4->setNifCif('12345678Z');
$cliente4->setFechaNacimiento(new \DateTime('1995-01-01'));
$password = $this->passwordHasher->hashPassword($cliente4, 'Password123');
$cliente4->setPassword($password);
$cliente4->setRoles(['ROLE_USER']);
$manager->persist($cliente4);
```

---

## 📊 Cómo ordenar los fixtures

Puedes especificar el orden de carga usando el método `getDependencies()`:

```php
public function getDependencies(): array
{
    return [
        ProductFixtures::class, // Cargar productos primero
    ];
}
```

---

## 🔑 Notas de Seguridad

⚠️ **IMPORTANTE**: 
- Nunca uses datos reales en fixtures
- Los fixtures son solo para desarrollo/testing
- Las contraseñas de ejemplo están en el código (no secretas)
- En producción, usar base de datos real sin fixtures

---

## 🧪 Testing con Fixtures

Los fixtures pueden usarse en tests:

```php
class ProductTest extends KernelTestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        
        // Ejecutar fixtures
        $this->loadFixtures([ProductFixtures::class]);
    }
    
    public function testProductosCargados(): void
    {
        $repository = static::getContainer()->get(ProductoRepository::class);
        $productos = $repository->findAll();
        
        $this->assertCount(8, $productos);
    }
}
```

---

## 📝 Mejores Prácticas

1. **Mantén los fixtures actualizados**
   - Si cambias la estructura de las entidades, actualiza los fixtures

2. **Usa referencias** 
   - Usa `$this->addReference()` y `$this->getReference()` para relaciones complejas

3. **Agrupa relacionados**
   - Mantén productos y categorías en el mismo fixture

4. **Documenta cambios**
   - Comenta cambios importantes en los fixtures

5. **Usa datos realistas**
   - Los datos de ejemplo deben ser realistas para testing efectivo

---

## 🚀 Comando Útiles

```bash
# Cargar fixtures
php bin/console doctrine:fixtures:load

# Cargar sin preguntar
php bin/console doctrine:fixtures:load --no-interaction

# Listar todos los fixtures disponibles
php bin/console doctrine:fixtures:list

# Purgar la base de datos (sin cargar datos)
php bin/console doctrine:database:drop --force
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate --no-interaction
```

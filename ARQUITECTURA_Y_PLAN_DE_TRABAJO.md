# Hoja de Arquitectura y Plan de Trabajo - Sex Shop Online

Este documento describe la arquitectura del proyecto y una propuesta para dividir el trabajo entre 4 desarrolladores, con el fin de maximizar la productividad y minimizar los conflictos.

## 1. Arquitectura General

El proyecto se basa en el framework **Symfony 7** con la siguiente estructura y componentes principales:

-   **Backend:** PHP 8.2+ / Symfony 7.
-   **Base de Datos:** Motor de base de datos relacional (ej. PostgreSQL, MySQL/MariaDB) gestionado a través de **Doctrine ORM**.
-   **Frontend:** **Twig** para la renderización de plantillas del lado del servidor. **Stimulus** (parte de Symfony UX) para interactividad ligera en el cliente.
-   **Assets:** **AssetMapper** de Symfony para gestionar CSS y JavaScript.
-   **Contenerización:** **Docker** y **Docker Compose** para un entorno de desarrollo y producción consistente.

## 2. División de Responsabilidades por Desarrollador

Se proponen 4 áreas de enfoque principales, cada una asignada a un desarrollador.

---

### **Desarrollador Fernando: Frontend y Experiencia de Usuario (UX)**

Responsable de todo lo que el cliente ve y con lo que interactúa. Su objetivo es crear una interfaz atractiva, rápida y fácil de usar.

-   **Componentes Principales:**
    -   `templates/`: Creación y modificación de todas las plantillas Twig (página de inicio, listado de productos, ficha de producto, carrito, etc.).
    -   `assets/styles/`: Desarrollo de todo el CSS y estilos de la aplicación.
    -   `assets/controllers/`: Implementación de controladores de Stimulus para la interactividad (ej. añadir al carrito de forma asíncrona, galerías de imágenes, filtros dinámicos).
-   **Tareas Clave:**
    -   Maquetar las vistas de la tienda: Home, Categorías, Producto, Carrito, Checkout.
    -   Asegurar un diseño responsive y compatible con los principales navegadores.
    -   Implementar la interacción del usuario con la ayuda de Stimulus.
    -   Colaborar estrechamente con el Desarrollador 3 para la parte visual del proceso de compra.

---

### **Desarrollador Berlanga: Catálogo y Gestión de Productos**

Dueño del corazón del negocio: los productos. Se encarga de la lógica de negocio relacionada con el catálogo, categorías y atributos.

-   **Componentes Principales:**
    -   **Entidades:** `Producto`, `Categoria`, `Atributo`, `AtributoValor`, `ProductoCombinacion`.
    -   **Repositorios:** `ProductoRepository`, `CategoriaRepository`, etc.
    -   **Panel de Administración (Backend):** Crear y mantener los formularios y la lógica para que un administrador pueda gestionar el catálogo (CRUDs de productos, categorías, etc.). Probablemente usando el `symfony/form` y `symfony/validator`.
-   **Tareas Clave:**
    -   Desarrollar la lógica para búsquedas y filtros de productos.
    -   Implementar el sistema de combinaciones de productos (ej. talla, color).
    -   Crear el panel de administración para la gestión del catálogo.
    -   Definir la lógica para productos relacionados y ofertas.

---

### **Desarrollador Hugo: Proceso de Compra y Clientes**

Responsable del flujo de compra completo, desde que el usuario añade un producto al carrito hasta que finaliza el pedido.

-   **Componentes Principales:**
    -   **Entidades:** `Cliente`, `Pedido`, `DetallePedido`, `Direccion`, `Pago`.
    -   **Lógica de Negocio:** Implementación del servicio de Carrito de la compra (usando la Sesión de Symfony), lógica del proceso de checkout en varios pasos.
    -   **Controladores:** `CartController`, `CheckoutController`, `OrderController`.
-   **Tareas Clave:**
    -   Desarrollar la funcionalidad completa del carrito de la compra.
    -   Implementar el proceso de checkout: datos de envío, selección de método de pago.
    -   Integración con pasarelas de pago (ej. Stripe, Redsys).
    -   Gestión del área de cliente: ver historial de pedidos, gestionar direcciones.

---

### **Desarrollador Juandi: Backend Core, Seguridad e Infraestructura**

El pilar del sistema. Asegura que la aplicación sea segura, robusta y que los cimientos técnicos sean sólidos.

-   **Componentes Principales:**
    -   **Seguridad:** `config/packages/security.yaml`. Implementación de la autenticación y autorización.
    -   **Entidades Core:** `Administrador`, `Cliente` (en lo que respecta a la seguridad y roles).
    -   **Infraestructura:** `compose.yaml`, `.env`, `Dockerfile`. Mantenimiento del entorno Docker.
    -   **Base de Datos:** `migrations/`. Supervisión y creación de las migraciones de Doctrine.
    -   **Servicios y Comandos:** Creación de servicios transversales (ej. envío de emails) y comandos de consola (`bin/console`).
-   **Tareas Clave:**
    -   Implementar el login y registro para clientes y administradores.
    -   Definir roles y permisos.
    -   Configurar y mantener los entornos de desarrollo, testing y producción.
    -   Optimizar el rendimiento de la base de datos y de la aplicación en general.
    -   Configurar servicios de terceros como el envío de correo (`symfony/mailer`).

## 3. Metodología de Trabajo

-   **Control de Versiones:** Utilizar **Git Flow**.
    -   `main`: Rama de producción.
    -   `develop`: Rama principal de desarrollo donde se integran las funcionalidades.
    -   `feature/nombre-feature`: Ramas individuales para cada nueva funcionalidad.
-   **Comunicación:** Reuniones diarias cortas (15 min) para sincronizar el estado de cada desarrollador.
-   **Pull Requests (PRs):** Todo el código debe pasar por una PR y ser revisado por al menos otro desarrollador antes de fusionarse en `develop`.

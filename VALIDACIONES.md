# Validaciones Implementadas - Formularios de Registro y Login

## Registro

### Validaciones del Backend (RegistrationFormType.php)

1. **Nombre**
   - No puede estar vacío
   - Mínimo 3 caracteres

2. **Email**
   - No puede estar vacío
   - Debe ser un email válido (formato correcto)
   - Validación de formato: `usuario@dominio.com`

3. **DNI/NIE/CIF**
   - No puede estar vacío
   - Debe cumplir con el formato español:
     - DNI: `[0-9]`[0-9]{7}[A-Z] (ej: 12345678A)
     - NIE: `[KLMXYZ]`[0-9]{7}[A-Z] (ej: X1234567L)
     - CIF: Soportado con los mismos patrones

4. **Fecha de Nacimiento**
   - No puede estar vacía
   - El usuario debe ser mayor de 18 años
   - Validación automática de edad

5. **Contraseña**
   - No puede estar vacía
   - Mínimo 8 caracteres
   - Debe contener mayúsculas (A-Z)
   - Debe contener minúsculas (a-z)
   - Debe contener números (0-9)
   - Máximo 4096 caracteres

6. **Términos y Condiciones**
   - Debe ser aceptado obligatoriamente

### Validaciones del Frontend (form-validation.js)

1. **Validación en Tiempo Real**
   - Indicador visual de fortaleza de contraseña
   - Cambio de color de bordes (rojo/verde) mientras escribes
   - Validación de email mientras escribes
   - Validación de DNI/NIE con auto-formato a mayúsculas
   - Validación de edad automática

2. **Indicadores Visuales**
   - Los requisitos de contraseña se marcan con ● cuando se cumplen
   - Los campos válidos muestran borde verde
   - Los campos inválidos muestran borde rojo

3. **Prevención de Envío**
   - Bloquea el envío del formulario si hay campos obligatorios vacíos
   - Muestra feedback visual de qué campos necesitan ser completados

### Mejoras en el Template (register.html.twig)

1. Información de requisitos visibles:
   - "Mínimo 3 caracteres" para el nombre
   - "Debe ser mayor de 18 años" para la fecha de nacimiento
   - Lista de requisitos de contraseña con checkmarks

2. Atributos HTML5:
   - `minlength` para validación nativa del navegador
   - `type="email"` para validación de email
   - `required` en todos los campos obligatorios

---

## Login

### Validaciones del Backend

- Usuario autenticado en sesión
- Manejo de errores de autenticación

### Validaciones del Frontend (form-validation.js + login.html.twig)

1. **Email/Usuario**
   - Validación HTML5 `type="email"`
   - Campo `required`
   - Información: "Introduce tu correo electrónico registrado"

2. **Contraseña**
   - Campo `required`
   - `minlength="8"`
   - Información: "Tu contraseña debe tener al menos 8 caracteres"

3. **Validación Visual**
   - Los campos inválidos muestran borde rojo
   - Los campos válidos muestran borde verde
   - Feedback en tiempo real mientras escribes

---

## Archivos Modificados

- `src/Form/RegistrationFormType.php` - Validaciones del formulario
- `templates/registration/register.html.twig` - Mejoras visuales y hints
- `templates/security/login.html.twig` - Mejoras visuales y validaciones
- `assets/js/form-validation.js` - Validaciones en tiempo real (NUEVO)
- `templates/base_admin.html.twig` - Inclusión del script de validación

---

## Requisitos de Contraseña (Ejemplo)

Válida: `Password123` ✓
- 11 caracteres (✓ >= 8)
- Contiene mayúscula: P (✓)
- Contiene minúscula: assword (✓)
- Contiene números: 123 (✓)

Inválida: `password123` ✗
- Falta mayúscula

Inválida: `Password` ✗
- Falta números

Inválida: `Pass12` ✗
- Menos de 8 caracteres

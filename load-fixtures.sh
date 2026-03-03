#!/bin/bash

# Script para cargar los fixtures en la base de datos
# Uso: ./load-fixtures.sh [--no-interaction]

set -e

echo "🔄 Cargando fixtures de la aplicación..."
echo ""

# Verificar si está instalado Symfony
if ! command -v symfony &> /dev/null; then
    # Usar PHP directamente si Symfony CLI no está instalado
    php bin/console doctrine:fixtures:load "$@"
else
    symfony console doctrine:fixtures:load "$@"
fi

echo ""
echo "✅ ¡Fixtures cargados exitosamente!"
echo ""
echo "📝 Credenciales de prueba:"
echo "   Email: juan@example.com"
echo "   Contraseña: Password123"
echo ""
echo "📊 Datos cargados:"
echo "   ✓ 4 Categorías"
echo "   ✓ 8 Productos"
echo "   ✓ 3 Clientes de prueba"
echo ""

# Backend - API del Portfolio

Servidor API que alimenta el portfolio con datos estructurados y servicios de backend, diseñado para ser escalable, seguro y fácil de mantener.

## 🎯 Propósito

Este backend proporciona:

- **API RESTful** bien estructurada y documentada
- **Datos organizados** sobre proyectos, habilidades y experiencia
- **Servicios de comunicación** para formularios de contacto
- **Seguridad robusta** con múltiples capas de protección
- **Escalabilidad** preparada para crecimiento futuro

## 📡 Endpoints Principales

### Perfil Profesional
`GET /api/profile`

Retorna información completa del perfil:
- Datos personales y profesionales
- Enlaces a redes sociales
- Información de contacto
- Disponibilidad y ubicación

### Proyectos
`GET /api/projects`

Lista de proyectos con capacidad de filtrado:
- Por tecnología utilizada
- Por categoría (Full-Stack, Web, IA/ML, Móvil)
- Solo proyectos destacados
- Paginación configurable

`GET /api/projects/:slug`

Detalles completos de un proyecto específico:
- Descripción extendida
- Stack tecnológico
- Enlaces a demo y repositorio
- Imágenes y capturas

### Habilidades
`GET /api/skills`

Catálogo de habilidades técnicas:
- Organizadas por categoría
- Nivel de proficiencia
- Años de experiencia
- Proyectos relacionados

`GET /api/skills/:id/projects`

Proyectos que utilizan una habilidad específica.

### Línea de Tiempo
`GET /api/timeline`

Historial profesional y educativo:
- Experiencia laboral
- Formación académica
- Logros y certificaciones
- Filtrable por tipo

### Contacto
`POST /api/contact`

Procesamiento de mensajes de contacto:
- Validación de datos
- Protección anti-spam
- Notificaciones por email
- Almacenamiento seguro

### Analíticas
`GET /api/analytics/summary`

Métricas del portfolio:
- Total de proyectos
- Habilidades registradas
- Categorías disponibles
- Estadísticas de experiencia

## 🔒 Seguridad Implementada

### Protección de Headers
Configurado con Helmet para:
- Prevenir ataques XSS
- Protección contra clickjacking
- Control de políticas de contenido
- Headers de seguridad estándar

### CORS Configurado
Control de orígenes permitidos:
- Whitelist de dominios autorizados
- Configuración por ambiente
- Protección contra accesos no autorizados

### Rate Limiting
Protección contra abuso:
- Límite de peticiones por IP
- Ventanas de tiempo configurables
- Respuestas 429 para excesos
- Excepciones para desarrollo

### Validación de Inputs
Todos los endpoints validan:
- Tipos de datos correctos
- Rangos y formatos válidos
- Sanitización de contenido
- Mensajes de error descriptivos

### Compresión
Optimización de respuestas:
- Compresión Gzip automática
- Reducción de ancho de banda
- Mejora de tiempos de respuesta

## 📊 Arquitectura de Datos

### Estructura Actual
Actualmente utiliza datos mock estructurados que simulan una base de datos real, facilitando:
- Desarrollo rápido sin dependencias externas
- Testing sin configuración compleja
- Demostración de estructura de datos
- Migración sencilla a DB real

### Preparado para Escalabilidad
La arquitectura está diseñada para:
- Integración con PostgreSQL (Prisma configurado)
- Migración a MongoDB si se requiere
- Implementación de caching (Redis)
- Separación en microservicios si es necesario

## 🚀 Características Técnicas

### Logging Estructurado
Sistema de logs con Winston:
- Diferentes niveles (error, warn, info, debug)
- Formato JSON para análisis
- Rotación automática de archivos
- Integración con servicios de monitoreo

### Manejo de Errores
Gestión centralizada de errores:
- Respuestas consistentes
- Códigos de error descriptivos
- Logs detallados para debugging
- Ocultación de detalles sensibles en producción

### Health Check
Endpoint de salud del sistema:
- Verificación de disponibilidad
- Estado de conexiones
- Métricas de rendimiento
- Integración con herramientas de monitoreo

# Sergio Jáuregui Portafolio Web

Un sitio web de portafolio personal moderno y responsivo creado con React y Tailwind CSS, que incluye un tema oscuro/claro, animaciones suaves y secciones para proyectos, habilidades e información de contacto.

## 🚀 Características

- Diseño responsivo que funciona en todos los dispositivos
- Alternancia entre temas oscuros y claros
- Animaciones de desplazamiento suave
- Presentación del proyecto con demostraciones en vivo y enlaces al código fuente
- Sección de habilidades con íconos de tecnología
- Formulario de contacto con integración de correo electrónico
- Menú de navegación dinámico
- Enlaces a redes sociales

## 🛠️ Tecnologías utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Tailwind CSS** - Diseño responsivo y de estilo
- **Vite** - Herramienta de compilación y servidor de desarrollo
- **React Icons** - Biblioteca de íconos
- **EmailJS** - Integración del servicio de correo electrónico
- **Framer Motion** - Animaciones
- **React Scroll** - Funcionalidad de desplazamiento suave

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/SergioAngel-1/portfolio.git
```

2. Navega hasta el directorio del proyecto:
```bash
cd portfolio
```

3. Instalar dependencias:
```bash
npm install
```

4. Crear un archivo `.env` en el directorio raíz y agregar sus credenciales de EmailJS:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

## 🏗️ Estructura del proyecto

```
portfolio/
├── src/
│ ├── componentes/ # Componentes de interfaz de usuario reutilizables
│ ├── activos/ # Imágenes y archivos estáticos
│ ├── estilos/ # Estilos globales y Tailwind config
│ ├── data/ # Datos del proyecto y de las habilidades
│ └── App.jsx # Componente principal de la aplicación
├── public/ # Recursos públicos
└── index.html # Archivo HTML de entrada
```

## 🔧 Configuración

### Tailwind CSS

El proyecto utiliza Tailwind CSS para el estilo. La configuración se puede encontrar en `tailwind.config.js`.

### EmailJS

El formulario de contacto utiliza EmailJS para enviar correos electrónicos. Asegúrate de:
1. Crear una cuenta de EmailJS
2. Configurar una plantilla de correo electrónico
3. Agregar tus credenciales al archivo `.env`

## 🚀 Implementación

El sitio se puede crear para producción usando:

```bash
npm run build
```

Esto creará un directorio `dist` con archivos de producción optimizados.

## 📝 Licencia

Este proyecto está protegido bajo una licencia propietaria. Se aplican los siguientes términos:

### Permitido:
- ✅ Ver el código fuente con fines educativos
- ✅ Ejecutar el proyecto localmente para evaluación personal

### Prohibido:
- ❌ Uso comercial de cualquier tipo
- ❌ Copia o réplica directa del código
- ❌ Distribución del código o versiones modificadas
- ❌ Uso del código en otros proyectos, ya sean personales o comerciales

### Requisitos de uso:
Si desea crear un portafolio similar, debe:
1. Desarrollar un diseño completamente diferente
2. Crear una nueva arquitectura desde cero
3. Implementar su propia estructura de componentes única
4. Usar diferentes convenciones de nomenclatura y organización del código

Copyright (c) 2024 Sergio Angel. Todos los derechos reservados.
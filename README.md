# Portafolio Sergio Jáuregui

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

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! No dudes en enviar una solicitud de incorporación de cambios.

1. Bifurca el repositorio
2. Crea tu rama de funciones (`git checkout -b feature/AmazingFeature`)
3. Confirma tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Sube a la rama (`git push origin feature/AmazingFeature`)
5. Abre una solicitud de incorporación de cambios

## 📝 Licencia

Este proyecto tiene licencia GNU General Public License v3.0 (GPLv3) - consulta el archivo [LICENSE](LICENSE) para obtener más detalles. Esto significa:

- ✅ Puedes usar, modificar y distribuir libremente este software
- ✅ Debes mantener el código fuente abierto
- ✅ Cualquier modificación también debe publicarse bajo GPLv3
- ❌ No puedes usar este código en software propietario o de código cerrado
- ❌ No puedes monetizar directamente este código sin compartir las modificaciones
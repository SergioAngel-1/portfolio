# Portfolio Profesional

Un portfolio profesional moderno y responsive construido con React, TypeScript, y Tailwind CSS.

## 🚀 Características

- ⚡️ Vite + React + TypeScript
- 🎨 Tailwind CSS para estilos
- 🌙 Modo oscuro
- 🎭 Animaciones suaves con Framer Motion
- 📱 Diseño totalmente responsive
- 🎯 Secciones interactivas
- 🖼️ Vista previa en tiempo real de proyectos
- 📬 Formulario de contacto funcional

## 🛠️ Tecnologías

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Swiper
- React Icons

## ⚠️ Licencia

Este software es propietario y confidencial. Ninguna parte de este software, incluyendo el código fuente,
documentación u otros materiales, puede ser utilizada, copiada, modificada, fusionada, publicada,
distribuida, sublicenciada, vendida o reproducida en cualquier forma sin el permiso previo por escrito
del titular de los derechos de autor.

Cualquier uso, reproducción o distribución no autorizada de este software o cualquier parte del mismo
puede resultar en severas sanciones civiles y penales, y será procesado con el máximo rigor de la ley.

## 📝 Configuración

### EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea una plantilla de email
4. Actualiza las credenciales en `src/config/emailjs.ts`:

```typescript
export const emailjsConfig = {
  serviceId: 'TU_SERVICE_ID',
  templateId: 'TU_TEMPLATE_ID',
  publicKey: 'TU_PUBLIC_KEY'
};
```

## 🎨 Personalización

- Modifica los colores y estilos en `tailwind.config.js`
- Actualiza la información personal en los archivos de datos en `src/data/`
- Personaliza los componentes en `src/components/`
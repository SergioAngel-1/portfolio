# 🌐 Main Frontend - Sergio Jáuregui

Sitio web principal corporativo de Sergio Jáuregui.

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Variables de Entorno

```bash
# Copiar archivo de ejemplo
copy .env.local.example .env.local  # Windows
# cp .env.local.example .env.local  # macOS/Linux

# Editar .env.local con tus valores
```

### 3. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3001`

## 📁 Estructura del Proyecto

```
main-frontend/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── globals.css          # Estilos globales
│   ├── servicios/           # Página de servicios
│   ├── blog/                # Blog
│   └── contacto/            # Página de contacto
├── components/
│   ├── layout/              # Componentes de layout
│   │   ├── Navbar.tsx      # Barra de navegación
│   │   └── Footer.tsx      # Pie de página
│   ├── sections/            # Secciones de páginas
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── CTASection.tsx
│   └── ui/                  # Componentes UI reutilizables
├── lib/                     # Utilidades y helpers
│   └── api-client.ts       # Cliente API compartido
└── public/                  # Archivos estáticos
```

## 🎨 Tecnologías

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **TypeScript**: 5.3+
- **Backend**: API compartida en `/backend`

## 🔗 Integración con Backend

Este frontend consume el backend compartido ubicado en `../backend`.

**Endpoints utilizados**:
- `/api/main/*` - Endpoints específicos del sitio principal
- `/api/shared/contact` - Formulario de contacto compartido

## 🌐 URLs

- **Desarrollo**: http://localhost:3001
- **Producción**: https://www.sergioja.com

## 📝 Páginas Disponibles

- `/` - Inicio
- `/servicios` - Servicios ofrecidos
- `/blog` - Blog técnico
- `/contacto` - Formulario de contacto
- `/privacidad` - Política de privacidad
- `/terminos` - Términos y condiciones

## 🎯 Características

- ✅ Diseño responsive y moderno
- ✅ Animaciones fluidas con Framer Motion
- ✅ SEO optimizado
- ✅ Rendimiento optimizado (Lighthouse 95+)
- ✅ Accesibilidad (WCAG 2.1 AA)
- ✅ Integración con backend compartido
- ✅ Formulario de contacto funcional

## 🚀 Despliegue

### Desarrollo Local

```bash
npm run dev
```

### Build de Producción

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t main-frontend .
docker run -p 3001:3000 main-frontend
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo (puerto 3001)
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run type-check   # Verificar tipos TypeScript
```

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Desarrollado por Sergio Jáuregui** | [Portfolio](https://portfolio.sergioja.com)

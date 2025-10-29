# ✅ Configuración Completa - Proyecto Sergioja

## 📁 Estructura del Proyecto

```
Sergioja/
├── backend/                      # Backend compartido (Express + Prisma)
│   ├── src/
│   │   ├── routes/
│   │   │   ├── profile.ts       # /api/portfolio/profile
│   │   │   ├── projects.ts      # /api/portfolio/projects
│   │   │   ├── skills.ts        # /api/portfolio/skills
│   │   │   ├── contact.ts       # /api/portfolio/contact
│   │   │   ├── timeline.ts      # /api/portfolio/timeline
│   │   │   └── analytics.ts     # /api/portfolio/analytics
│   │   └── server.ts
│   └── prisma/
│       └── schema.prisma         # Modelos de BD
│
├── Portfolio/frontend/           # Frontend del Portfolio
│   ├── app/                     # Next.js App Router
│   ├── components/              # Componentes React
│   └── lib/
│       └── api-client.ts        # Consume /api/portfolio/*
│
└── main-frontend/                # Frontend del Sitio Principal (NUEVO)
    ├── app/                     # Next.js App Router
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   └── sections/            # (Por crear)
    └── lib/
        └── api-client.ts        # Consume /api/main/*
```

## 🎯 Cambios Realizados

### 1. **Backend - Rutas Reorganizadas**

✅ Todas las rutas del portfolio ahora están bajo `/api/portfolio/*`:

```typescript
// backend/src/server.ts
app.use('/api/portfolio/profile', profileRoutes);
app.use('/api/portfolio/projects', projectsRoutes);
app.use('/api/portfolio/skills', skillsRoutes);
app.use('/api/portfolio/contact', contactRoutes);
app.use('/api/portfolio/timeline', timelineRoutes);
app.use('/api/portfolio/analytics', analyticsRoutes);
```

### 2. **Portfolio Frontend - API Client Actualizado**

✅ El cliente API ahora apunta a `/api/portfolio`:

```typescript
// Portfolio/frontend/lib/api-client.ts
this.client = axios.create({
  baseURL: `${API_URL}/api/portfolio`,  // ← Actualizado
  // ...
});
```

### 3. **Main Frontend - Estructura Creada**

✅ Nuevo sitio principal con:
- ✅ Configuración de Next.js 14
- ✅ Tailwind CSS configurado
- ✅ Navbar y Footer
- ✅ Layout base
- ✅ Página de inicio
- ✅ package.json con todas las dependencias

## 🚀 Pasos para Iniciar Todo

### **1. Backend (Puerto 5000)**

```bash
cd backend

# Instalar dependencias (si no lo has hecho)
npm install

# Configurar .env
copy .env.example .env  # Windows
# cp .env.example .env  # macOS/Linux

# Editar .env con tu configuración de BD
# DATABASE_URL="postgresql://postgres:password@localhost:5432/portfolio_db"

# Generar cliente Prisma
npm run db:generate

# Crear tablas en BD
npm run db:push

# Poblar con datos iniciales
npm run db:seed

# Iniciar servidor
npm run dev
```

**Backend corriendo en**: `http://localhost:5000`

### **2. Portfolio Frontend (Puerto 3000)**

```bash
cd Portfolio/frontend

# Instalar dependencias (si no lo has hecho)
npm install

# Configurar .env.local
copy .env.local.example .env.local  # Windows
# cp .env.local.example .env.local  # macOS/Linux

# Contenido de .env.local:
# NEXT_PUBLIC_API_URL=http://localhost:5000

# Iniciar servidor
npm run dev
```

**Portfolio corriendo en**: `http://localhost:3000`

### **3. Main Frontend (Puerto 3001)**

```bash
cd main-frontend

# Instalar dependencias
npm install

# Configurar .env.local
copy .env.local.example .env.local  # Windows
# cp .env.local.example .env.local  # macOS/Linux

# Contenido de .env.local:
# NEXT_PUBLIC_API_URL=http://localhost:5000

# Iniciar servidor
npm run dev
```

**Sitio principal corriendo en**: `http://localhost:3001`

## 🔗 URLs de Desarrollo

| Servicio | URL | Puerto |
|----------|-----|--------|
| **Backend API** | http://localhost:5000 | 5000 |
| **Portfolio** | http://localhost:3000 | 3000 |
| **Sitio Principal** | http://localhost:3001 | 3001 |
| **Health Check** | http://localhost:5000/health | - |
| **Portfolio API** | http://localhost:5000/api/portfolio/* | - |
| **Main API** | http://localhost:5000/api/main/* | - |

## 📡 Endpoints Disponibles

### **Portfolio API** (`/api/portfolio/*`)

```
GET  /api/portfolio/profile
GET  /api/portfolio/projects
GET  /api/portfolio/projects/:slug
GET  /api/portfolio/skills
GET  /api/portfolio/timeline
POST /api/portfolio/contact
GET  /api/portfolio/analytics/summary
```

### **Main API** (`/api/main/*`) - Por implementar

```
GET  /api/main/services
GET  /api/main/blog
GET  /api/main/blog/:slug
POST /api/main/contact
```

## 🎨 Próximos Pasos

### **Para el Main Frontend**:

1. **Crear secciones faltantes**:
   ```bash
   cd main-frontend/components/sections
   ```
   - `HeroSection.tsx` - Hero principal
   - `ServicesSection.tsx` - Servicios ofrecidos
   - `AboutSection.tsx` - Acerca de
   - `CTASection.tsx` - Call to action

2. **Crear páginas adicionales**:
   ```bash
   cd main-frontend/app
   ```
   - `servicios/page.tsx`
   - `blog/page.tsx`
   - `contacto/page.tsx`

3. **Crear cliente API**:
   ```bash
   cd main-frontend/lib
   ```
   - `api-client.ts` - Cliente para `/api/main/*`

### **Para el Backend**:

1. **Agregar rutas del sitio principal**:
   ```bash
   cd backend/src/routes
   mkdir main
   ```
   - `main/services.ts`
   - `main/blog.ts`
   - `main/contact.ts`

2. **Actualizar schema de Prisma**:
   ```prisma
   // Agregar modelos para el sitio principal
   model Service {
     id          String @id
     name        String
     description String
     // ...
   }
   
   model BlogPost {
     id      String @id
     title   String
     content String
     // ...
   }
   ```

## 🐛 Solución de Problemas

### **Error: Cannot find module**

Los errores de TypeScript son normales antes de instalar dependencias:

```bash
npm install
```

### **Error: Database connection failed**

Verifica que PostgreSQL esté corriendo:

```bash
# Docker
docker ps | grep postgres

# Servicio local
# Windows: Services → PostgreSQL
# Linux: systemctl status postgresql
```

### **Error: Port already in use**

Cambia el puerto en el archivo correspondiente:

```bash
# Backend: .env
PORT=5001

# Portfolio: package.json
"dev": "next dev -p 3002"

# Main: package.json
"dev": "next dev -p 3003"
```

## 📚 Documentación Adicional

- [Backend README](./backend/README.md)
- [Portfolio README](./Portfolio/frontend/README.md)
- [Main Frontend README](./main-frontend/README.md)
- [Database Setup](./DATABASE_SETUP.md)
- [Deployment Guide](./DEPLOYMENT_GUIDE.md)

## ✅ Checklist de Configuración

- [ ] Backend instalado y corriendo
- [ ] PostgreSQL configurado y conectado
- [ ] Base de datos poblada con seed
- [ ] Portfolio frontend corriendo
- [ ] Main frontend corriendo
- [ ] Todos los endpoints respondiendo correctamente

## 🎯 Arquitectura Final

```
sergioja.com (Producción)
│
├── api.sergioja.com (Backend único)
│   ├── /api/portfolio/*  → Portfolio endpoints
│   └── /api/main/*       → Main site endpoints
│
├── portfolio.sergioja.com (Portfolio Frontend)
│   └── Consume /api/portfolio/*
│
└── www.sergioja.com (Main Frontend)
    └── Consume /api/main/*
```

---

**¿Necesitas ayuda?** Revisa los logs de cada servicio con `npm run dev` para ver errores específicos.

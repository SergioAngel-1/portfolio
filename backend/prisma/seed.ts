import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Limpiar datos existentes
  console.log('🗑️  Limpiando datos existentes...');
  await prisma.projectView.deleteMany();
  await prisma.pageView.deleteMany();
  await prisma.contactSubmission.deleteMany();
  await prisma.projectTechnology.deleteMany();
  await prisma.project.deleteMany();
  await prisma.technology.deleteMany();
  await prisma.timelineEvent.deleteMany();
  await prisma.profile.deleteMany();

  // Crear perfil
  console.log('👤 Creando perfil...');
  const profile = await prisma.profile.create({
    data: {
      name: 'Sergio Jáuregui',
      title: 'Full Stack Developer',
      tagline: 'Creo en la tecnología como herramienta estratégica para generar valor, optimizar procesos y potenciar la toma de decisiones a través de soluciones escalables, automatizadas y sostenibles.',
      bio: 'Desarrollador full stack orientado al diseño y la implementación de sistemas escalables que integran arquitectura sólida, automatización y rendimiento. Con experiencia en frameworks frontend como React, Next.js y Vue.js, y tecnologías backend como Node.js, NestJS, Laravel y Symfony, construyo soluciones completas basadas en buenas prácticas de ingeniería.',
      availability: 'available',
      location: 'Chile / Remoto',
      email: 'contacto@sergiojaregui.dev',
      githubUrl: 'https://github.com/sergiojaregui',
      linkedinUrl: 'https://linkedin.com/in/sergiojaregui',
      twitterUrl: 'https://twitter.com/sergiojaregui',
    },
  });

  // Crear tecnologías
  console.log('🛠️  Creando tecnologías...');
  const technologies = await Promise.all([
    // Frontend
    prisma.technology.create({
      data: {
        name: 'React',
        category: 'frontend',
        proficiency: 95,
        yearsOfExperience: 5,
        color: '#61DAFB',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Next.js',
        category: 'frontend',
        proficiency: 90,
        yearsOfExperience: 3,
        color: '#000000',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Vue.js',
        category: 'frontend',
        proficiency: 85,
        yearsOfExperience: 3,
        color: '#4FC08D',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'TypeScript',
        category: 'frontend',
        proficiency: 92,
        yearsOfExperience: 4,
        color: '#3178C6',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Tailwind CSS',
        category: 'frontend',
        proficiency: 90,
        yearsOfExperience: 3,
        color: '#06B6D4',
      },
    }),
    // Backend
    prisma.technology.create({
      data: {
        name: 'Node.js',
        category: 'backend',
        proficiency: 93,
        yearsOfExperience: 5,
        color: '#339933',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'NestJS',
        category: 'backend',
        proficiency: 88,
        yearsOfExperience: 2,
        color: '#E0234E',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Laravel',
        category: 'backend',
        proficiency: 85,
        yearsOfExperience: 3,
        color: '#FF2D20',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Symfony',
        category: 'backend',
        proficiency: 80,
        yearsOfExperience: 2,
        color: '#000000',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Express',
        category: 'backend',
        proficiency: 90,
        yearsOfExperience: 4,
        color: '#000000',
      },
    }),
    // Database
    prisma.technology.create({
      data: {
        name: 'PostgreSQL',
        category: 'backend',
        proficiency: 88,
        yearsOfExperience: 4,
        color: '#336791',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'MongoDB',
        category: 'backend',
        proficiency: 85,
        yearsOfExperience: 3,
        color: '#47A248',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Prisma',
        category: 'backend',
        proficiency: 90,
        yearsOfExperience: 2,
        color: '#2D3748',
      },
    }),
    // DevOps
    prisma.technology.create({
      data: {
        name: 'Docker',
        category: 'devops',
        proficiency: 85,
        yearsOfExperience: 3,
        color: '#2496ED',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'Git',
        category: 'devops',
        proficiency: 92,
        yearsOfExperience: 5,
        color: '#F05032',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'CI/CD',
        category: 'devops',
        proficiency: 80,
        yearsOfExperience: 2,
        color: '#00BFFF',
      },
    }),
    // AI/ML
    prisma.technology.create({
      data: {
        name: 'Python',
        category: 'other',
        proficiency: 82,
        yearsOfExperience: 3,
        color: '#3776AB',
      },
    }),
    prisma.technology.create({
      data: {
        name: 'OpenAI API',
        category: 'other',
        proficiency: 75,
        yearsOfExperience: 1,
        color: '#412991',
      },
    }),
  ]);

  // Crear proyectos
  console.log('📁 Creando proyectos...');
  const project1 = await prisma.project.create({
    data: {
      slug: 'portfolio-profesional',
      title: 'Portfolio Profesional',
      description: 'Portfolio interactivo con terminal funcional y diseño futurista',
      longDescription: 'Portfolio profesional desarrollado con Next.js 14, TypeScript y Tailwind CSS. Incluye terminal interactivo, sistema de internacionalización, modos de rendimiento adaptativos y mini-juegos. Arquitectura full-stack con backend Express y PostgreSQL.',
      category: 'fullstack',
      featured: true,
      demoUrl: 'https://sergiojaregui.dev',
      repoUrl: 'https://github.com/sergiojaregui/portfolio',
      performanceScore: 95,
      accessibilityScore: 98,
      seoScore: 92,
      publishedAt: new Date(),
    },
  });

  const project2 = await prisma.project.create({
    data: {
      slug: 'sistema-automatizacion-rpa',
      title: 'Sistema de Automatización RPA',
      description: 'Plataforma de automatización de procesos empresariales',
      longDescription: 'Sistema RPA desarrollado con Node.js y Python para automatizar procesos repetitivos. Incluye interfaz de administración, scheduler de tareas, integración con APIs externas y reportes en tiempo real.',
      category: 'fullstack',
      featured: true,
      performanceScore: 88,
      accessibilityScore: 85,
      seoScore: 80,
      publishedAt: new Date(),
    },
  });

  const project3 = await prisma.project.create({
    data: {
      slug: 'plataforma-ecommerce',
      title: 'Plataforma E-commerce Escalable',
      description: 'E-commerce con arquitectura de microservicios',
      longDescription: 'Plataforma de comercio electrónico construida con arquitectura de microservicios. Frontend en Next.js, backend con NestJS, PostgreSQL para datos transaccionales y Redis para caché. Incluye pasarela de pagos, gestión de inventario y panel de administración.',
      category: 'fullstack',
      featured: true,
      performanceScore: 90,
      accessibilityScore: 92,
      seoScore: 88,
      publishedAt: new Date(),
    },
  });

  // Relacionar proyectos con tecnologías
  console.log('🔗 Relacionando proyectos con tecnologías...');
  await prisma.projectTechnology.createMany({
    data: [
      // Portfolio
      { projectId: project1.id, technologyId: technologies[0].id }, // React
      { projectId: project1.id, technologyId: technologies[1].id }, // Next.js
      { projectId: project1.id, technologyId: technologies[3].id }, // TypeScript
      { projectId: project1.id, technologyId: technologies[4].id }, // Tailwind
      { projectId: project1.id, technologyId: technologies[5].id }, // Node.js
      { projectId: project1.id, technologyId: technologies[10].id }, // PostgreSQL
      { projectId: project1.id, technologyId: technologies[12].id }, // Prisma
      // RPA
      { projectId: project2.id, technologyId: technologies[5].id }, // Node.js
      { projectId: project2.id, technologyId: technologies[16].id }, // Python
      { projectId: project2.id, technologyId: technologies[11].id }, // MongoDB
      { projectId: project2.id, technologyId: technologies[13].id }, // Docker
      // E-commerce
      { projectId: project3.id, technologyId: technologies[0].id }, // React
      { projectId: project3.id, technologyId: technologies[1].id }, // Next.js
      { projectId: project3.id, technologyId: technologies[6].id }, // NestJS
      { projectId: project3.id, technologyId: technologies[10].id }, // PostgreSQL
      { projectId: project3.id, technologyId: technologies[13].id }, // Docker
    ],
  });

  // Crear eventos de timeline
  console.log('📅 Creando timeline...');
  await prisma.timelineEvent.createMany({
    data: [
      {
        type: 'work',
        title: 'Senior Full Stack Developer',
        organization: 'Tech Solutions Inc.',
        description: 'Desarrollo de soluciones empresariales escalables con arquitectura de microservicios. Liderazgo técnico de equipo de 5 desarrolladores.',
        startDate: new Date('2022-01-01'),
        current: true,
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      },
      {
        type: 'work',
        title: 'Full Stack Developer',
        organization: 'Digital Agency',
        description: 'Desarrollo de aplicaciones web y móviles para clientes corporativos. Implementación de sistemas de automatización.',
        startDate: new Date('2020-03-01'),
        endDate: new Date('2021-12-31'),
        current: false,
        technologies: ['Vue.js', 'Laravel', 'MySQL'],
      },
      {
        type: 'education',
        title: 'Ingeniería en Informática',
        organization: 'Universidad Técnica',
        description: 'Especialización en desarrollo de software y arquitectura de sistemas.',
        startDate: new Date('2016-03-01'),
        endDate: new Date('2020-12-31'),
        current: false,
        technologies: [],
      },
      {
        type: 'achievement',
        title: 'Certificación AWS Solutions Architect',
        organization: 'Amazon Web Services',
        description: 'Certificación profesional en diseño de arquitecturas cloud escalables y seguras.',
        startDate: new Date('2023-06-01'),
        current: false,
        technologies: ['AWS', 'Cloud Architecture'],
      },
    ],
  });

  console.log('✅ Seed completado exitosamente!');
  console.log(`📊 Resumen:`);
  console.log(`   - 1 perfil creado`);
  console.log(`   - ${technologies.length} tecnologías creadas`);
  console.log(`   - 3 proyectos creados`);
  console.log(`   - 4 eventos de timeline creados`);
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

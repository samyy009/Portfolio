export const projects = [
  {
    title: 'Laces and Soles',
    category: 'Full Stack',
    metrics: { performance: '98%', responsiveness: '100%', stability: '95%' },
    tagline: 'Premium Boutique E-Commerce Platform',
    description:
      'A full-stack boutique e-commerce application for a shoe store. Features Facebook OAuth login, product management, smooth checkout with invoice generation, real-time delivery tracking, and a fully mobile-optimized UI. Built with Flask, React, and MySQL for production use with CI/CD pipelines.',
    features: [
      'Facebook & Google OAuth authentication with persistent sessions',
      'Full product catalog with filtering, search, and wishlist functionality',
      'Checkout flow with invoice generation and email confirmation',
      'Real-time delivery tracking and status updates',
      'Mobile-first responsive design optimized for touch devices',
      'Admin dashboard for inventory and order management',
    ],
    tech: ['React', 'Flask', 'MySQL', 'PostgreSQL', 'OAuth 2.0', 'Tailwind CSS', 'Python'],
    github: 'https://github.com/samyy009/laces-and-soles',
    demo: null,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Flavora',
    category: 'Web',
    metrics: { performance: '99%', design: '100%', engagement: '92%' },
    tagline: 'Recipe Sharing & Food Community Platform · Hacklite 2.0',
    description:
      'A modern recipe-sharing and food community platform built during the Hacklite 2.0 24-hour hackathon organized by Code Crafters. Flavora lets food lovers discover recipes, share culinary creations, like and share posts — deployed live on Vercel.',
    features: [
      'Recipe discovery and sharing platform with clean, modern UI',
      'Community interactions — likes, shares, and user profiles',
      'Full-stack architecture designed and deployed within 24 hours',
      'Live deployed on Vercel with production-grade performance',
      'Hacklite 2.0 Hackathon — Certificate of Participation',
      'Mobile-responsive layout for all device sizes',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Node.js', 'Vercel', 'Full Stack'],
    github: 'https://github.com/sameersangam/flavora',
    demo: 'https://flavora-recipes.vercel.app/',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Galactic Blaster',
    category: 'Game Dev',
    metrics: { fps: '60+', latency: '< 1ms', physics: '99%' },
    tagline: 'Arcade 2D Space Shooter — C + Raylib',
    description:
      'An arcade-style 2D space shooter game developed in C using the Raylib graphics library. Features real-time rendering, a smooth game loop, collision detection, and a finite state machine managing game states (menu, play, pause, game over). A deep dive into low-level game programming.',
    features: [
      'Real-time 2D rendering with Raylib graphics library',
      'Finite state machine: menu → play → pause → game over flow',
      'Collision detection system for projectiles and enemies',
      'Smooth game loop with delta-time based physics',
      'Custom sprite animations and visual effects',
      'Built entirely in C — pure game programming without an engine',
    ],
    tech: ['C', 'Raylib', 'Game Development', 'Graphics Programming', '2D Games'],
    github: 'https://github.com/samyy009/galactic-blaster',
    demo: null,
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'UVeye AI Platform',
    category: 'ML/Data',
    metrics: { accuracy: '99.8%', scale: '50+ Proj', impact: 'High' },
    tagline: 'ML Data Annotation & Quality Control at Scale',
    description:
      'Contributed to large-scale AI data annotation and QA pipelines at iMerit Technology for the UVeye computer vision platform. Coordinated 50+ production projects globally across three product lines — Atlas, Artemis, and Helios. Our team earned the Best AI App of the Year award.',
    features: [
      'Semantic segmentation and bounding box annotation for vehicle imagery',
      'Quality checks and validation workflows ensuring ML accuracy',
      'Team coordinator for 50+ projects worldwide — on-time delivery',
      'Atlas: Exterior damage detection for OEM quality assurance',
      'Artemis: Tire tread & sidewall automated inspection reports',
      'Helios: Underbody ML-powered mechanical safety reporting',
    ],
    tech: ['Data Annotation', 'Semantic Segmentation', 'Python', 'Ango Hub', 'ML Pipelines', 'QA'],
    github: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop&auto=format',
  },
];

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '5+', label: 'Certifications' },
  { value: '540+', label: 'LinkedIn Connections' },
];

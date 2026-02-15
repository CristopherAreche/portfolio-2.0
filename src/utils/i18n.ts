import { TranslationDictionary } from "@/types/i18n";

export const uiTranslations: TranslationDictionary = {
  en: {
    layout: {
      skipToContent: "Skip to main content",
    },
    navbar: {
      index: "Index",
      projects: "Projects",
      languageLabel: "Language selector",
      languageToggleLabel: "Toggle language",
      english: "ENG",
      spanish: "SPA",
    },
    hero: {
      sectionLabel: "About me",
      greeting: "Hi, I'M",
      role: "A Software Engineer",
      descriptionFirst:
        "driven by the desire to bring ideas to life on the internet. Over time, I've expanded my expertise to designing and building scalable applications, always aiming to create solutions that are both reliable and intuitive.",
      descriptionSecond:
        "I enjoy the challenge of combining clean architecture, performance, and user-focused design to deliver meaningful digital experiences.",
      frontend: "Front-end",
      backend: "Back-end",
      tools: "Tools",
      resume: "RESUME / CV",
      email: "Email",
      copied: "Copied!",
      copyEmailAria: "Copy email to clipboard",
      emailCopiedAria: "Email copied",
      copySuccessToast: "Email copied to clipboard!",
      copyErrorToast: "Failed to copy email. Please try manually.",
      linkedinAria: "Visit LinkedIn profile",
      githubAria: "Visit GitHub profile",
    },
    projects: {
      sectionLabel: "Projects",
      heading: "My Projects",
      projectAria: (name: string) => `Project: ${name}`,
      sourceCode: "Source Code",
      sourceCodeAria: (name: string) => `View ${name} source code on GitHub`,
      visitWebsite: "visit website",
      visitWebsiteAria: (name: string) => `Visit ${name} live website`,
      inProgress: "in progress",
    },
    errorBoundary: {
      title: "Something went wrong",
      description: "Please try refreshing the page.",
      retry: "Try Again",
    },
    themeSwitcher: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
  },
  es: {
    layout: {
      skipToContent: "Saltar al contenido principal",
    },
    navbar: {
      index: "Inicio",
      projects: "Proyectos",
      languageLabel: "Selector de idioma",
      languageToggleLabel: "Cambiar idioma",
      english: "ENG",
      spanish: "SPA",
    },
    hero: {
      sectionLabel: "Sobre mí",
      greeting: "Hola, SOY",
      role: "Ingeniero de Software",
      descriptionFirst:
        "motivado por convertir ideas en productos reales en internet. Con el tiempo, amplié mi experiencia diseñando y construyendo aplicaciones escalables, siempre buscando soluciones confiables e intuitivas.",
      descriptionSecond:
        "Disfruto combinar arquitectura limpia, rendimiento y diseño centrado en el usuario para crear experiencias digitales con impacto.",
      frontend: "Front-end",
      backend: "Back-end",
      tools: "Herramientas",
      resume: "CV / RESUMEN",
      email: "Correo",
      copied: "¡Copiado!",
      copyEmailAria: "Copiar correo al portapapeles",
      emailCopiedAria: "Correo copiado",
      copySuccessToast: "¡Correo copiado al portapapeles!",
      copyErrorToast: "No se pudo copiar el correo. Intenta manualmente.",
      linkedinAria: "Visitar perfil de LinkedIn",
      githubAria: "Visitar perfil de GitHub",
    },
    projects: {
      sectionLabel: "Proyectos",
      heading: "Mis Proyectos",
      projectAria: (name: string) => `Proyecto: ${name}`,
      sourceCode: "Código",
      sourceCodeAria: (name: string) =>
        `Ver el código fuente de ${name} en GitHub`,
      visitWebsite: "visitar sitio",
      visitWebsiteAria: (name: string) => `Visitar sitio en vivo de ${name}`,
      inProgress: "en progreso",
    },
    errorBoundary: {
      title: "Algo salió mal",
      description: "Por favor, intenta recargar la página.",
      retry: "Intentar de nuevo",
    },
    themeSwitcher: {
      toLight: "Cambiar a modo claro",
      toDark: "Cambiar a modo oscuro",
    },
  },
};

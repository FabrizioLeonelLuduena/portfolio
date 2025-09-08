# Imágenes de Proyectos

Esta carpeta contiene las imágenes para mostrar en la sección de proyectos.

## Instrucciones de uso:

1. Coloca las imágenes de tus proyectos en esta carpeta
2. Los formatos recomendados son: `.jpg`, `.png`, `.webp`
3. Tamaño recomendado: 800x600px o similar (proporción 4:3)
4. Actualiza la propiedad `image` en el array `projects` del componente `project-list.ts`

## Ejemplo de imagen:
```typescript
{
  id: 1,
  title: "Mi Proyecto",
  description: "Descripción del proyecto",
  technologies: ["Angular", "TypeScript"],
  githubUrl: "https://github.com/usuario/proyecto",
  liveUrl: "https://proyecto.com",
  image: "assets/projects/mi-proyecto.jpg", // ← Aquí va la ruta
  year: 2024
}
```

## Imágenes predeterminadas:
- Para proyectos sin imagen específica, se mostrará un fondo gris como placeholder

# Tailwind Project

Proyecto de React + Vite + Tailwind con una landing page que incluye enlaces a las secciones de App, Flex y Grid.

## Incluye

- vista principal con navegación por secciones
- componente Flex con diseño centrado
- componente Grid responsive en 1, 2 y 3 columnas
- configuración para publicación en GitHub Pages

## Scripts

```bash
npm install
npm run dev
npm run build
npm run deploy
```

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub.
2. Conectar el proyecto local:

```bash
git remote add origin https://github.com/<tu-usuario>/tailwind-project.git
git branch -M main
git push -u origin main
```

3. Publicar la build:

```bash
npm run deploy
```

4. En GitHub, ir a Settings > Pages y seleccionar la rama `gh-pages` o la carpeta `root` según el flujo que uses.

## Repositorio local

```bash
git init
git add .
git commit -m "Initial commit"
```

La configuración de Vite está preparada para desplegar con base relativa en GitHub Pages.

# Bosques Urbanos Jalisco - CRUD de Parques

Este proyecto es una aplicación web para administrar parques urbanos del Área Metropolitana de Guadalajara. Permite listar, crear, editar y eliminar parques usando una API RESTful hecha en Laravel.

## Tecnologías utilizadas

- **React** (frontend)
- **Vite** (herramienta de desarrollo y build)
- **Tailwind CSS** (estilos rápidos y bonitos)
- **Fetch API** (para consumir la API)
- **React Hooks** (para manejar estado y efectos)
- **Modales personalizados** (para editar, eliminar y ver detalles)

## ¿Cómo ejecutar el proyecto?

1. **Clona el repositorio**
   ```bash
   git clone <URL del repo>
   cd parks-frontend
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Arranca el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   Esto abre la app en tu navegador en `http://localhost:5173` (o el puerto que te diga la terminal).

> ⚠️ **Importante:**  
> Vite requiere Node.js versión **20.19+** o **22.12+**.  
> Si ves un error como `Vite requires Node.js version 20.19+ or 22.12+`, actualiza tu Node.js antes de instalar las dependencias.
> Puedes descargar la versión recomendada desde [nodejs.org](https://nodejs.org/).

## Estructura básica

- `src/App.jsx`: Componente principal, aquí está toda la lógica de la app y los modales.
- `src/components/`: Carpeta con los componentes reutilizables (formularios, modales, botones, etc).
- `src/services/api.js`: Funciones para consumir la API de parques.

## Comentarios y lógica

- Los formularios de crear y editar parque aparecen en modales bonitos con fondo difuminado.
- El botón "Administrar Parques" muestra el formulario de creación arriba de las tarjetas.
- Los botones de "Crear" y "Actualizar" tienen gradiente verde para que se vean chidos.
- Cuando das clic en una tarjeta, se abre un modal con la info del parque y puedes editarlo desde ahí.
- El botón de eliminar abre otro modal para confirmar antes de borrar (por si te arrepientes).
- El formulario tiene un input para subir imagen, pero la API solo acepta URL, así que hay que subir la imagen a algún lado y pegar la URL (por ahora).
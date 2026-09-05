# 03-login

Aplicacion de autenticacion con React, TypeScript y Firebase. Permite registrar usuarios con email y contrasena, iniciar sesion, mostrar el nombre del usuario autenticado y cerrar sesion desde una pantalla principal simple.

## Que hace

- Registro de usuarios con email, nombre y contrasena.
- Inicio de sesion con Firebase Authentication.
- Escucha del estado de autenticacion para mostrar el nombre del usuario activo.
- Navegacion con React Router entre login, registro y home.
- Cierre de sesion desde la pantalla principal.

## Tecnologias

- React 19
- TypeScript
- Vite
- React Router DOM
- Firebase Authentication

## Estructura

- `src/App.tsx`: entrada principal de la app.
- `src/routes/routes.tsx`: definicion de rutas y observador de autenticacion.
- `src/firebase.tsx`: inicializacion de Firebase y exportacion de `auth`.
- `src/components/Login/login.tsx`: formulario de inicio de sesion.
- `src/components/Signup/Signup.tsx`: formulario de registro.
- `src/components/Inputs/Inputs.tsx`: input reutilizable para formularios.
- `src/pages/home/home.tsx`: pantalla principal del usuario autenticado.
- `src/types/types.ts`: tipos de formularios y props.

## Flujo de la aplicacion

1. `MyRoutes` monta el router y escucha `auth.onAuthStateChanged`.
2. Si hay usuario, `Home` muestra el nombre de perfil almacenado en Firebase.
3. En `/login`, el usuario accede con email y contrasena.
4. En `/register`, el usuario crea una cuenta y luego se actualiza su `displayName`.
5. El boton de salir ejecuta `auth.signOut()`.

## Requisitos

- Node.js 18 o superior.
- Un proyecto de Firebase con Authentication habilitado.

## Variables de entorno

Crear un archivo `.env` en la raiz del proyecto con:

```env
VITE_API_KEY=tu_api_key_de_firebase
```

Ese valor se usa en `src/firebase.tsx` como `apiKey` del proyecto.

## Scripts

- `npm run dev`: levanta el servidor de desarrollo.
- `npm run build`: compila el proyecto y genera la version de produccion.
- `npm run lint`: ejecuta ESLint.
- `npm run preview`: previsualiza el build generado.

## Instalacion

```bash
npm install
npm run dev
```

## Notas de implementacion

- El proyecto usa Firebase Authentication, no una base de datos propia.
- Los formularios comparten el componente `InputControl` para reducir repeticion.
- El archivo `firebase.tsx` tiene configurados valores del proyecto, pero la clave sensible se inyecta desde entorno.
- La ruta principal (`/`) depende del estado de autenticacion para mostrar bienvenida o mensaje de acceso.

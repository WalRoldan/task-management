# Task Management App

Este proyecto es una aplicación para la gestión de tareas, donde los usuarios pueden crear, ver, actualizar y eliminar tareas de manera fácil y rápida. Está dividido en dos partes: el frontend desarrollado con React (Next.js) y el backend desarrollado con Node.js (Express) y MongoDB como base de datos.

## Enlace a la Aplicación Desplegada

- **Frontend (Aplicación Web):** [https://task-management-walrol.vercel.app/dashboard](https://task-management-walrol.vercel.app/dashboard)
- **Backend (API REST):** [https://task-manager-backend-production-9728.up.railway.app](https://task-manager-backend-production-9728.up.railway.app)

## Repositorios

- **Frontend Repository (React):** [https://github.com/WalRoldan/task-management.git](https://github.com/WalRoldan/task-management.git)
- **Backend Repository (Node.js):** [https://github.com/WalRoldan/task-manager-backend.git](https://github.com/WalRoldan/task-manager-backend.git)

## Pasos para Ejecutar el Proyecto Localmente

### 1. Clonar el Repositorio

Para comenzar, clona ambos repositorios (frontend y backend) en tu máquina local:

```bash
git clone https://github.com/WalRoldan/task-management.git
git clone https://github.com/WalRoldan/task-manager-backend.git
```

### 2. Instalar Dependencias

Ve al directorio del backend y frontend y ejecuta el siguiente comando para instalar las dependencias necesarias.

#### Backend

```bash
cd task-manager-backend
npm install
```

#### Frontend

```bash
cd task-management
npm install
```

### 3. Configuración de Variables de Entorno

Asegúrate de tener un archivo `.env` en el directorio raíz del **backend** con las siguientes variables de entorno configuradas:

```env
PORT=3000
MONGO_URI=mongodb+srv://walRol:<YOUR_PASSWORD>@todoapp.thojd.mongodb.net/
```

- **MONGO_URI:** La URL de conexión de tu base de datos MongoDB en Atlas. Asegúrate de reemplazar `<YOUR_PASSWORD>` con tu contraseña de MongoDB.

### 4. Ejecutar el Backend

Para iniciar el backend de la aplicación, ve al directorio del backend y ejecuta:

```bash
npm run dev
```

El servidor estará corriendo en `http://localhost:3000`.

### 5. Ejecutar el Frontend

Para iniciar el frontend de la aplicación, ve al directorio del frontend y ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`.

### Pantalla de Login

En la pantalla de inicio de sesión, utiliza las siguientes credenciales:

- **Email:** `admin@example.com`
- **Password:** `password123`

Una vez autenticado, serás redirigido al dashboard.

## Detalles de Configuración

### Backend

- **Tecnologías utilizadas:**

  - Node.js
  - Express
  - MongoDB (Mongoose)
  - Swagger para documentación de la API
  - Nodemon para desarrollo

- **Archivos relevantes:**
  - `.env`: Contiene variables de entorno como el puerto (`PORT`) y la URL de conexión a la base de datos (`MONGO_URI`).
  - `src/index.js`: El archivo principal que configura y ejecuta el servidor.
  - `src/routes/taskRoutes.js`: Define las rutas de la API para tareas.

### Frontend

- **Tecnologías utilizadas:**

  - React (Next.js)
  - Axios para la comunicación con la API
  - Zustand para la gestión del estado global
  - TailwindCSS para el diseño

- **Archivos relevantes:**
  - `pages/dashboard.js`: La página principal que muestra las tareas.
  - `services/taskService.js`: Contiene funciones para interactuar con la API del backend.

## Licencia

Este proyecto está bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

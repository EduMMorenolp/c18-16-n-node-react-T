# Plataforma de Evaluación y Seguimiento del Rendimiento Escolar

## Descripción

Esta plataforma permite a estudiantes, padres y profesores acceder y gestionar información sobre el rendimiento escolar. Los estudiantes pueden ver su historial académico y recibir retroalimentación, los padres pueden seguir el progreso académico de sus hijos y recibir alertas sobre eventos importantes, y los profesores pueden evaluar el desempeño de los estudiantes y comunicarse con los padres.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para aplicaciones web en Node.js.
- **Prisma**: ORM (Mapeo Objeto-Relacional) para Node.js y TypeScript.
- **SQLite**: Base de datos ligera y auto-contenida.
- **Morgan**: Middleware para registrar (log) solicitudes HTTP en aplicaciones Node.js, útil para depuración y monitoreo.
- **jwt**: Mecanismo para la autenticación segura utilizando tokens JSON Web Token.
- **bcrypt**: Biblioteca para el cifrado de contraseñas en Node.js, que utiliza el algoritmo de hashing bcrypt para proporcionar una manera segura de almacenar contraseñas.
- **dotenv**: Carga las variables de entorno desde un archivo .env en una aplicación Node.js.

## Estructura del Proyecto
```
plataforma-evaluacion/
├── prisma/
│ ├── migrations/
│ └── schema.prisma
├── src/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── roleController.js
│ │ ├── teacherController.js
│ │ ├── cuersesController.js
│ ├── libs/
│ │ ├── authMiddleware.js
│ │ ├── createAccessToken.js
│ ├── models/
│ │ ├── prisma.js
│ ├── routes/
│ │ ├── auth.routes.js
│ │ ├── roles.routes.js
│ │ ├── teacher.routes.js
│ │ ├── courses.routes.js
│ ├── services/
│ │ ├── authService.js
│ │ ├── roleService.js
│ │ ├── teacherService.js
│ │ ├── coursesService.js
│ └── index.js
├── .env
└── package.json
```
## Configuración del Proyecto

### Requisitos Previos

- Node.js (versión 12 o superior)
- npm (gestor de paquetes de Node.js)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/No-Country/c18-16-n-node-react.git
   ```
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura el archivo .env:
   Crea un archivo .env en la raíz del proyecto y añade la siguiente configuración:
   ```bash
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your_jwt_secret"
   ```
4. Inicializa Prisma:
   ```bash
   npx prisma init
   ```
5. Define tu esquema de datos en prisma/schema.prisma y luego genera el cliente Prisma:
   ```bash
   npx prisma generate
   ```
6. Aplica las migraciones a la base de datos:
   ```bash
   npx prisma migrate dev --name init
   ```

### Ejecución del Proyecto

1. Inicia el servidor:
    ```bash
    npm run dev
    ```
2. El servidor estará corriendo en http://localhost:3000.

#### Opcional

1. Iniciar Prisma Studio
   ```bash
   npm run prismastudio
   ```

### API Endpoints

#### Usuario
* POST /api/auth/login | Logeo de usuarios
* POST /api/auth/registro | Registro de usuarios
#### Roles
* GET /api/roles | Registro de roles
* POST /api/roles | Crear roles
#### Profesor
* GET /api/teachers | Registro de profesores
* GET /api/teacher/:id | Traer profesor por ID 
* POST /api/teacher | Crear profesor
* PUT /api/teacher/:id | Actualizar profesor por ID
* DELETE /api/teacher/:id | Eliminar profesor por ID
#### Cursos
* GET /api/cuerses | Registro de cursos
* POST /api/cuerses | Crear curso
* PUT /api/cuerses/:id | Actualizar curso por ID
* DELETE /api/cuerses/:id | Eliminar curso por ID


### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
# Mi Proyecto API REST

Este es un proyecto de ejemplo para una API REST utilizando Node.js, Express, MongoDB y Mongoose.

## Instalación

1. Clona este repositorio en tu máquina local.

## Configuración

El proyecto requiere las siguientes variables de entorno:

- `MONGO_URL`: La URL de conexión a tu base de datos MongoDB.
- `TOKEN_SECRET`: El secreto utilizado para firmar y verificar tokens JWT.

## Ejecución con Docker

Este proyecto puede ser ejecutado con Docker y Docker Compose. Para hacerlo, sigue estos pasos:

1. Asegúrate de tener Docker y Docker Compose instalados en tu máquina.
2. Ejecuta `docker-compose up` en la raíz del proyecto para construir y ejecutar los contenedores de la aplicación y la base de datos.
3. La aplicación estará disponible en `http://localhost:3000`.

Para detener los contenedores, puedes utilizar el comando `docker-compose down`.

## Uso

La API tiene las siguientes rutas disponibles:

- `POST /api/users/register`: Registra un nuevo usuario.
- `POST /api/users/login`: Inicia sesión con un usuario existente y devuelve un token JWT.
- `GET /api/users`: Obtiene una lista de todos los usuarios.
- `DELETE /api/users/:id`: Elimina un usuario por su ID.

También hay rutas protegidas que requieren un token JWT válido en el encabezado `auth-token` de la solicitud:

- `GET /api/dashboard`: Obtiene información del dashboard.

Puedes utilizar herramientas como Postman o cURL para hacer solicitudes a la API y probar sus funcionalidades.


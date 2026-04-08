# Adoptme API - Sistema de adopción de mascotas

Aplicación backend para la gestión de adopciones de mascotas. Permite administrar usuarios, animales y los procesos de adopción.

---

## Características principales

* Implementación de una arquitectura basada en patrones DAO, DTO, Repository y Services.
* Documentación completa de la API mediante Swagger.
* Pruebas funcionales desarrolladas con Mocha, Chai y Supertest.
* Proyecto preparado para ejecutarse en contenedores Docker.

---

## Tecnologías utilizadas

* Node.js
* Express.js
* MongoDB con Mongoose
* swagger-jsdoc y swagger-ui-express
* Mocha, Chai y Supertest
* Docker y DockerHub

---

## Imagen en DockerHub

https://hub.docker.com/r/agustin3z/trabajo-adoptme-coder

---

## Ejecución con Docker

1. Descargar la imagen:

docker pull agustin3z/trabajo-adoptme-coder

2. Ejecutar el contenedor:

docker run -p 8080:8080 agustin3z/trabajo-adoptme-coder

---

## Documentación de la API

Una vez que el servidor esté en ejecución, la documentación se puede ver en:

http://localhost:8080/api/docs

---

## Endpoints principales

Users

* GET /api/users
* POST /api/users

Pets

* GET /api/pets
* POST /api/pets

Adoptions

* GET /api/adoptions
* GET /api/adoptions/:aid
* POST /api/adoptions/:uid/:pid

Mocks

* GET /api/mocks/mockingusers
* GET /api/mocks/mockingpets
* POST /api/mocks/generateData

---

## Testing

Para ejecutar los tests:

npm test

---

## Ejecución sin Docker

Instalar dependencias:

npm install

Iniciar el servidor:

npm run dev

---

## Notas

* Es necesario contar con MongoDB en ejecución o configurar correctamente las variables de entorno.
* El puerto por defecto es 8080.

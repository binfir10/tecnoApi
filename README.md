# TecnoApi - API de Gestión de Usuarios y Órdenes

TecnoApi es una API desarrollada para gestionar datos de usuarios y órdenes de compra. La API permite la creación, edición y eliminación de usuarios y órdenes de usuarios, y está documentada utilizando Postman. La API utiliza las siguientes dependencias:

- `bcryptjs`: ^2.4.3
- `cors`: ^2.8.5
- `dotenv`: ^16.3.1
- `express`: ^4.18.2
- `express-validator`: ^7.0.1
- `jsonwebtoken`: ^9.0.1
- `mongodb`: ^6.0.0
- `mongoose`: ^7.4.2
- `nodemailer`: ^6.9.4
- `nodemon`: ^3.0.1
- `randomstring`: ^1.3.0
- `typescript`: ^5.1.6

## Endpoints de la API

### Iniciar Sesión

- **URL:** `https://tecno-api.vercel.app/auth/login`
- **Método:** POST
- **Descripción:** Este endpoint se utiliza para iniciar sesión en la aplicación como un usuario registrado.
- **Headers:**
  - `x-token`: (Token de autenticación válido)
- **Body:**
  
  ```json
  {
      "email": "brfa@gmail.com",
      "password": "bfrrasrsdsr"
  }
Ejemplo de Solicitud:

javascript
Copiar código
var raw = JSON.stringify({
    "email": "brfa@gmail.com",
    "password": "bfrrasrsdsr"
});

var requestOptions = {
  method: 'POST',
  body: raw,
  redirect: 'follow'
};

fetch("https://tecno-api.vercel.app/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
Ejemplo de Respuesta: No devuelve cuerpo en la respuesta.

Obtener Órdenes
URL: https://tecno-api.vercel.app/orders

Método: GET

Descripción: Este endpoint se utiliza para obtener la lista de órdenes de productos.

Headers:

x-token: (Token de autenticación válido)
Body: No es necesario

Ejemplo de Solicitud:

javascript
Copiar código
var myHeaders = new Headers();
myHeaders.append("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjBkNzQ0MmI5MzI1NjYyZjcyOGNjOCIsImlhdCI6MTY5NDg4NzU0MiwiZXhwIjoxNjk0OTE2MzQyfQ.GMcb6mITuST3yi_nvVVx8O80lV1y76Sn_rTTA9mAq-E");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://tecno-api.vercel.app/orders", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
Ejemplo de Respuesta: No devuelve cuerpo en la respuesta.

Crear Nueva Orden
URL: https://tecno-api.vercel.app/orders

Método: POST

Descripción: Este endpoint se utiliza para crear una nueva orden de productos.

Headers:

x-token: (Token de autenticación válido)
Body:

json
Copiar código
{
    "userId": "6505ec7d5e5ddc7da5e1c8df",
    "items": [
        {
            "product": {
                "id": 16,
                "name": "REDMI NOTE 9 PRO",
                "marca": "Xiaomi",
                "price": 100000,
                "img": "https://res.cloudinary.com/dv4ukplcm/image/upload/v1687477078/Phone/xiaomi/redmi-note-9-pro_l9bmyq.webp",
                "specs": [
                    "Memoria: 128Gb.",
                    "Ram: 6Gb.",
                    "Camara Principal: 64Mp.",
                    "Camara Frontal: 16Mp."
                ]
            },
            "quantity": 1
        },
        {
            "product": {
                "id": 22,
                "name": "REDMI NOTE 10",
                "marca": "Xiaomi",
                "price": 110000,
                "img": "https://res.cloudinary.com/dv4ukplcm/image/upload/v1687477078/Phone/xiaomi/redmi-note10_clqogn.webp",
                "specs": [
                    "Memoria: 256Gb.",
                    "Ram:",
                    "Camara Principal: 60Mp.",
                    "Camara Frontal: 8Mp."
                ]
            },
            "quantity": 1
        }
    ],
    "shippingDetail": {
        "name": "bfggsdg",
        "cellphone": 1136845464,
        "email": "bsfga@gmail.com",
        "address": "bfgfdshfdh",
        "location": "dfhdfshdfshd",
        "province": "hfdshdshdsh"
    },
    "total": 210000
}
Ejemplo de Solicitud:

javascript
Copiar código
var myHeaders = new Headers();
myHeaders.append("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDVlYzdkNWU1ZGRjN2RhNWUxYzhkZiIsImlhdCI6MTY5NDg4ODk4NywiZXhwIjoxNjk0OTE3Nzg3fQ.ItWu5PSdMu62hrtn7_O1M_0fSeAK10HaWkRj5qCq4PI");

var raw = JSON.stringify({
    "userId": "6505ec7d5e5ddc7da5e1c8df",
    "items": [
        {
            "product": {
                "id": 16,
                "name": "REDMI NOTE 9 PRO",
                "marca": "Xiaomi",
                "price": 100000,
                "img": "https://res.cloudinary.com/dv4ukplcm/image/upload/v1687477078/Phone/xiaomi/redmi-note-9-pro_l9bmyq.webp",
                "specs": [
                    "Memoria: 128Gb.",
                    "Ram: 6Gb.",
                    "Camara Principal: 64Mp.",
                    "Camara Frontal: 16Mp."
                ]
            },
            "quantity": 1
        },
        {
            "product": {
                "id": 22,
                "name": "REDMI NOTE 10",
                "marca": "Xiaomi",
                "price": 110000,
                "img": "https://res.cloudinary.com/dv4ukplcm/image/upload/v1687477078/Phone/xiaomi/redmi-note10_clqogn.webp",
                "specs": [
                    "Memoria: 256Gb.",
                    "Ram:",
                    "Camara Principal: 60Mp.",
                    "Camara Frontal: 8Mp."
                ]
            },
            "quantity": 1
        }
    ],
    "shippingDetail": {
        "name": "bfggsdg",
        "cellphone": 1136845464,
        "email": "bsfga@gmail.com",
        "address": "bfgfdshfdh",
        "location": "dfhdfshdfshd",
        "province": "hfdshdshdsh"
    },
    "total": 210000
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://tecno-api.vercel.app/orders", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
Ejemplo de Respuesta: No devuelve cuerpo en la respuesta.

Documentación
La documentación completa de la API está disponible en Postman. Aquí encontrarás detalles sobre cómo utilizar cada uno de los endpoints.

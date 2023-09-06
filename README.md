# Filtro MongoDB - campus

## Instalacion

#### clone o descargue el repositorio donde esta leyendo esto, al tenerlo entra a la carpeta creada y ejecuta  ```npm install``` crea un nuevo archivo llamado ```.env``` y escriba dentro de el lo siguiente
```
URI_MONGODB = 
PORT = 3000
JWT_SECRET = "fklsdfjkld"
```

#### Ejecuta en la terminal ```npm run dev```


### Documentacion de los enpoints

#### Metodos GET

| metodo | url                                                          | body                                      | Descripcion                                                  |
| ------ | ------------------------------------------------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| GET    |                                                              | NO                                        |                                                              |

#### Metodos POST

| metodo   | url                                                               |body                                        | Descripcion                   |
|----------|-------------------------------------------------------------------|--------------------------------------------|-------------------------------|
| POST     |                                                                   |                                            |                               |

#### Metodos PUT

| metodo | url                                                          | body                                                         | Descripcion                    |
| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------ |
|  PUT   |                                                              |                                                              |                                |

#### Metodos DELETE

| metodo  | url                                                          | body | Descripcion       |
| ------- | ------------------------------------------------------------ | ---- | ----------------- |
| DELETE  |                                                              | NO   |                   |

## Dependencias que se usaron

Se usó la `v18.16.1` de NojeJS para este proyecto

1. Clone este repositorio en su máquina local.

   ```
   git clone https://askjdkajskd
   ```

   

   2.Se instalan las dependencias del package.json con el siguiente comando:

```
npm i
```



Se instala `nodemon` para que se reinicie el servidor cada vez que se haga un cambio en el código *Se instala nodemon en las dependecias de desarrollo* Se instala `express` para crear el servidor Se instala `dotenv` para cargar las variables de entorno Se instala `mysql2` para la conexión con la base de datos Se instala `jose` para la creacion de token Se instala `typescript` para el uso de typescript Se instala `class-transformer` para transformar los datos que se envían al servidor Se instala `class-validator` para validar los datos que se envían al servidor, es necesario el reflect-metadat y el jose para generar los tokens 4. Configuración del archivo .env Escribe el puerto que vayas a utilizar:

```
CONFIG = { "hostname" : "locahost", "port" : ""}
```



Antes de ejecutar el servidor, asegúrate de llenar los datos del archivo .env con la información de tu base de datos y las claves necesarias. El archivo .env debe tener la siguiente estructura:

```
MY_CONECTION = {"host":"localhost","user":"","password":"","database":"","port":3306}
```



Aparte debes tener la variable de entorno para usar JWT:

```
JWT_PRIVATE_KEY = "djfqoiwrue4reu23rksjd"
```



1. Para correr el servidor se usa el comando:

```
npm run dev
```



- Base de datos MySQL configurada y accesible, para crearla sencillo solo debes entrar a la carpeta db/ZooSmart.sql.
- Luego ejecutar cada código de arriba hacia abajo.

## Uso

Para utilizar el sistema de gestión de incidencias técnicas, primero debe obtener un token de permiso para acceder a los endpoints protegidos. Puede obtenerlo haciendo una solicitud a la siguiente URL:

```
GET http://localhost:port/autorizacion/:tabla?endpoint
```



Reemplace `:tabla` con los datos del usuario que va a utilizar los endpoints(users,publicaciones,animales,like). `RECUERDA` Que el port tienes que haberlo definido en el .env Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```



# Endpoints de ZooSmart

A continuación, puede utilizar los siguientes endpoints para interactuar con el sistema:

### users

1. `GET /autorizacion/users?endpoint`: Obtiene el token de users, dura 1 h, recomendacion guardarlo.

Una vez que tenga el token, inclúyalo en el encabezado de sus solicitudes a los endpoints protegidos utilizando la siguiente clave-valor:

```
Authorization: token-de-respuesta
```



- `GET /users`: Obtener todos los usuarios registrados.

- *`GET /users`:*

  ```
  {
  
  }
  ```

  

- `GET /users/id`: Obtener un usuario en especifico que este registrado unicamente por el id.

- *`GET /users/id`:*

  ```
  {
    "id": 3
  }
  ```

  

  -Recuerda revisar la URL para antes de realizar el post ya que para esta función se le agrega /id extra a la URL, las demás no la tienen.

- `POST /users`: Crea un nuevo usuario.

- *`POST /users`:*

  ```
  {
    "id": 123,
    "nombre": "Miguel",
    "email": "campusland@company.com",
    "numero": "1234567890",
    "password": "asddsafs213"
  }
  ```

  

- `PUT /users`: Modifica un usuario registrado guiándose por el id.

- *`PUT /users`:*

  ```
  {
    "id": 3,
    "nombre": "Santiago",
    "email": "Santiago@company.com",
    "numero": "9876543210",
    "password": "sfhiud$%5"
  }
  ```

  

- `DELETE /users`: No esta habilitado, una vez registrado no se puede eliminar, se hace con el fin de recopilar información.

- *`DELETE /users`:*

  ```
  {
  
  }
  ```

  

### 

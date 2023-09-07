# Hamburguesas Campus

------

La cafetería de Campuslands proporcionará a los campistas la conveniencia de adquirir hamburguesas, pero se enfrenta a un desafío crítico relacionado con la gestión de ingredientes. La gestión ineficiente de la disponibilidad de ingredientes puede llevar a problemas operativos, como la falta de ingredientes esenciales o el desperdicio de productos no utilizados por parte de los Chefs. Esto se traduce en una experiencia insatisfactoria para los clientes, pérdida de ingresos y un aumento innecesario en los costos operativos.

La falta de un sistema de gestión de inventario eficiente y automatizado dificulta la capacidad de los Chefs para:

1. Satisfacer la demanda de los clientes de manera constante y oportuna.
2. Mantener un seguimiento preciso de los ingredientes y su fecha de vencimiento.
3. Minimizar el desperdicio de ingredientes y costos innecesarios.
4. Tomar decisiones informadas sobre cuándo realizar pedidos de reposición.
5. Garantizar una experiencia de cliente consistente y de alta calidad en sus platos.

En resumen, los Chefs se enfrentan a un problema crítico de gestión de ingredientes que afecta su capacidad para operar eficientemente y brindar un servicio de calidad. Para abordar este problema, es necesario desarrollar un sistema de gestión de inventario efectivo que permita un control en tiempo real del stock de ingredientes y una planificación de pedidos más precisa.



**Nota :** Briyith te lo agradecerá UwU

## Necesario

1.Se instalan las dependencias del package.json con el siguiente comando:

```
npm i
```



2. Se debe poner en la variable .env.example, luego renombrarlo unicamente como .env

```
URI_MONGODB = "conexion"
PORT = 3050
JWT_SECRET = "fklsdfjkld"
```





3. Para correr el servidor se usa el comando:

```
npm run dev
```



- Base de datos MySQL configurada y accesible, para crearla sencillo solo debes entrar a la carpeta db/ZooSmart.sql.
- Luego ejecutar cada código de arriba hacia abajo.

## Uso

Para cualquier consulta se debe loguear con el siguiente usuario:

Post

```
http://127.10.10.10:3050/api/login
```



Seguido en el body colocar el siguiente usuario

```
{
  "email": "admin@gmail.com",
  "password": "123"
}
```



Luego el token generado se debera colocar en Auth/BearerToken

Ej:

```
sauhdusaihdiuahsiudyhsaoiudjaisdsanlkjdnaskjhdijsahdkjhsakjdhsakjhdkjashd
```



O en headers colocar Authorization seguido de Bearer (token)

Ej:

```
Authorization:   Bearer sjahdiuashdiuahsodijsaoijdsioajdoijdoiasjdoijasoijdoiasoidjsa
```

------

# MongoDB

```js
use ("filtroMongo_LudwingSantiagoVillamizar")
db.createCollection("almacen", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Student Object Validation",
          required: [ "ingredientes", "hamburguesas"],
          properties: {
            ingredientes:{
                bsonType: "object",
                description: "El campo de ingredientes es requerido",
                required:  [ "nameIngrediente", "stock","descripcion"],
                properties: {
                    nameIngrediente: {
                        bsonType: "string",
                        description: "El nombre del ingrediente es requerido"
                    },
                    stock: {
                        bsonType: "int",
                        description: "El stock del ingrediente es requerido"
                    },
                    descripcion: {
                        bsonType: "string",
                        description: "La descripcion es obligatoria y debe ser string"
                    }
                }
            },
            hamburguesas:{
                bsonType: "object",
                description: "El campo de ingredientes es requerido",
                required:  [ "tipoHamburguesa", "stock","nombreChef"],
                properties: {
                    tipoHamburguesa: {
                        bsonType: "string",
                        description: "El tipo de la hamburguesa es requerido solo puede ser vegetariana o de carnes"
                    },
                    stock: {
                        bsonType: "int",
                        description: "El stock de la hamburguesa es requerido"
                    },
                    nombreChef: {
                        bsonType: "string",
                        description: "El npmbre del chef es requerido"
                    }
                }
            },
          }
       }
    }
})
db.almacen.insertMany([
    {
        ingredientes: {
            nameIngrediente: "Carne",
            stock: 500,
            descripcion: "este ingrediente es clasico"
        },
        hamburguesas: {
            tipoHamburguesa: "Vegetariana",
            stock: 8,
            nombreChef: "ChefB"
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Lechuga",
            stock: 0,
            descripcion: "este ingrediente es normal"
        },
        hamburguesas: {
            tipoHamburguesa: "Carnes",
            stock: 11,
            nombreChef: "ChefA"
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Pollo",
            stock: 450,
            descripcion: "este ingrediente es clasico"
        },
        hamburguesas: {
            tipoHamburguesa: "Vegetariana",
            stock: 10,
            nombreChef: "ChefB"
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Tomate",
            stock: 200,
            descripcion: "este ingrediente es normal"
        },
        hamburguesas: {
            tipoHamburguesa: "Carnes",
            stock: 11,
            nombreChef: "ChefC"
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Pan",
            stock: 200,
            descripcion: "este ingrediente es clasico"
        },
        hamburguesas: {
            tipoHamburguesa: "Asiatica",
            stock: 9,
            nombreChef: "ChefC"
        }
    }
])


use ("filtroMongo_LudwingSantiagoVillamizar")
db.createCollection("chefs", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Student Object Validation",
          required: [ "nombre", "tipoChef"],
          properties: {
            nombre:{
                bsonType: "string",
                description: "El nombre del chef es requerido",
            },
            tipoChef:{
                bsonType: "string",
                description: "El tipo del chef es requerido",
            }
          }
       }
    }
})
db.chefs.insertMany([
    {
        nombre: "ChefA",
        tipoChef: "Carnes"
    },
    {
        nombre: "ChefB",
        tipoChef: "Vegetariano"
    },
    {
        nombre: "ChefC",
        tipoChef: "Carnes"
    },
    
])

use ("filtroMongo_LudwingSantiagoVillamizar")
db.createCollection("menu", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Student Object Validation",
          required: [ "nombre", "description","ingredientes"],
          properties: {
            nombre:{
                bsonType: "string",
                description: "El nombre del chef es requerido",
            },
            description:{
                bsonType: "string",
                description: "La description es requerida",
            },
            ingredientes:{
                bsonType: "array",
                description: "El campo de ingredientes es requerido",
                items: {
                    bsonType: "string",
                    description: "El campo de ingredientes debe ser string"
                }
            }
            }  
       }
    }
})
db.menu.insertMany([
    {
        nombre: "Carnes",
        description: "Esta es una descripcion de la hamburguesa y es gourmet",
        ingredientes: ["carne","pan","tomate","pollo", "queso chedar","lechuga"]
    },
    {
        nombre: "Vegetariana",
        description: "Esta es una descripcion de la hamburguesa Vegetariana",
        ingredientes: ["carne integral","pan integral","tomate"]
    },
    {
        nombre: "Clasica",
        description: "Esta es una descripcion de la hamburguesa Clasica",
        ingredientes: ["carne","pan","tomate", "queso chedar","lechuga"]
    },
    {
        nombre: "Asiatica",
        description: "Esta es una descripcion de la hamburguesa y es gourmet",
        ingredientes: ["carne","pan","tomate", "queso chedar","pepino","atun"]
    }
])

use ("filtroMongo_LudwingSantiagoVillamizar")
db.createCollection("usuarios", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Student Object Validation",
          required: [ "email", "password"],
          properties: {
            email:{
                bsonType: "string",
                description: "El email del usuario es requerido",
            },
            password:{
                bsonType: "string",
                description: "La contraseña es requerida",
            }
            }  
       }
    }
})
db.usuarios.insertMany([
    {
        email: "admin@gmail.com",
        password: "123"
    }
])
```

------

# Consultas

1. Encontrar todos los ingredientes con stock menor a 400:

   version: 1.0.0

Get

```
http://127.10.10.10:3050/api/almacen
```

2. Encontrar todas las hamburguesas de la categoría "Vegetariana":

   version: 1.0.1

Get

```
http://127.10.10.10:3050/api/almacen
```

​	

3. Encontrar todos los chefs que se especializan en "Carnes":

​		version: 1.0.0

Get

```
http://127.10.10.10:3050/api/hamburguesas/chefs
```

​	

 4. Aumentar en 1.5 el precio de todos los ingredientes:

    version: 1.0.2

Get

```
http://127.10.10.10:3050/api/almacen
```

​	

5. Encontrar todas las hamburguesas preparadas por "ChefB":

​		version: 1.0.1

Get

```
http://127.10.10.10:3050/api/hamburguesas/chefs
```

6. Encontrar el nombre y la descripción de todas las categorías:

​		version: 1.0.3

Get

```
http://127.10.10.10:3050/api/almacen
```

​	

7. Eliminar todos los ingredientes que tengan un stock de 0:

​		version: 1.0.0

Delete

```
http://127.10.10.10:3050/api/almacen
```

​	

8. Agregar un nuevo ingrediente a la hamburguesa "Clásica":

​		version: 1.0.0

Post

```
http://127.10.10.10:3050/api/hamburguesas
```

​	

9. Encontrar todas las hamburguesas que contienen "Pan integral" como ingrediente:

​		version: 1.0.0

Get

```
http://127.10.10.10:3050/api/hamburguesas
```

​	

10. Cambiar la especialidad del "ChefC" a "Cocina Internacional":

​		version: 1.0.0

Post

```
http://127.10.10.10:3050/api/hamburguesas/chef
```

​	

11. Encontrar el ingrediente más caro:

version: 1.0.4

Get

```
http://127.10.10.10:3050/api/almacen
```

​	

12. Encontrar las hamburguesas que no contienen "Queso cheddar" como ingrediente:

​		version: 1.0.1

Get

```
http://127.10.10.10:3050/api/hamburguesas
```

​	

13. Incrementar el stock de "Pan" en 100 unidades:

​		version: 1.0.0

Put

```
http://127.10.10.10:3050/api/almacen
```

​	

14. Encontrar todos los ingredientes que tienen una descripción que contiene la palabra "clásico":

​		version: 1.0.5

Get

```
http://127.10.10.10:3050/api/almacen
```

15. Listar las hamburguesas cuyo precio es menor o igual a $9:

​		version: 1.0.2

Get

```
http://127.10.10.10:3050/api/hamburguesas
```

16. Contar cuántos chefs hay en la base de datos:

​		version: 1.0.2

Get

```
http://127.10.10.10:3050/api/hamburguesas/chef
```

17. Encontrar todas las categorías que contienen la palabra "gourmet" en su descripción:

​		version: 1.0.3

Get

```
http://127.10.10.10:3050/api/hamburguesas
```

18. Eliminar las hamburguesas que contienen menos de 5 ingredientes:

​		version: 1.0.0

Delete

```
http://127.10.10.10:3050/api/hamburguesas
```

19. Agregar un nuevo chef a la colección con una especialidad en "Cocina Asiática":

​		version: 1.0.1

Post

```
http://127.10.10.10:3050/api/hamburguesas/chef
```




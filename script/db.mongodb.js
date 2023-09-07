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
        description: "Esta es una descripcion de la hamburguesa de carnes",
        ingredientes: ["carne","pan","tomate","pollo", "queso chedar"]
    },
    {
        nombre: "Vegetariana",
        description: "Esta es una descripcion de la hamburguesa Vegetariana",
        ingredientes: ["carne integral","pan integral","tomate"]
    },
    {
        nombre: "Clasica",
        description: "Esta es una descripcion de la hamburguesa Clasica",
        ingredientes: ["carne","pan","tomate", "queso chedar"]
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
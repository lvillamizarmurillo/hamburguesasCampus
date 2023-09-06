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
                required:  [ "nameIngrediente", "stock"],
                properties: {
                    nameIngrediente: {
                        bsonType: "string",
                        description: "El nombre del ingrediente es requerido"
                    },
                    stock: {
                        bsonType: "int",
                        description: "El stock del ingrediente es requerido"
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
                        enum: ["Vegetariana","Carnes","Clasica"],
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
            stock: 500
        },
        hamburguesas: {
            tipoHamburguesa: "Vegetariana",
            stock: 8000,
            nombreChef: "ChefB"
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Lechuga",
            stock: 0
        },
        hamburguesas: {
            tipoHamburguesa: "Carnes",
            stock: 7000,
            nombreChef: "ChefA"
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Pollo",
            stock: 450
        },
        hamburguesas: {
            tipoHamburguesa: "Vegetariana",
            stock: 8000,
            nombreChef: "ChefB"
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Tomate",
            stock: 200
        },
        hamburguesas: {
            tipoHamburguesa: "Carnes",
            stock: 7000,
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
                enum: ["Vegetariano","Carnes"],
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
          required: [ "nombre", "description"],
          properties: {
            nombre:{
                bsonType: "string",
                description: "El nombre del chef es requerido",
            },
            description:{
                bsonType: "string",
                description: "La description es requerida",
            }
          }
       }
    }
})
db.menu.insertMany([
    {
        nombre: "Carnes",
        description: "Esta es una descripcion de la hamburguesa de carnes"
    },
    {
        nombre: "Vegetariana",
        description: "Esta es una descripcion de la hamburguesa Vegetariana"
    },
    {
        nombre: "Clasica",
        description: "Esta es una descripcion de la hamburguesa Clasica"
    }
])
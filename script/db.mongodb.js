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
                required:  [ "tipoHamburguesa", "stock"],
                properties: {
                    tipoHamburguesa: {
                        bsonType: "string",
                        enum: ["Vegetariana","Carnes"],
                        description: "El tipo de la hamburguesa es requerido solo puede ser vegetariana o de carnes"
                    },
                    stock: {
                        bsonType: "int",
                        description: "El stock de la hamburguesa es requerido"
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
            stock: 8000
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Lechuga",
            stock: 100
        },
        hamburguesas: {
            tipoHamburguesa: "Carnes",
            stock: 7000
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Pollo",
            stock: 450
        },
        hamburguesas: {
            tipoHamburguesa: "Vegetariana",
            stock: 8000
        }
    },
    {
        ingredientes: {
            nameIngrediente: "Tomate",
            stock: 200
        },
        hamburguesas: {
            tipoHamburguesa: "Carnes",
            stock: 7000
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
        nombre: "Chef A",
        tipoChef: "Carnes"
    },
    {
        nombre: "Chef B",
        tipoChef: "Vegetariano"
    },
    {
        nombre: "Chef C",
        tipoChef: "Carnes"
    },
    
])
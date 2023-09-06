use ("filtroMongo_LudwingSantiagoVillamizar")
db.createCollection("almacen", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          title: "Student Object Validation",
          required: [ "nameIngrediente", "stock"],
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
       }
    }
})
db.almacen.insertMany([
    {
        nameIngrediente: "Carne",
        stock: 500
    },
    {
        nameIngrediente: "Lechuga",
        stock: 100
    },
    {
        nameIngrediente: "Pollo",
        stock: 450
    },
    {
        nameIngrediente: "Tomate",
        stock: 200
    }
])
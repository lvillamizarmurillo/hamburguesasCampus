import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const chefs = db.getInstance().changeCollection('chefs').connect()
const almacen = db.getInstance().changeCollection('almacen').connect()
const menu = db.getInstance().changeCollection('menu').connect()

export default class Chefs {
    static async getChefCarnes(req, res) {
        const consulta = await chefs.aggregate([
            {
                $match: {"tipoChef": "Carnes"}
            },
            {
                $project: {
                    _id: 0
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async getBurguerChef(req, res) {
        const consulta = await almacen.aggregate([
            {
                $match: {"hamburguesas.nombreChef": "ChefB"}
            },
            {
                $project: {
                    _id: 0,
                    hamburguesas: 1
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async getChefAll(req, res) {
        const consulta = await chefs.aggregate([
            {
                $count: "Total de ches"
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async getPanIntegral(req, res) {
        const consulta = await menu.aggregate([
            {
                $match: {"ingredientes": "pan integral"}
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    ingredientes: 1
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async getSinChedar(req, res) {
        const consulta = await menu.aggregate([
            {
                $match: {"ingredientes": {$nin: ["queso chedar"]}}
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    ingredientes: 1
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async getPrecio(req, res) {
        const consulta = await almacen.aggregate([
            {
                $match: {"hamburguesas.stock": {$lt: 10}}
            },
            {
                $project: {
                    _id: 0,
                    hamburguesas: 1
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async getGourmet(req, res) {
        const consulta = await menu.aggregate([
            {
                $match: {"description": "Esta es una descripcion de la hamburguesa y es gourmet"}
            },
            {
                $project: {
                    _id: 0,
                    nombre: 1,
                    description: 1
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async postBurguer(req, res) {
        await menu.updateOne({nombre: "Clasica"},{$set: {ingredientes: ["carne","pan","tomate","lechuga"]}})
        res.status(200).send({status: 200,message: "A la hamburguesa clasica se le añadio lechuga"})
    }
    static async postChefTipo(req, res) {
        await chefs.updateOne({nombre: "ChefC"},{$set: {tipoChef: "Cocina Internacional"}})
        res.status(200).send({status: 200,message: "El ChefC ahora esta especializado en Cocina Internacional"})
    }
    static async deleteIngredientes(req, res) {
        await menu.deleteMany({"ingredientes": {$size: 3}})
        res.status(200).send({status: 200,message: "Hamburguesas con menos de 5 ingredientes eliminada"})
    }
    static async postChefD(req, res) {
        await chefs.insertOne({nombre: "ChefD",tipoChef: "Cocina Asiática"})
        res.status(200).send({status: 200,message: "El ChefD se añadio con exito y es especializado en Cocina Asiática"})
    }
}
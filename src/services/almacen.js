import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
import {quitarId} from "../utils/funcionesGlobales.js"
const almacen = db.getInstance().changeCollection('almacen').connect()
const menu = db.getInstance().changeCollection('menu').connect()

export default class Almacen {

    static async getIngredientes(req, res) {
        const consulta = await almacen.aggregate([
            {
                $match: {"ingredientes.stock": {$lt: 400}}
            },
            {
                $project: {
                    _id: 0,
                    ingredientes: 1
                }
            }
        ]).toArray()
        console.log(consulta);
        res.status(200).send(consulta)
    }
    static async getBurguerVegana(req, res) {
        const consulta = await almacen.aggregate([
            {
                $match: {"hamburguesas.tipoHamburguesa": "Vegetariana"}
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
    static async getBurguerCategoria(req, res) {
        const consulta = await menu.aggregate([
            {
                $project: {
                    _id: 0,
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async getAumento(req, res) {
        const result = await almacen.find({}).toArray()
        let data = quitarId(result)
        res.status(200).send(data)
    }
    static async deleteStockIngredientes(req, res) {
        await almacen.deleteMany({"ingredientes.stock": 0})
        res.status(200).json({status: 200,message: "Alimentos en stock 0 eliminados."})
    }
    static async getIngredienteCaro(req, res) {
        const consulta = await almacen.aggregate([
            {
                $match: {"ingredientes.stock": 500}
            },
            {
                $project: {
                    _id: 0,
                    ingredientes: 1
                }
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
    static async updatePan(req, res) {
        await almacen.updateOne({"ingredientes.nameIngrediente": "Pan"},{ $inc: {"ingredientes.stock": 100}})
        res.status(200).json({status: 200,message: "Pan aumentado con exito."})
    }
    static async getClasicos(req, res) {
        const consulta = await almacen.aggregate([
            {
                $match: { "ingredientes.descripcion": "este ingrediente es clasico" }
            },
            {
                $project: {
                    _id: 0,
                    ingredientes: {
                        nameIngrediente: 1,
                        descripcion: 1
                    }
                }
            }
        ]).toArray()
        res.status(200).json(consulta)
    }
}
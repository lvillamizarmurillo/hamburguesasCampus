import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const almacen = db.getInstance().changeCollection('almacen').connect()

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
}
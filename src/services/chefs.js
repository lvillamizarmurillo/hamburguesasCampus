import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const chefs = db.getInstance().changeCollection('chefs').connect()
const almacen = db.getInstance().changeCollection('almacen').connect()

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
}
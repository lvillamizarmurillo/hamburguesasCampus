import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const almacen = db.getInstance().changeCollection('almacen').connect()

export default class Almacen {

    static async getIngredientes(req, res) {
        const consulta = await almacen.aggregate([
            {
                $match: {stock: {$lt: 400}}
            }
        ]).toArray()
        res.status(200).send(consulta)
    }
}
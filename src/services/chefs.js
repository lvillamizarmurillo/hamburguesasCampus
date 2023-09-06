import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
const chefs = db.getInstance().changeCollection('chefs').connect()

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
}
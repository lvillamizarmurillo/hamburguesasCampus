import { ObjectId } from 'mongodb';
import db from '../config/mongodb.js';
//const cupones = db.getInstance().changeCollection('test').connect()

export default class Test {

    static async test(req, res) {
        res.json(req.user)
    }
}
//export const loginV1 = (req, res) => {
//    res.status(req.data.status).send(req.data);
//}
import { validarToken } from "../middlewares/jwt.js";

export async function traerUserLogin(req){
    let tokenUser = req.headers['authorization'].slice(7);
    let user = await validarToken(req,tokenUser);
    return user;
}
export function quitarId(consulta){
    let data = []
    for(let i = 0;i<consulta.length;i++){
        let {...data1} = consulta[i].ingredientes;
        data1.stock += 1.5
        data[i] = data1
    }
    return data
}
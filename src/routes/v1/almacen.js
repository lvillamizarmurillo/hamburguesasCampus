import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import Almacen from '../../services/almacen.js'
import {validate} from "../../validations/validateService.js";

const router = Routes();
const version = routesVersioning();


router.get('/', version({ "1.0.0": Almacen.getIngredientes,"1.0.1": Almacen.getBurguerVegana,"1.0.2": validate(Almacen.getAumento),"1.0.3": Almacen.getBurguerCategoria}));


router.delete('/', version({ "1.0.0": validate(Almacen.deleteStockIngredientes)}))

export {
    router
};
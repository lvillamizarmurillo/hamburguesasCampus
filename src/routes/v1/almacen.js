import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import Almacen from '../../services/almacen.js'
import {validate} from "../../validations/validateService.js";
import passportHelper from "../../config/passportHelpert.js";

const router = Routes();
const version = routesVersioning();


router.use(passportHelper.authenticate('bearer', {session: false}));

router.get('/', version({ "1.0.0": Almacen.getIngredientes,"1.0.1": Almacen.getBurguerVegana,"1.0.2": validate(Almacen.getAumento),"1.0.3": Almacen.getBurguerCategoria,"1.0.4": validate(Almacen.getIngredienteCaro),"1.0.5": validate(Almacen.getClasicos)}));

router.put('/', version({ "1.0.0": validate(Almacen.updatePan)}))

router.delete('/', version({ "1.0.0": validate(Almacen.deleteStockIngredientes)}))

export {
    router
};
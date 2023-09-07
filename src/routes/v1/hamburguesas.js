import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import Chefs from '../../services/hamburguesas.js'
import { validate } from "../../validations/validateService.js";

const router = Routes();
const version = routesVersioning();


router.get('/chef', version({ "1.0.0": Chefs.getChefCarnes,"1.0.1": Chefs.getBurguerChef}));

router.post('/chef', version({ "1.0.0": validate(Chefs.postChefTipo)}));

router.get('/', version({ "1.0.0": Chefs.getPanIntegral,"1.0.1": validate(Chefs.getSinChedar)}));

router.post('/', version({ "1.0.0": Chefs.postBurguer}));

export {
    router
};
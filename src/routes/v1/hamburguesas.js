import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import Chefs from '../../services/hamburguesas.js'
import { validate } from "../../validations/validateService.js";
import passportHelper from "../../config/passportHelpert.js";

const router = Routes();
const version = routesVersioning();

router.use(passportHelper.authenticate('bearer', {session: false}));

router.get('/chef', version({ "1.0.0": Chefs.getChefCarnes,"1.0.1": Chefs.getBurguerChef,"1.0.2": Chefs.getChefAll}));

router.post('/chef', version({ "1.0.0": validate(Chefs.postChefTipo)}));

router.get('/', version({ "1.0.0": Chefs.getPanIntegral,"1.0.1": validate(Chefs.getSinChedar),"1.0.2": validate(Chefs.getPrecio),"1.0.3": validate(Chefs.getGourmet)}));

router.post('/', version({ "1.0.0": Chefs.postBurguer}));

router.delete('/', version({ "1.0.0": Chefs.deleteIngredientes}));

export {
    router
};
import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import Chefs from '../../services/chefs.js'

const router = Routes();
const version = routesVersioning();


router.get('/', version({ "1.0.0": Chefs.getChefCarnes,"1.0.1": Chefs.getBurguerChef}));
export {
    router
};
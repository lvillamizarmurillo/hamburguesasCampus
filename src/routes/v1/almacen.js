import Routes from 'express';
import routesVersioning  from 'express-routes-versioning';
import Almacen from '../../services/almacen.js'

const router = Routes();
const version = routesVersioning();


router.get('/', version({ "1.0.0": Almacen.getIngredientes}));
export {
    router
};
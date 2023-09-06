import { Router } from "express";
import { readdirSync } from "fs";
import path from 'path';
import os from "os";

const platform = os.platform();
let PATH_ROUTERS;
const router = Router();

const cleanFile = (fileName) => {
    const file = fileName.split(".").shift();
    return file;
};

const loadModules = async (version) => {
    
    if(platform == "win32") PATH_ROUTERS = path.dirname(new URL(import.meta.url).pathname).replace(/^\/(\w\:)/, '$1');
    else PATH_ROUTERS = path.dirname(new URL(import.meta.url).pathname);
    PATH_ROUTERS += `/v${(version.split("."))[0]}`;
    const filesNames = readdirSync(PATH_ROUTERS);
    const importPromises = filesNames.map(async (fileName) => {
        const cleanName = cleanFile(fileName);
        if (cleanName !== "index") {
            try {
                const moduleRouter = await import(`./v${(version.split("."))[0]}/${fileName}`);
                if (moduleRouter.router) {
                    router.use(`/${cleanName}`, moduleRouter.router);
                }
            } catch (error) {
                console.error(`Error al cargar el modulo '${fileName}':`, error);
            }
        }
    });

    await Promise.all(importPromises);
    return router
};

export default loadModules;
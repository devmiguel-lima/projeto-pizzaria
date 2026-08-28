import { Request, Response, Router } from "express";

import { CreateUserController} from './controllers/user/CreateUserController'


const router = Router();

router.post("/users", new CreateUserController().handle);

export {router}

//ARQUITETURA EM CAMADAS ROUTES-CONTROLLER-SERVICE
//CONTROLLER > 
//SERVICE > RESPONSAVEL PELA LOGICA POR REALAIZAR OPERAÇOES


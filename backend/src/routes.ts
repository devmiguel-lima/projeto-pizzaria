import { Request, Response, Router } from "express";

const router = Router();

router.post("/users", (req: Request, res: Response) => {
  res.json({ message: "FUNCIONANDO!!!!" });
});

export {router}

//ARQUITETURA EM CAMADAS ROUTES-CONTROLLER-SERVICE
//CONTROLLER > 
//SERVICE > RESPONSAVEL PELA LOGICA POR REALAIZAR OPERAÇOES


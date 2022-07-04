import {Router} from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { action } from "./Action.routes";
import { agent } from "./Agent.routes";
import { authenticateRoutes } from "./Authenticate.routes";
import { mission } from "./Mission.routes";
import { task } from "./Task.routes";

const router = Router()
router.use("/agent", agent)
router.use("/mission", mission)
router.use("/action", action)
router.use("/task",task)
router.use(authenticateRoutes)

 
export{router}


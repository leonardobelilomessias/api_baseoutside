import {Router} from "express";
import { action } from "./Action.routes";
import { agent } from "./Agent.routes";
import { authenticateRoutes } from "./Authenticate.routes";
import { mission } from "./Mission.routes";
import { password } from "./password.routes";
import { task } from "./Task.routes";

const router = Router()

router.use("/Agent", agent)
router.use("/mission", mission)
router.use("/action", action)
router.use("/task", task)
router.use(password)
router.use(authenticateRoutes)

 
export{router}


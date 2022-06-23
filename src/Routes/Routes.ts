import {Router} from "express";
import { agent } from "./Agent.routes";
import { mission } from "./Mission.routes";

const router = Router()

router.use("/agent", agent)
router.use("/mission",mission)


export{router}


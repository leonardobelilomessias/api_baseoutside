import {Router} from "express";
import { agent } from "./Agent.routes";

const router = Router()

router.use("/agent",agent)


export{router}


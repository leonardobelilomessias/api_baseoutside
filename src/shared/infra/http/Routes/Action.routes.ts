import { Router } from "express";
import { createActionController } from "../../../../modules/actions/UseCases/CreateActionUseCase";
import { listActionController } from "../../../../modules/actions/UseCases/ListActionUseCase";


const action = Router()

action.post("/", (request, response) => {
  createActionController.handle(request,response)
})

action.get("/", (request, response) => {
  listActionController.handle(request,response)
})

export {action}
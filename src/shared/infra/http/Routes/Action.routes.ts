import { Router } from "express";
import { createActionController } from "../../../../modules/actions/UseCases/CreateAction";
import { findActionByLocalController } from "../../../../modules/Actions/UseCases/FindActionByLocal";
import { findActionByNameController } from "../../../../modules/Actions/UseCases/FindActionByName";
import { listActionController } from "../../../../modules/actions/UseCases/ListAllActions";
import { updateActionController } from "../../../../modules/Actions/UseCases/UpdateAction";


const action = Router()

action.post("/", async (request, response) => {
 await  createActionController.handle(request,response)
})

action.get("/", (request, response) => {
  listActionController.handle(request,response)
})
action.get("/findActionByName", async (request, response) => {
  await findActionByNameController.handle(request,response)
})
action.get("/findActionByLocal", async (request, response) => {
  await findActionByLocalController.handle(request,response)
})

action.patch("/",async(request,response)=>{
  await updateActionController.handle(request,response)
})

export {action}
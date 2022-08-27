import { Router } from "express";
import { cancelActionController } from "../../../../modules/Actions/UseCases/CancelAction";
import { cancelAgentActionController } from "../../../../modules/Actions/UseCases/CancelAgentAction";
import { createActionController } from "../../../../modules/actions/UseCases/CreateAction";
import { createAgentActionController } from "../../../../modules/Actions/UseCases/CreateAgentAction";
import { createDepartamentController } from "../../../../modules/Actions/UseCases/CreateDepartament";
import { deleteDepartamentController } from "../../../../modules/Actions/UseCases/DeleteDepartament";
import { findActionByLocalController } from "../../../../modules/Actions/UseCases/FindActionByLocal";
import { findActionByNameController } from "../../../../modules/Actions/UseCases/FindActionByName";
import { listAgentsActionsController } from "../../../../modules/Actions/UseCases/ListAgentsAction";
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
action.get("/listAgentsAction", async (request, response) => {
  await listAgentsActionsController.handle(request,response)
})

action.patch("/",async(request,response)=>{
  await updateActionController.handle(request,response)
})

action.post("/createAgentAction",async(request,response)=>{
  await createAgentActionController.handle(request,response)
})
action.post("/createDepartament",async(request,response)=>{
  await createDepartamentController.handle(request,response)
})


action.delete("/",async(request,response)=>{
  await cancelActionController.handle(request,response)
})
action.delete("/cancelAgentAction",async(request,response)=>{
  await cancelAgentActionController.handle(request,response)
})
action.delete("/deleteDepartament",async(request,response)=>{
  await deleteDepartamentController.handle(request,response)
})
export {action}
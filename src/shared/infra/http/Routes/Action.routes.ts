import { Router } from "express";
import { cancelActionController } from "../../../../modules/Actions/UseCases/CancelAction";
import { cancelAgentActionController } from "../../../../modules/Actions/UseCases/CancelAgentAction";
import { createActionController } from "../../../../modules/Actions/UseCases/CreateAction";
import { createAgentActionController } from "../../../../modules/Actions/UseCases/CreateAgentAction";
import { createAgentDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/CreateAgentDepartament";
import { createDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/CreateDepartament";
import { deleteAgentDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/DeleteAgentDepartament";
import { deleteDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/DeleteDepartament";
import { listAgentsDepartmentController } from "../../../../modules/Actions/UseCases/Departaments/ListAgentsDepartament";
import { listDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/ListDepartamets";
import { createTaskDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/Tasks/CreateTask";
import { deleteTaskDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/Tasks/DeleteTaskDepartament";
import { listTasksDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/Tasks/ListTaskDepartament";
import { updateTaskDepartementController } from "../../../../modules/Actions/UseCases/Departaments/Tasks/UpdateTaskDepartament";
import { updateDepartamentController } from "../../../../modules/Actions/UseCases/Departaments/UpdateDepartament";
import { findActionByLocalController } from "../../../../modules/Actions/UseCases/FindActionByLocal";
import { findActionByNameController } from "../../../../modules/Actions/UseCases/FindActionByName";
import { listActionsAgentController } from "../../../../modules/Actions/UseCases/ListActionsAgent";
import { listActionByMissionController } from "../../../../modules/Actions/UseCases/ListActionsByMission";
import { listAgentsActionsController } from "../../../../modules/Actions/UseCases/ListAgentsAction";
import { listActionController } from "../../../../modules/Actions/UseCases/ListAllActions";
import { updateActionController } from "../../../../modules/Actions/UseCases/UpdateAction";
import { createWarningActionController } from "../../../../modules/Actions/UseCases/WarningsAction/CreateWarningAction";
import { deletedWarnigActionController } from "../../../../modules/Actions/UseCases/WarningsAction/DeleteWarningMission";
import { listwarnigsActionByStateController } from "../../../../modules/Actions/UseCases/WarningsAction/ListWarningByStatus";
import { listWarnigsActionController } from "../../../../modules/Actions/UseCases/WarningsAction/listWarningsAction";
import { listWarnigsActionByPriorityController } from "../../../../modules/Actions/UseCases/WarningsAction/ListWarningsByPriority";
import { listwarnigsActionByTypeController } from "../../../../modules/Actions/UseCases/WarningsAction/ListWarningsByType";
import { updateWarningActionController } from "../../../../modules/Actions/UseCases/WarningsAction/UpdateWarningMission";

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
action.get("/listdepartaments", async (request, response) => {
  await listDepartamentController.handle(request,response)
})
action.get("/listAgentsDepartaments", async (request, response) => {
  await listAgentsDepartmentController.handle(request,response)
})
action.get("/byIdMission", async (request, response) => {
  await listActionByMissionController.handle(request,response)
})
action.get("/actionsAgent", async (request, response) => {
  await listActionsAgentController.handle(request,response)
})


action.get("/listTasksDepartament", async (request, response) => {
  await listTasksDepartamentController.handle(request,response)
})
action.get("/warnings", async (request, response) => {
  await listWarnigsActionController.handle(request,response)
})
action.get("/warningsByState", async (request, response) => {
  await listwarnigsActionByStateController.handle(request,response)
})
action.get("/warningsByPriority", async (request, response) => {
  await listWarnigsActionByPriorityController.handle(request,response)
})
action.get("/warningsByType", async (request, response) => {
  await listwarnigsActionByTypeController.handle(request,response)
})
action.patch("/",async(request,response)=>{
  await updateActionController.handle(request,response)
})

action.patch("/updateTaskDepartament",async(request,response)=>{
  await updateTaskDepartementController.handle(request,response)
})
action.patch("/departament",async(request,response)=>{
  await updateDepartamentController.handle(request,response)
})
action.patch("/warning",async(request,response)=>{
  await updateWarningActionController.handle(request,response)
})


action.post("/createAgentAction",async(request,response)=>{
  await createAgentActionController.handle(request,response)
})
action.post("/createDepartament",async(request,response)=>{
  await createDepartamentController.handle(request,response)
})

action.post("/createAgentDepartament",async(request,response)=>{
  await createAgentDepartamentController.handle(request,response)
})

action.post("/createTaskDepartament",async(request,response)=>{
  await createTaskDepartamentController.handle(request,response)
})

action.post("/warning",async(request,response)=>{
  await createWarningActionController.handle(request,response)
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

action.delete("/deleteAgentDepartament",async(request,response)=>{
  await deleteAgentDepartamentController.handle(request,response)
})

action.delete("/deleteTaskDepartament",async(request,response)=>{
  await   deleteTaskDepartamentController.handle(request,response)
})
action.delete("/warning",async(request,response)=>{
  await   deletedWarnigActionController.handle(request,response)
})
export {action}
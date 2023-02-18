import { Router } from "express";
import  cancelActionController  from "../../../../modules/Actions/UseCases/CancelAction";
import  cancelAgentActionController  from "../../../../modules/Actions/UseCases/CancelAgentAction";
import  createActionController  from "../../../../modules/Actions/UseCases/CreateAction";
import  createAgentActionController  from "../../../../modules/Actions/UseCases/CreateAgentAction";
import  createAgentDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/CreateAgentDepartament";
import  createDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/CreateDepartament";
import  deleteAgentDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/DeleteAgentDepartament";
import  deleteDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/DeleteDepartament";
import  listAgentsDepartmentController  from "../../../../modules/Actions/UseCases/Departaments/ListAgentsDepartament";
import  listDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/ListDepartamets";
import  createAgentTaskController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/AgentsTasks/CreateAgentTask";
import  deleteAgentTaskController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/AgentsTasks/DeleteAgentTask";
import  listAgentTaskByStateController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/AgentsTasks/ListAgentTaskByState";
import  listAgentTaskController from "../../../../modules/Actions/UseCases/Departaments/Tasks/AgentsTasks/ListAgentTasks";
import  listTaskAgentController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/AgentsTasks/ListTaskAgent";
import  updateAgentTaskController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/AgentsTasks/UpdateAgentTask";
import  createTaskDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/CreateTask";
import  deleteTaskDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/DeleteTaskDepartament";
import  listTasksDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/ListTaskDepartament";
import  updateTaskDepartementController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/UpdateTaskDepartament";
import  createWarningTaskController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/WarningsTask/CreateWarningTask";
import  deletedWarnigTaskController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/WarningsTask/DeleteWarningTask";
import  listWarningsTaskController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/WarningsTask/listWarningsTask";
import  listWarningsTaskByPriorityController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/WarningsTask/ListWarningsTaskByPriority";
import  listwarningsTaskByTypeController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/WarningsTask/ListWarningsTaskByType";
import  listWarningsTaskByStateController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/WarningsTask/ListWarningTaskByStatus";
import  updateWarningTaskController  from "../../../../modules/Actions/UseCases/Departaments/Tasks/WarningsTask/UpdateWarningTask";
import  updateDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/UpdateDepartament";
import  createWarningDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/WarningsDepartament/CreateWarningDepartament";
import  deletedWarnigDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/WarningsDepartament/DeleteWarningDepartament";
import  listWarningsDepartamentByStateController  from "../../../../modules/Actions/UseCases/Departaments/WarningsDepartament/ListWarningDepartamentByStatus";
import  listWarningsDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/WarningsDepartament/listWarningsDepartament";
import  listWarningsDepartamentByPriorityController  from "../../../../modules/Actions/UseCases/Departaments/WarningsDepartament/ListWarningsDepartamentByPriority";
import  listwarningsDepartamentByTypeController  from "../../../../modules/Actions/UseCases/Departaments/WarningsDepartament/ListWarningsDepartamentByType";
import  updateWarningDepartamentController  from "../../../../modules/Actions/UseCases/Departaments/WarningsDepartament/UpdateWarningDepartament";
import  findActionByLocalController  from "../../../../modules/Actions/UseCases/FindActionByLocal";
import  findActionByNameController  from "../../../../modules/Actions/UseCases/FindActionByName";
import  listActionsAgentController  from "../../../../modules/Actions/UseCases/ListActionsAgent";
import  listActionByMissionController  from "../../../../modules/Actions/UseCases/ListActionsByMission";
import  listAgentsActionsController  from "../../../../modules/Actions/UseCases/ListAgentsAction";
import  listActionController  from "../../../../modules/Actions/UseCases/ListAllActions";
import  updateActionController  from "../../../../modules/Actions/UseCases/UpdateAction";
import  createWarningActionController  from "../../../../modules/Actions/UseCases/WarningsAction/CreateWarningAction";
import  deletedWarnigActionController  from "../../../../modules/Actions/UseCases/WarningsAction/DeleteWarningMission";
import  listwarnigsActionByStateController  from "../../../../modules/Actions/UseCases/WarningsAction/ListWarningByStatus";
import  listWarnigsActionController  from "../../../../modules/Actions/UseCases/WarningsAction/listWarningsAction";

import  listWarnigsActionByPriorityController  from "../../../../modules/Actions/UseCases/WarningsAction/ListWarningsByPriority";
import  listwarnigsActionByTypeController  from "../../../../modules/Actions/UseCases/WarningsAction/ListWarningsByType";
import  updateWarningActionController  from "../../../../modules/Actions/UseCases/WarningsAction/UpdateWarningMission";
import  {ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const action = Router()

action.post("/",ensureAuthenticate, async (request, response) => {
 await  createActionController().handle(request,response)
})

action.get("/", (request, response) => {
  listActionController().handle(request,response)
})
action.get("/findActionByName", async (request, response) => {
  await findActionByNameController().handle(request,response)
})
action.get("/findActionByLocal", async (request, response) => {
  await findActionByLocalController().handle(request,response)
})
action.get("/listAgentsAction", async (request, response) => {
  await listAgentsActionsController().handle(request,response)
})
action.get("/listdepartaments", async (request, response) => {
  await listDepartamentController().handle(request,response)
})
action.get("/listAgentsDepartaments", async (request, response) => {
  await listAgentsDepartmentController().handle(request,response)
})
action.get("/byIdMission", async (request, response) => {
  await listActionByMissionController().handle(request,response)
})
action.get("/actionsAgent", async (request, response) => {
  await listActionsAgentController().handle(request,response)
})

action.get("/listTasksDepartament", async (request, response) => {
  await listTasksDepartamentController().handle(request,response)
})
action.get("/warnings", async (request, response) => {
  await listWarnigsActionController().handle(request,response)
})
action.get("/warningsByState", async (request, response) => {
  await listwarnigsActionByStateController().handle(request,response)
})
action.get("/warningsByPriority", async (request, response) => {
  await listWarnigsActionByPriorityController().handle(request,response)
})
action.get("/warningsByType", async (request, response) => {
  await listwarnigsActionByTypeController().handle(request,response)
})
action.get("/warningsDepartamentByState", async (request, response) => {
  await listWarningsDepartamentByStateController().handle(request,response)
})
action.get("/warningsDepartament", async (request, response) => {
  await listWarningsDepartamentController().handle(request,response)
})
action.get("/warningsDepartamentByPriority", async (request, response) => {
  await listWarningsDepartamentByPriorityController().handle(request,response)
})
action.get("/warningsDepartamentByType", async (request, response) => {
  await listwarningsDepartamentByTypeController().handle(request,response)
})
action.get("/warningsTask", async (request, response) => {
  await listWarningsTaskController().handle(request,response)
})
action.get("/warningsTaskBystate", async (request, response) => {
  await listWarningsTaskByStateController().handle(request,response)
})
action.get("/warningsTaskByPriority", async (request, response) => {
  await listWarningsTaskByPriorityController().handle(request,response)
})
action.get("/warningsTaskByType", async (request, response) => {
  await listwarningsTaskByTypeController().handle(request,response)
})
action.get("/listAgentTasks", async (request, response) => {
  await listAgentTaskController().handle(request,response)
})

action.get("/listTaskAgents", async (request, response) => {
  await listTaskAgentController().handle(request,response)
})

action.get("/listAgentTaskByState", async (request, response) => {
  await listAgentTaskByStateController().handle(request,response)
})

action.patch("/",ensureAuthenticate, async(request,response)=>{
  await updateActionController().handle(request,response)
})

action.patch("/updateTaskDepartament",ensureAuthenticate, async(request,response)=>{
  await updateTaskDepartementController().handle(request,response)
})
action.patch("/departament",ensureAuthenticate, async(request,response)=>{
  await updateDepartamentController().handle(request,response)
})
action.patch("/warning",ensureAuthenticate, async(request,response)=>{
  await updateWarningActionController().handle(request,response)
})
action.patch("/warningDepartament",ensureAuthenticate,async(request,response)=>{
  await updateWarningDepartamentController().handle(request,response)
})
action.patch("/warningTask",ensureAuthenticate, async(request,response)=>{
  await updateWarningTaskController().handle(request,response)
})
action.patch("/updateAgentTask",async(request,response)=>{
  await updateAgentTaskController().handle(request,response)
})


action.post("/createAgentAction",ensureAuthenticate, async(request,response)=>{
  await createAgentActionController().handle(request,response)
})
action.post("/createDepartament",ensureAuthenticate, async(request,response)=>{
  await createDepartamentController().handle(request,response)
})

action.post("/createAgentDepartament",ensureAuthenticate, async(request,response)=>{
  await createAgentDepartamentController().handle(request,response)
})

action.post("/createTaskDepartament",ensureAuthenticate, async(request,response)=>{
  await createTaskDepartamentController().handle(request,response)
})

action.post("/warning",ensureAuthenticate, async(request,response)=>{
  await createWarningActionController().handle(request,response)
})

action.post("/warningDepartament",ensureAuthenticate, async(request,response)=>{
  await createWarningDepartamentController().handle(request,response)
})
action.post("/warningTask",ensureAuthenticate, async(request,response)=>{
  await createWarningTaskController().handle(request,response)
})

action.post("/agentTask", async(request,response)=>{
  await createAgentTaskController().handle(request,response)
})
action.delete("/",ensureAuthenticate, async(request,response)=>{
  await cancelActionController().handle(request,response)
})
action.delete("/cancelAgentAction",ensureAuthenticate, async(request,response)=>{
  await cancelAgentActionController().handle(request,response)
})
action.delete("/deleteDepartament",ensureAuthenticate, async(request,response)=>{
  await deleteDepartamentController().handle(request,response)
})

action.delete("/deleteAgentDepartament",ensureAuthenticate, async(request,response)=>{
  await deleteAgentDepartamentController().handle(request,response)
})

action.delete("/deleteTaskDepartament",ensureAuthenticate, async(request,response)=>{
  await   deleteTaskDepartamentController().handle(request,response)
})
action.delete("/warning",ensureAuthenticate, async(request,response)=>{
  await   deletedWarnigActionController().handle(request,response)
})
action.delete("/warningDepartament",ensureAuthenticate, async(request,response)=>{
  await   deletedWarnigDepartamentController().handle(request,response)
})
action.delete("/warningTask",ensureAuthenticate, async(request,response)=>{
  await   deletedWarnigTaskController().handle(request,response)
})
action.delete("/agentTask", async(request,response)=>{
  await  deleteAgentTaskController().handle(request,response)
})
export {action}
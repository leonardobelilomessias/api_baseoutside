import { Router } from "express";
import { resetAgentController } from "../../../../modules/accounts/ResetPassword";
import { sendForgotPasswordController } from "../../../../modules/accounts/sendForgotPassword";


const password = Router()

password.post("/forgotPassword",async (request, response) => {
 await  sendForgotPasswordController.handle(request,response)
})
password.post("/forgotPassword/reset",async (request, response) => {
  await  resetAgentController.handle(request,response)
 })
 password.get("/forgotPassword/reset",async (request, response) => {
  const id = request.query.id
  const token = request.query.token
  return response.json({message:`your id= ${id} and your token = ${token}`})
 })

export {password}
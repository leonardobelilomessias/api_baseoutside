import { Router } from "express";
import { sendForgotPasswordController } from "../../../../modules/accounts/sendForgotPassword";


const password = Router()

password.post("/forgot", (request, response) => {
  sendForgotPasswordController.handle(request,response)
})

export {password}
import "reflect-metadata"
import "express-async-errors"
import '../typeorm'
import { router } from "./Routes/Routes";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

const app = express()
  
app.use((err: Error, resquest:Request, response:Response, next:NextFunction) => {
  if (err instanceof AppError) {

    return response.status(err.statusCode).json({
      message:err.message
    })
  }
  return response.status(500).json({
    status: "error",
    message:`internal server error - ${err}`
  }) 
})
app.use(express.json())
app.use(router)  

app.get("/", (request, response) => {
  return response.json({message:"hello world, programing is the future"})
}) 

app.listen(3333, () => {
  console.log("Server work on !💻")
})
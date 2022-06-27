import "reflect-metadata"
import "express-async-errors"
import '../src/database'
import { router } from "./Routes/Routes";
import { AppError } from "./errors/AppError";
import express, { NextFunction, Request, Response } from "express";

const app = express()
app.use(express.json())
app.use(router)  
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


app.get("/", (request, response) => {
  return response.json({message:"hello world, programing is the future"}).send()
}) 

app.listen(3333, () => {
  console.log("Server work on !💻")
})
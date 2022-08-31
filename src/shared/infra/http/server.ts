import "reflect-metadata"
import "express-async-errors"
import '../typeorm'
import { router } from "./Routes/Routes";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/AppError";

const app = express()

app.use("/sendPhotos",express.static(`./tmp/sendPhotos`))
app.use(express.json())
app.use(router)  
app.use((error: Error, resquest:Request, response:Response, next:NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
      statusCode:error.statusCode
    }) 
  }
  return response.status(500).json({
    status: "error",
    message:`internal server error - ${error}`
  }) 
})

app.get("/", (request, response) => {
  return response.json({message:"hello world, programing is the future"})
}) 

app.listen(3333, () => {
  console.log("Server work on !💻")
})
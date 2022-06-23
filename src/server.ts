import "reflect-metadata"
import '../src/database'
import express from "express";
import { router } from "./Routes/Routes";

const app = express()
app.use(express.json())
app.use(router)

app.get("/", (request, response) => {
  return response.json({message:"hello world, programing is the future"})
})

app.listen(3333, () => {
  console.log("Server work on !💻")
})
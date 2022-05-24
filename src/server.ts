import express from "express";

const app = express()


app.get("/", (request, response) => {
  return response.json({message:"hello world, programing is the future"})
})

app.listen(3333, () => {
  console.log("Server work on !💻")
})
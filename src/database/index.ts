import { DataSource } from "typeorm";
import { Agent } from "../modules/Agents/Entities/Agent";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Leo175033",
  database: "crowdforeign",
  entities: [Agent],
  subscribers: [],
  migrations: ["./src/database/migrations/*.ts"],

 

  


})

AppDataSource.initialize().then(() => {
  console.log('DataBase initialized')
}).catch((err) => {
  console.log(err)
})
import { DataSource } from "typeorm";
import { Action } from "../modules/Actions/Entity/Action";
import { Agent } from "../modules/Agents/Entities/Agent";
import { Mission } from "../modules/Missions/Entities/Mission";
import { Task } from "../modules/Task/Entities/Task";
import { AgentToken } from "../modules/accounts/UserToken/Entity/AgentToken";
import { Interests } from "../modules/Agents/Entities/Interests";
import { Skills } from "../modules/Agents/Entities/Skills";
import { PhotoPublicationAgent } from "../modules/Agents/Entities/PhotoPublicationAgent";
import { PublicationAgent } from "../modules/Agents/Entities/PublicationAgent";



export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "Leo175033",
  database: "db_holdrope",
  entities: [Agent,Mission,Action,Task,AgentToken,Interests,Skills,PhotoPublicationAgent,PublicationAgent],
  migrations: ["./src/database/migrations/*.ts"],
  

 

  


})

AppDataSource.initialize().then(() => {
  console.log('DataBase initialized')
}).catch((err) => {
  console.log(err)
})
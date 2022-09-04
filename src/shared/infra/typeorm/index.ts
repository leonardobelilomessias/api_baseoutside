
import { DataSource } from "typeorm";
import { Departament } from "../../../modules/Actions/infra/typeorm/entities/Departament";
import { Agent } from "../../../modules/Agents/infra/typeorm/entities/Agent";
import { ColabAgent } from "../../../modules/Agents/infra/typeorm/entities/ColabAgent";
import { Interests } from "../../../modules/Agents/infra/typeorm/entities/Interests";
import { JourneyAgent } from "../../../modules/Agents/infra/typeorm/entities/JourneyAgent";
import { PhotoPublicationAgent } from "../../../modules/Agents/infra/typeorm/entities/PhotoPublicationAgent";
import { PublicationAgent } from "../../../modules/Agents/infra/typeorm/entities/PublicationAgent";
import { Skills } from "../../../modules/Agents/infra/typeorm/entities/Skills";
import { SponsorAgent } from "../../../modules/Agents/infra/typeorm/entities/SponsorAgent";
import { AgentMission } from "../../../modules/Missions/infra/typeorm/entities/AgentMission";
import { Mission } from "../../../modules/Missions/infra/typeorm/entities/Mission";
import { SponsorMission } from "../../../modules/Missions/infra/typeorm/entities/SponsorMission";
import  'dotenv/config';
import { AgentAction } from "../../../modules/Actions/infra/typeorm/entities/AgentAction";
import { AgentDepartament } from "../../../modules/Actions/infra/typeorm/entities/AgentDepartament";
import {  TaskDepartament } from "../../../modules/Actions/infra/typeorm/entities/TaskDepartament";
import { AgentToken } from "../../../modules/accounts/UserToken/infra/typeorm/entities/AgentToken";
import { Action } from "../../../modules/Actions/infra/typeorm/entities/Action";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database",
  port: 5432,
  username: process.env.USER_DATABASE ,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.DB_NAME, 
  entities: [Agent,
    JourneyAgent,
    SponsorAgent,
    Mission,
    Action,
    TaskDepartament,
    AgentToken,
    Interests,
    Skills,
    PhotoPublicationAgent,
    Departament,
    PublicationAgent,
    ColabAgent,
    AgentMission,
    SponsorMission,
    AgentAction,
    AgentDepartament
  ],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"]

})

AppDataSource.initialize().then(() => {
  console.log('DataBase initialized')
}).catch((err) => {
  console.log(err)
})
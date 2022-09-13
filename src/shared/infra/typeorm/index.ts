
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
import { CardAgent } from "../../../modules/Agents/infra/typeorm/entities/CardAgent";
import { AdminMission } from "../../../modules/Missions/infra/typeorm/entities/AdminMission";
import { PublicationMission } from "../../../modules/Missions/infra/typeorm/entities/PublicationMission";
import { PhotoPublicationMission } from "../../../modules/Missions/infra/typeorm/entities/PhotoPublicationMission";
import { JourneyMission } from "../../../modules/Missions/infra/typeorm/entities/JourneyMission";
import { CardMission } from "../../../modules/Missions/infra/typeorm/entities/CardMission";
import { WarningsMission } from "../../../modules/Missions/infra/typeorm/entities/WarningMission";
import { WarningsAction } from "../../../modules/Actions/infra/typeorm/entities/WarningAction";
import { WarningsDepartament } from "../../../modules/Actions/infra/typeorm/entities/WarningDepartament";
import { WarningsTask } from "../../../modules/Actions/infra/typeorm/entities/WarningTask";
 
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
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
    AgentDepartament,
    CardAgent,
    AdminMission,
    PublicationMission,
    PhotoPublicationMission,
    JourneyMission,
    CardMission,
    WarningsMission,
    WarningsAction,
    WarningsDepartament,
    WarningsTask
  ],
  migrations: ["../../shared/infra/typeorm/migrations/*ts"]

})

AppDataSource.initialize().then(() => {
  console.log('DataBase initialized')
}).catch((err) => {
  console.log(err)
})
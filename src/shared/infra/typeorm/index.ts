
import { DataSource } from "typeorm";
import { AgentToken } from "../../../modules/accounts/userToken/infra/typeorm/entities/AgentToken";
import { Action } from "../../../modules/actions/infra/typeorm/entities/Action";
import { Departament } from "../../../modules/Actions/infra/typeorm/entities/Departament";
import { Agent } from "../../../modules/agents/infra/typeorm/entities/Agent";
import { ColabAgent } from "../../../modules/agents/infra/typeorm/entities/ColabAgent";
import { Interests } from "../../../modules/agents/infra/typeorm/entities/Interests";
import { JourneyAgent } from "../../../modules/agents/infra/typeorm/entities/JourneyAgent";
import { PhotoPublicationAgent } from "../../../modules/Agents/infra/typeorm/entities/PhotoPublicationAgent";
import { PublicationAgent } from "../../../modules/Agents/infra/typeorm/entities/PublicationAgent";
import { Skills } from "../../../modules/agents/infra/typeorm/entities/Skills";
import { SponsorAgent } from "../../../modules/agents/infra/typeorm/entities/SponsorAgent";
import { AgentMission } from "../../../modules/missions/infra/typeorm/entities/AgentMission";
import { Mission } from "../../../modules/missions/infra/typeorm/entities/Mission";
import { SponsorMission } from "../../../modules/missions/infra/typeorm/entities/SponsorMission";
import { Task } from "../../../modules/tasks/infra/typeorm/entities/Task";
import  'dotenv/config';
import { AgentAction } from "../../../modules/Actions/infra/typeorm/entities/AgentAction";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.USER_DATABASE ,
  password: process.env.PASSWORD_DATABASE,
  database: "db_holdrope", 
  entities: [Agent,
    JourneyAgent,
    SponsorAgent,
    Mission,
    Action,
    Task,
    AgentToken,
    Interests,
    Skills,
    PhotoPublicationAgent,
    Departament,
    PublicationAgent,
    ColabAgent,
    AgentMission,
    SponsorMission,
    AgentAction
  ],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"]

})

AppDataSource.initialize().then(() => {
  console.log('DataBase initialized')
}).catch((err) => {
  console.log(err)
})
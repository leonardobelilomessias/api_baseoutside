import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { ToCancelColabAgentController } from "./ToCancelColabAgentController";
import { ToCancelColabAgentUseCase } from "./ToCancelColabAgentUseCase";

const colabAgentRepository = new ColabAgentRepository()
const toCancelColabAgentUseCase = new ToCancelColabAgentUseCase(colabAgentRepository)
const toCancelColabAgentController = new ToCancelColabAgentController(toCancelColabAgentUseCase)

export{toCancelColabAgentController}
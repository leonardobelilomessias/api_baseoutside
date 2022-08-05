



import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository";
import { SkillsRepository } from "../../infra/typeorm/repositories/SkillsRepository";
import { DeactivateAgentController } from "./DeactivateAgentController";
import { DeactivateAgentUseCase } from "./DeactivateAgentUseCase";

const skillsRepository = new SkillsRepository() 
const interestsRepository = new InterestsRepository()
const agenteRepository = new AgentRepository()
const deactivateAgentUseCase = new DeactivateAgentUseCase(agenteRepository)
const deactivateAgentController = new DeactivateAgentController(deactivateAgentUseCase)

export{ deactivateAgentController}
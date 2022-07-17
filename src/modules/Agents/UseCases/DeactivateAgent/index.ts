import { AgentRepository } from "../../Repository/AgentRepository";
import { InterestsRepository } from "../../Repository/InterestsRepository";
import { SkillsRepository } from "../../Repository/SkillsRepository";
import { DeactivateAgentController } from "./DeactivateAgentController";
import { DeactivateAgentUseCase } from "./DeactivateAgentUseCase";

const skillsRepository = new SkillsRepository() 
const interestsRepository = new InterestsRepository()
const agenteRepository = new AgentRepository()
const deactivateAgentUseCase = new DeactivateAgentUseCase(agenteRepository)
const deactivateAgentController = new DeactivateAgentController(deactivateAgentUseCase)

export{ deactivateAgentController}
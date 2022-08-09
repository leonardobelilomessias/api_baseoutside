import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { SkillsRepository } from "../../infra/typeorm/repositories/SkillsRepository";
import { FindAgentsBySkillsController } from "./FindAgentBySkillController";
import { FindAgentsBySkillsUseCase } from "./FindAgentBySkillUseCase";

const agentRepository = new AgentRepository()
const skillRepository = new SkillsRepository()
const findAgentsBySkillsUseCase = new FindAgentsBySkillsUseCase(agentRepository,skillRepository)
const findAgentsBySkillsController = new FindAgentsBySkillsController(findAgentsBySkillsUseCase)

export{findAgentsBySkillsController}
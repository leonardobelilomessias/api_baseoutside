import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository";
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository";
import { InterestsRepositoryInMemory } from "../../RepositoryInMemory/InterestsRepositoryInMemory";
import { FindyByInterestController } from "./FindByInterestController";
import { FindAgentsByInterestUseCase } from "./FindByInterestUseCase";

const agentRepository = new AgentInMemoryRepository()
const interestRepository = new InterestsRepositoryInMemory()
const findByInterestUseCase = new FindAgentsByInterestUseCase(interestRepository,agentRepository)
const findyByInterestController = new FindyByInterestController(findByInterestUseCase)

export{findyByInterestController}

import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository";
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository";
import { InterestsRepositoryInMemory } from "../../RepositoryInMemory/InterestsRepositoryInMemory";
import { FindyByInterestController } from "./FindByInterestController";
import { FindAgentsByInterestUseCase } from "./FindByInterestUseCase";

export default()=>{

  const agentRepository = new AgentInMemoryRepository()
  const interestRepository = new InterestsRepository()
  const findByInterestUseCase = new FindAgentsByInterestUseCase(interestRepository)
  const findyByInterestController = new FindyByInterestController(findByInterestUseCase)
  return findyByInterestController
}



import { CardAgentRepository } from "../../infra/typeorm/repositories/CardAgentRepository";
import { FindCardAgentController } from "./FindCardAgentController";
import { FindCardAgentUseCase } from "./FindCardAgentUseCase";

export default()=>{

  const cardAgentRepository = new CardAgentRepository()
  const findCardAgentUseCase = new FindCardAgentUseCase(cardAgentRepository)
  const findCardAgentController = new FindCardAgentController(findCardAgentUseCase)
  return findCardAgentController
}
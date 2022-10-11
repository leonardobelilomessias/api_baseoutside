import { CardAgentRepository } from "../../infra/typeorm/repositories/CardAgentRepository";
import { DeleteCardAgentController } from "./DeleteCardAgentController";
import { DeleteCardAgentUseCase } from "./DeleteCardAgentUseCase";

export default ()=>{
  const cardAgentRepository = new CardAgentRepository()
  const deleteCardAgentUseCase = new DeleteCardAgentUseCase(cardAgentRepository)
  const deletedCardAgentController = new DeleteCardAgentController(deleteCardAgentUseCase)
  return deletedCardAgentController
}

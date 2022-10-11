import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository";
import { ListAgentsSponsorController } from "./ListAgentsSponsorController";
import { ListAgentsSponsorUseCase } from "./ListAgentsSponsorUseCase";

export default()=>{
  const sponsorAgentRepository = new SponsorsAgentsRepository()
  const lisAgentsSponsorUseCase = new ListAgentsSponsorUseCase(sponsorAgentRepository)
  const listAgentsSponsorController = new ListAgentsSponsorController(lisAgentsSponsorUseCase)
  return listAgentsSponsorController
}

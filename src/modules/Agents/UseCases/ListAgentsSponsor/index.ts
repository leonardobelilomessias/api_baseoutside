import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository";
import { ListAgentsSponsorController } from "./ListAgentsSponsorController";
import { ListAgentsSponsorUseCase } from "./ListAgentsSponsorUseCase";

const sponsorAgentRepository = new SponsorsAgentsRepository()
const lisAgentsSponsorUseCase = new ListAgentsSponsorUseCase(sponsorAgentRepository)
const listAgentsSponsorController = new ListAgentsSponsorController(lisAgentsSponsorUseCase)
export{listAgentsSponsorController}
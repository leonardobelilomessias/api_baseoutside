import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository.ts";
import { ListAgentsSponsorUseCase } from "./ListAgentsSponsor";
import { ListAgentsSponsorController } from "./ListAgentsSponsorController";

const sponsorAgentRepository = new SponsorsAgentsRepository()
const lisAgentsSponsorUseCase = new ListAgentsSponsorUseCase(sponsorAgentRepository)
const listAgentsSponsorController = new ListAgentsSponsorController(lisAgentsSponsorUseCase)
export{listAgentsSponsorController}
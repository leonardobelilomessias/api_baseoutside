import { AppError } from "../../../../shared/errors/AppError"
import { IInputCreateAgentActionDTO, IOutputCreateAgentActionDTO } from "../../dtos/IAgentActionDTOS"
import { IAgentActionRepository } from "../../repositories/IAgentActionRepository"
import { ValidatorSubscribe } from "../../util/Validators/ValidatorSubscribe"

class CreateAgentActionUseCase{
  private agentActionRepository:IAgentActionRepository
  constructor(agentActionRepository:IAgentActionRepository){
    this.agentActionRepository = agentActionRepository
  }
  async execute({id_agent_token,id_agent,id_action}:IInputCreateAgentActionDTO):Promise<IOutputCreateAgentActionDTO>{
    if(!id_agent||!id_action) throw new AppError("Value og agent or action undefined.")
    const foundAgentAction = await this.agentActionRepository.findAgentAction({id_agent,id_action})
    if(foundAgentAction) throw new AppError("Agent alredy is at action")
    const validateAbleSubscribe = await ValidatorSubscribe.ableSubscribeAction({id_action,id_agent})
    if(!validateAbleSubscribe) throw new AppError("Agent  must to participate of mission od action to subscribe")
    if(id_agent_token !== id_agent_token)throw new AppError("Agent authenticade doesn't have permission to action")
    const newAgentAction = await this.agentActionRepository.create({id_agent,id_action})
    return newAgentAction
  }
}
export{CreateAgentActionUseCase}
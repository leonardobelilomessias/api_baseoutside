import { AppError } from "../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputDeleteAgentActionDTO, IOutputDeleteAgentActionDTO } from "../../dtos/IAgentActionDTOS"
import { AgentAction } from "../../infra/typeorm/entities/AgentAction"
import { IAgentActionRepository } from "../../repositories/IAgentActionRepository"
import { ValidatorSubscribe } from "../../util/Validators/ValidatorSubscribe"

class CancelAgentActionUseCase{
  private agentActionRepository:IAgentActionRepository
  private menagePermission : MenagerPermissionRespository
  constructor(agentActionRepository:IAgentActionRepository){
    this.agentActionRepository = agentActionRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_action,id_agent}:IInputDeleteAgentActionDTO):Promise<IOutputDeleteAgentActionDTO>{
    if(!id_action||!id_agent) throw new AppError("Value of Action or agent undefined!")
    const findAgentMission = await this.agentActionRepository.findAgentAction({id_agent,id_action})
    if(!findAgentMission)throw new AppError("Agent not found on action.")
    const allowDeleteAgenAction = await this.menagePermission.confirmePermissionAction({id_agent_token,id_action})
    if(!allowDeleteAgenAction && id_agent_token !==id_agent)throw new AppError("Agent doesn't have permission to action")
    const cancelAgentAction = await this.agentActionRepository.delete({id_action,id_agent})
    return cancelAgentAction
  }

}
export{CancelAgentActionUseCase}
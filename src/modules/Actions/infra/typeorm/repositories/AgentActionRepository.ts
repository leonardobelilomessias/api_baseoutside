import { IAgentActionRepository } from "../../../repositories/IAgentActionRepository";
import { AgentAction } from "../entities/AgentAction";

class AgentActionRepository implements IAgentActionRepository{
  findAgentAction({ id_action, id_agent }: { id_action: any; id_agent: any; }): Promise<AgentAction> {
    throw new Error("Method not implemented.");
  }
  create({ id_action, id_agent }: { id_action: any; id_agent: any; }): Promise<AgentAction> {
    throw new Error("Method not implemented.");
  }
  listAgentsAction(id_action: any): Promise<AgentAction[]> {
    throw new Error("Method not implemented.");
  }
  listActionsAgent(id_agent: any): Promise<AgentAction> {
    throw new Error("Method not implemented.");
  }
  delete({ id_action, id_agent }: { id_action: any; id_agent: any; }): Promise<AgentAction> {
    throw new Error("Method not implemented.");
  }

}
export{AgentActionRepository}
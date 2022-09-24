
interface IAgentTaskRepository{

  create({id_agent,id_task})

  listTaskAgent(id_agent:string)

  listAgentTask(id_task:string)

  listAgentTaskByState({state,id_task})

  updateAgentTask({id_agent,id_task,state})

  deleteAgentTask({id_agent,id_task,})

}
export{IAgentTaskRepository}
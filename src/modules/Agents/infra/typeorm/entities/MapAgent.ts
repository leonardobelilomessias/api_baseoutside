import { Agent } from "./Agent"

class MapAgent{
   agent :Agent
  constructor(Agent:Agent){
  this.agent = Agent
}
 dealingAgent(){
  delete this.agent.password

 }
}
export{MapAgent}
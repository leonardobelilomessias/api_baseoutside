import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuidv4 } from 'uuid'
@Entity("agents_missions")
class AgentMission{

  @PrimaryColumn()
  id: string;

  @Column()
  id_mission: string;
  
  @Column()
  id_agent:string;

  @CreateDateColumn()
  created_at:Date;
  
  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }

}
export{AgentMission}
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Agent } from "../../../Agents/Entities/Agent";
import {v4 as uuidv4} from 'uuid'

@Entity("users_token")
class AgentToken{
  @PrimaryColumn()
  id: string;

  @Column()
  refresh_token: string;

  @Column()
  agent_id: string;

  @ManyToOne(()=>Agent)
  @JoinColumn({name:"agent_id"})
  fk_userToken: Agent

  @Column()
  expires_date: string;
  
  @Column()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
  }

}

export{AgentToken}
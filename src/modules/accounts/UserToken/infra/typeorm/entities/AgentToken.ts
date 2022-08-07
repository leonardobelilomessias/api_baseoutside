import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import {v4 as uuidv4} from 'uuid'
import { Agent } from "../../../../../agents/infra/typeorm/entities/Agent";

@Entity("agents_tokens")
class AgentToken{
  @PrimaryColumn()
  id: string;

  @Column()
  refresh_token: string;

  @Column()
  id_agent: string;

  @ManyToOne(()=>Agent)
  @JoinColumn({name:"id_agent"})
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
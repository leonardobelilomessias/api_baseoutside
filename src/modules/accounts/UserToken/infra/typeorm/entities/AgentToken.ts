import { Column, Entity, PrimaryColumn } from "typeorm";

import {v4 as uuidv4} from 'uuid'


@Entity("agents_tokens")
class AgentToken{
  @PrimaryColumn()
  id: string;

  @Column()
  refresh_token: string;

  @Column()
  id_agent: string;


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